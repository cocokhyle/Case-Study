import BoxSymbol from "../symbols/BoxSymbol";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import URLs from "../symbols/links";
import SubTitle from "../symbols/SubTitle";
import Title from "../symbols/Title";
import CodeBox from "../UI's/code_box";

const content = [
  { type: "title", margin: "", content: "Deploying Prometheus" },

  {
    type: "sub_title",
    margin: "",
    content: "Setting up Prometheus using Helm",
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: 'Create a "monitoring" namespace',
  },

  {
    type: "command",
    margin: "ml-10",
    content: "$ kubectl create namespace monitoring ",
  },

  { type: "hollow_dot", margin: "ml-16", content: "Add Helm Repository Info " },
  {
    type: "command",
    margin: "ml-10",
    content: `$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts 
$ helm repo update `,
  },

  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Install Prometheus Operator",
  },

  {
    type: "command",
    margin: "ml-10",
    content: `helm install prometheus-operator prometheus-community/kube-prometheus-stack -n monitoring `,
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Change Services to NodePort ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ kubectl edit service -n monitoring <service-name> `,
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content:
      "Change and add the following to the service yml file, use the command above:",
  },
  {
    type: "box",
    margin: "ml-24",
    content: "Service name: prometheus-operator-kube-p-prometheus",
  },

  {
    type: "hollow_box",
    margin: "ml-32",
    content: "type: NodePort ",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "nodePort: 32090  ",
  },
  {
    type: "box",
    margin: "ml-24",
    content: "Service name: prometheus-operator-kube-p-alertmanager ",
  },

  {
    type: "hollow_box",
    margin: "ml-32",
    content: "type: NodePort ",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "nodePort: 32091  ",
  },
  {
    type: "box",
    margin: "ml-24",
    content: "Service name: prometheus-operator-grafana ",
  },

  {
    type: "hollow_box",
    margin: "ml-32",
    content: "type: NodePort ",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "nodePort: 32092  ",
  },
  {
    type: "sub_title",
    margin: "",
    content: "Accessing UI's on the browser",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Prometheus: ",
  },
  {
    type: "link",
    margin: "ml-16",
    content: "<Node-IP-Adress>:32090",
  },

  {
    type: "dot",
    margin: "ml-5",
    content: "Alert Manager:",
  },
  {
    type: "link",
    margin: "ml-16",
    content: "<Node-IP-Adress>:32091",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Grafana:",
  },
  {
    type: "link",
    margin: "ml-16",
    content: "<Node-IP-Adress>:32092",
  },
  {
    type: "sub_title",
    margin: "",
    content: "For Scraping the Webapp Metrics ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content:
      "Use the custom CRD of Service Monitor by applying the following yaml file configuration.  ",
  },
  {
    type: "sub_title",
    margin: "",
    content: "For Scraping the Webapp Metrics ",
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `apiVersion: monitoring.coreos.com/v1 
kind: ServiceMonitor 
metadata: 
  labels: 
    release: prometheus-operator 
  name: webapp 
  namespace: monitoring 
spec: 
  endpoints: 
  - path: /metrics 
    port: web 
    targetPort: 3000 
  namespaceSelector: 
    matchNames: 
    - webapp 
  selector: 
    matchLabels: 
      app: webapp-service `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "It will scape metrics in /metrics end of the webapp",
  },
];

export default function DeployingPrometheus() {
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
      <Title title="" />
    </div>
  );
}
