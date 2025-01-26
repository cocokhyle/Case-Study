const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("winston");
const path = require("path");
const fs = require("fs");
const logger = require("./logger");
const client = require("prom-client"); // Prometheus client library
const rateLimit = require("express-rate-limit");

const app = express();
const port = 3000;

// app.use(limiter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Prometheus metrics setup
const httpRequestDurationSeconds = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "status_code", "endpoint"],
});

const httpResponseSizeBytes = new client.Counter({
  name: "http_response_size_bytes",
  help: "Total size of HTTP responses in bytes",
  labelNames: ["method", "endpoint"],
});

const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

const register = new client.Registry();
register.registerMetric(httpRequestDurationSeconds);
register.registerMetric(httpResponseSizeBytes);
register.registerMetric(httpRequestCounter);

// Custom logging middleware
const logFormat = (req, res, next) => {
  req._startTime = Date.now();
  res.on("finish", () => {
    const duration = (Date.now() - req._startTime) / 1000;
    httpRequestCounter.inc({
      method: req.method,
      route: req.originalUrl,
      status: res.statusCode,
    });
    httpRequestDurationSeconds.observe(
      {
        method: req.method,
        status_code: res.statusCode,
        endpoint: req.originalUrl,
      },
      duration
    );
    httpResponseSizeBytes.inc(
      { method: req.method, endpoint: req.originalUrl },
      parseInt(res.get("Content-Length"), 10) || 0
    );

    const logEntry = {
      time: Math.floor(Date.now() / 1000),
      level: res.statusCode >= 400 ? "error" : "info",
      message: "Request processed",
      index: "testing",
      source: "_json",
      http_request_duration_seconds: (Date.now() - req._startTime) / 1000,
      http_response_size_bytes: parseInt(res.get("Content-Length"), 10) || 0,
      status_code: res.statusCode,
      method: req.method,
      endpoint: req.originalUrl,
    };

    // Your custom log format using winston
    const customFormat = winston.format.printf(
      ({ timestamp, level, message, ...meta }) => {
        return JSON.stringify({
          timestamp,
          level,
          message,
          ...meta, // Flattening the meta object to the root of the log
        });
      }
    );

    logger.log(logEntry);
  });
  next();
};

app.use(logFormat);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use morgan for detailed HTTP request logging
app.use(
  morgan("tiny", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);
// Rate limiter
const tableLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 50,
  handler: (req, res) => {
    res.status(500).render("errorResponse", {
      status_code: "500",
      message: "Internal Server Error: Unable to connect to the database",
    });
  },
});
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 50,
  handler: (req, res) => {
    res.status(429).render("errorResponse", {
      status_code: "429",
      message: "Too many login attempts, please try again later.",
    });
  },
});

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Serve static files (e.g., HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

// // Function to fetch users from the "database"
const getUsers = () => {
  const data = fs.readFileSync("users.json");
  return JSON.parse(data).users;
};

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to display emails in an HTML table
app.get("/table", tableLimiter, (req, res) => {
  // Read the users.json file
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      return res.status(500).render("errorResponse", {
        status_code: "500",
        message: "Internal Server Error: Unable to connect to the database",
      });
    }
    // Parse the JSON data
    const users = JSON.parse(data).users;
    res.render("table", { users });
  });
});

app.post("/login", loginLimiter, (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    logger.warn(
      `400 Bad Request: Email and password are required - ${req.method} ${req.originalUrl}`
    );
    return res.status(400).render("errorResponse", {
      status_code: "400",
      message: "Bad Request: Email and password are required",
    });
  }

  let users;
  try {
    users = getUsers();
  } catch (error) {
    logger.error(
      `500 Internal Server Error: ${error.message} - ${req.method} ${req.originalUrl}`
    );
    return res.status(500).render("errorResponse", {
      status_code: "500",
      message: "Internal Server Error: Unable to connect to the database",
    });
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    logger.warn(
      `401 Unauthorized: Invalid email or password - ${req.method} ${req.originalUrl}`
    );
    return res.status(401).render("errorResponse", {
      status_code: "401",
      message: "Unauthorized: Invalid email or password",
    });
  }

  logger.info(`200 OK: Login successful - ${req.method} ${req.originalUrl}`);
  res.status(200).render("loginResponse", { username: user.name });
});

// Simulate a 503 Service Unavailable error
app.get("/maintenance", (req, res) => {
  logger.error(
    `503 Service Unavailable: Server under maintenance - ${req.method} ${req.originalUrl}`
  );
  res.status(503).render("errorResponse", {
    status_code: "503",
    message: "Service Unavailable: Server under maintinance",
  });
});

// Catch-all for 404 Not Found
app.use((req, res) => {
  logger.warn(
    `404 Not Found: Endpoint not found - ${req.method} ${req.originalUrl}`
  );
  res.status(404).render("errorResponse", {
    status_code: "404",
    message: "Not Found: Page not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.message);
  res
    .status(err.status || 500)
    .json({ error: err.message })
    .sendFile(path.join(__dirname, "public", "500.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
