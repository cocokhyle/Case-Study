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
  {
    type: "title",
    margin: "ml-5",
    content: "Ingesting Data to Splunk ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "K8S Cluster Logs",
  },
  {
    type: "dash",
    margin: "ml-10",
    content: "Using Splunk OpenTelemetry Collector via Helm ",
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Add Helm Repo ",
  },

  {
    type: "command",
    margin: "ml-10",
    content:
      "$ helm repo add splunk-otel-collector-chart https://signalfx.github.io/splunk-otel-collector-chart ",
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Generate values.yaml (renamed otel.yaml)",
  },
  {
    type: "command",
    margin: "ml-10",
    content:
      "$ helm show values splunk-otel-collector-chart/splunk-otel-collector > otel.yaml ",
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Change/Add the Following to the yaml file ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `clusterName: legalloggers-cluster 
    endpoint: https://139.162.49.20:32094/services/collector/event 
    token:  
    index: "k8s_events" 
    metricsIndex: "k8s_metrics" 
    insecureSkipVerify: true 
    metricsEnabled: true 
    logsEngine: otel 
    containerRuntime: "containerd" 
    excludeAgentLogs: false `,
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Deploy the Splunk OpenTelemetry Collector ",
  },
  {
    type: "command",
    margin: "ml-10",
    content:
      "$ helm -n otel install legalloggers-cluster -f otel.yaml splunk-otel-collector-chart/splunk-otel-collector ",
  },
];

export default function IngestingDataToSplunk() {
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
