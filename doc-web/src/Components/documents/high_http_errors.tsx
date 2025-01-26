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
    content: "High 4xx and 5xx Errors in a Web App",
  },
  { type: "dot", margin: "ml-5", content: "Objective:" },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content:
      "To mitigate high 4xx and 5xx error rates by scaling the replicas and implementing other fixes in a web application with request limiting.",
  },
  { type: "title", margin: "", content: "1.  Identify the Source of Errors" },
  { type: "dot", margin: "ml-5", content: "Monitor Error Logs:" },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Using Splunk, Prometheus to monitor and identify the patterns and sources of 4xx and 5xx errors.",
  },
  { type: "dot", margin: "ml-5", content: "Analyze Request Patterns: " },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Check if errors correlate with specific times, request types, or user actions.",
  },
  { type: "title", margin: "", content: "2.  Scale Up Replicas" },
  { type: "dot", margin: "ml-5", content: "Access Kubernetes Cluster:" },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl get pods -n <namespace>",
  },
  { type: "dot", margin: "ml-5", content: "Update Deployment Configuration:" },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Edit the deployment YAML file or use the following command:",
  },
  {
    type: "command",
    margin: "ml-5",
    content:
      "$ kubectl scale deployment <deployment-name> --replicas=<desired-replicas> -n <namespace>",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Apply Changes: Ensure changes are saved and applied.",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Verify Deployment:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "kubectl get deployment <deployment-name> -n <namespace>",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Confirm the number of replicas has increased.",
  },
  {
    type: "title",
    margin: "",
    content: "3. Monitor After Scaling",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Check Pod Status:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl get pods -n <namespace>",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Ensure all pods are running without issues.",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Monitor Error Rates:",
  },
  {
    type: "dash",
    margin: "ml-16",
    content:
      "Use monitoring tools to observe any reduction in 4xx and 5xx errors post-scaling.",
  },
  {
    type: "title",
    margin: "",
    content: "4. Perform Load Testing",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Simulate Traffic: ",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Use tools like Artillery package to simulate increased traffic and observe the behavior of the scaled deployment.",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Monitor System Metric:",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Ensure CPU, memory usage, and error rates are within acceptable limits.",
  },
  {
    type: "title",
    margin: "",
    content: "5. Review and Optimize",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Analyze Post-Scaling Performance:",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      " Evaluate if the scaling and configuration changes have resolved the issue.",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Optimize Further:",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "If necessary, tweak application settings, optimize code, or consider additional scaling.",
  },
  {
    type: "title",
    margin: "",
    content: "6. Document Changes and Findings",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Record the Changes:",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Document all configuration changes, scaling actions, and outcomes.",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Share Insights:",
  },
  {
    type: "dash",
    margin: "ml-10",
    content:
      "Provide insights and recommendations to the team to prevent future occurrences.",
  },

  { type: "", margin: "", content: "" },
  { type: "", margin: "", content: "" },
];

export default function HighHttpErrors() {
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
