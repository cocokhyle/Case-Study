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
    margin: "",
    content: "Deploying Splunk Enterprise with Splunk Operator using Helm ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content:
      "Installing Splunk Operator, go to the link below for more details:",
  },
  {
    type: "url",
    margin: "ml-10",
    content:
      "https://splunk.github.io/splunk-operator/#installing-the-splunk-operator",
  },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Start the Splunk Operator for specific namespace",
  },
  {
    type: "command",
    margin: "ml-10",
    content:
      "$ kubectl apply -f https://github.com/splunk/splunk-operator/releases/download/2.7.0/splunk-operator-namespace.yaml --server-side  --force-conflicts",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Creating a Splunk Enterprise Deployment",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Creating a Standalone Splunk ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: "$ vi splunk-standalone.yaml ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Then paste the following content in the file",
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `kind: Standalone 
metadata: 
  name: s1 
  namespace: splunk-operator 
  finalizers: 
  - enterprise.splunk.com/delete-pvc 
spec: 
  etcVolumeStorageConfig: 
    storageCapacity: 10Gi 
  varVolumeStorageConfig: 
    storageCapacity: 30Gi 
  serviceTemplate: 
    spec: 
      type: NodePort 
  startupProbe: 
    initialDelaySeconds: 300 
    periodSeconds: 10 
    failureThreshold: 30 
  livenessInitialDelaySeconds: 400 
  readinessInitialDelaySeconds: 390 `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Then apply the configuration",
  },
  {
    type: "command",
    margin: "ml-10",
    content: "kubectl apply -f splunk-standalone.yaml -n splunk-operator",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Changing Services to NodePort ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Change Services to NodePort",
  },
  {
    type: "command",
    margin: "ml-10",
    content: "kubectl edit service -n splunk-operator <service-name> ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Edit the configuration file using the command above:",
  },
  {
    type: "box",
    margin: "ml-16",
    content: "Service name: splunk-s1-standalone-service ",
  },
  {
    type: "box",
    margin: "ml-24",
    content: "http-web",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "type: NodePort",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "nodePort: 32093 ",
  },
  {
    type: "box",
    margin: "ml-24",
    content: "http-hec ",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "type: NodePort",
  },
  {
    type: "hollow_box",
    margin: "ml-32",
    content: "nodePort: 32094",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Accessing the Splunk UI in the browser",
  },
  {
    type: "link",
    margin: "ml-10",
    content: "<Node02-IPAddress>:32093",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Getting the Password for Splunk",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "To get the Current Password ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ kubectl get secret -n splunk-operator 
$ kubectl get secret <splunk-s1-standalone-secret-v1> -n splunk-operator -o yaml 
$ copy the decoded password’s value 
$ echo “<password’s value>” | base64 -d `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "To change the Password ",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ echo “<new password>” | base64 
# copy the encoded password 
$ kubectl get secret -n splunk-operator 
$ kubectl edit secret -n splunk-operator <splunk-splunk-operator-secret> 
# change the password’s value to the new encoded password  `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Note: ",
  },
  {
    type: "dash",
    margin: "ml-10",
    content: "Make sure that the labels of PV and PVC matched ",
  },
  {
    type: "dash",
    margin: "ml-10",
    content: "Make sure they have the same access modes  ",
  },
];

export default function DeployingSplunk() {
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
