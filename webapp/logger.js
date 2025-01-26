const { createLogger, format, transports } = require("winston");
const SplunkStreamEvent = require("winston-splunk-httplogger");

const splunkStream = new SplunkStreamEvent({
  splunk: {
    token: "91ae3ff1-54b4-4610-a056-838b1b076cec",
    url: "https://139.162.49.20:32094/services/collector/event",
    index: "webapp",
    source: "webapp",
    sourcetype: "_json",
  },
  maxRetries: 3, // Optional: Number of retries on failure
});

splunkStream.on("error", (err) => {
  console.error("Error sending log to Splunk:", err);
});
;

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    splunkStream,
    new transports.File({ filename: "app.log" }),
  ],
});

// Test log entry
logger.info("Test log entry to verify Splunk logging");

module.exports = logger;

