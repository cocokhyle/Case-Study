import BoxSymbol from "../symbols/BoxSymbol";
import DashSymbol from "../symbols/DashSymbol";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import URLs from "../symbols/links";
import SubTitle from "../symbols/SubTitle";
import Title from "../symbols/Title";
import CodeBox from "../UI's/code_box";

const content = [
  { type: "title", margin: "", content: "Creating Webapp Alerting Rules" },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create PrometheusRule manifest file ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: "$ vi prometheus-webalerts.yaml",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Copy and Paste the following configuration",
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `apiVersion: monitoring.coreos.com/v1 
kind: PrometheusRule 
metadata: 
  labels: 
    release: prometheus-operator 
  name: webapp-alerts 
  namespace: monitoring 
spec: 
  groups: 
  - name: webapp.rules 
    rules: 
    - alert: HighDowntime 
      annotations: 
        description: The web app is unreachable for more than 1 minute. 
        summary: Web App is down 
      expr: up{pod=~"webapp.*"} == 0 
      for: 1m 
      labels: 
        severity: critical 
    - alert: HighCPUUsage 
      annotations: 
        description: The CPU usage of {{ $labels.pod }} is above 80%. 
        summary: High CPU Usage 
      expr: sum(rate(container_cpu_usage_seconds_total{pod=~"webapp.*"}[1m])) > 0.8 
      for: 5m 
      labels: 
        severity: warning 
    - alert: High5xxErrorRate 
      annotations: 
        description: The error rate of HTTP 5xx requests is high. 
        summary: High HTTP 5xx Error Rate 
      expr: rate(http_requests_total{status=~"5.*"}[5m]) > 5 
      for: 5m 
      labels: 
        severity: critical 
    - alert: HighMemoryUsage 
      annotations: 
        description: The memory usage of {{ $labels.pod }} is above 80%. 
        summary: High Memory Usage 
      expr: sum(container_memory_working_set_bytes{pod=~"webapp.*"}) / sum(node_memory_MemTotal_bytes) 
        > 0.8 
      for: 5m 
      labels: 
        severity: warning 
    - alert: High4xxErrorRate 
      annotations: 
        description: The error rate of HTTP 4xx requests is high. 
        summary: High HTTP 4xx Error Rate 
      expr: rate(http_requests_total{status=~"4.."}[5m]) > 5 
      for: 5m 
      labels: 
        severity: warning 
    - alert: TestAlert 
      annotations: 
        description: This is a test alert to verify Alertmanager. 
        summary: Test alert 
      expr: vector(1) 
      for: 30s 
      labels: 
        severity: critical `,
  },
  { type: "dot", margin: "ml-5", content: "Apply the yml configuration" },
  {
    type: "command",
    margin: "ml-10",
    content: "kubectl apply -f prometheus-webalerts.yaml",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Make sure the rule is applied:",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content:
      "Visit alerts tab on prometheus and verify if the rule is applied.",
  },
  { type: "", margin: "", content: "" },
  { type: "", margin: "", content: "" },
  { type: "", margin: "", content: "" },
];

export default function WebappAlertingRule() {
  return (
    <div className="flex flex-col gap-5 px-10 ">
      {content.map((item, index) => (
        <div key={index}>
          {item.type === "title" && <Title title={item.content} />}
          {item.type === "sub_title" && <SubTitle title={item.content} />}
          {item.type === "dot" && (
            <div className={item.margin}>
              <DotSymbol title={item.content} />
            </div>
          )}
          {item.type === "hollow_dot" && (
            <div className={item.margin}>
              <HollowDotSymbol title={item.content} />
            </div>
          )}
          {item.type === "box" && (
            <div className={item.margin}>
              <BoxSymbol title={item.content} />
            </div>
          )}
          {item.type === "hollow_box" && (
            <div className={item.margin}>
              <HollowBoxSymbol title={item.content} />
            </div>
          )}
          {item.type === "dash" && (
            <div className={item.margin}>
              <DashSymbol title={item.content} />
            </div>
          )}
          {item.type === "url" && (
            <div className={item.margin}>
              <URLs title={item.content} />
            </div>
          )}
          {item.type === "command" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
          {item.type === "link" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
          {item.type === "yml" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
