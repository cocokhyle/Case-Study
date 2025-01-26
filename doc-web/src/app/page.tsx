import DashSymbol from "@/Components/symbols/DashSymbol";
import BoxSymbol from "@/Components/symbols/BoxSymbol";
import HollowDotSymbol from "@/Components/symbols/HollowDotSymbol";
import DotSymbol from "@/Components/symbols/DotSymbol";
import Title from "@/Components/symbols/Title";
import SubTitle from "@/Components/symbols/SubTitle";
import HollowBoxSymbol from "@/Components/symbols/HollowBox";

const content = [
  {
    title: "Overview of Observability:",
    content: [
      {
        type: "sub-title",
        margin: "ml-5",
        text: "Observability: Monitoring & Logging ",
      },
      {
        type: "dash",
        margin: "ml-10",
        text: "provides real-time insights into the health, performance, and status of workloads running within the Kubernetes environment. As the solution consists of structured logging, monitoring, and alerting, we enable efficient troubleshooting and rapid investigation of potential issues.  ",
      },
    ],
  },
  {
    title: "Project Description: ",
    content: [
      { type: "sub-title", margin: "ml-5", text: "Project Overview" },
      {
        type: "dash",
        margin: "ml-10",
        text: "The project aims to provide real-time insights into the health, performance, and status of workloads running within the Kubernetes environment. As the solution consists of structured logging, monitoring, and alerting, we enable efficient troubleshooting and rapid investigation of potential issues.",
      },
      { type: "sub-title", margin: "ml-5", text: "Project Purpose" },
      {
        type: "dash",
        margin: "ml-10",
        text: "The purpose of this project is to provide real-time insights into the health, performance, and status of workloads running within the Kubernetes environment. As the solution consists of structured logging, monitoring, and alerting, we enable efficient troubleshooting and rapid investigation of potential issues.",
      },
    ],
  },
  {
    title: "Objectives: ",
    content: [
      { type: "sub-title", margin: "ml-5", text: "General Objectives" },

      {
        type: "dash",
        margin: "ml-10",
        text: "To use prometheus, alertmanager, grafana, and splunk to monitor logs of webapp and k8s cluster for efficient troubleshooting and problem/incident investigation. ",
      },
      {
        type: "dash",
        margin: "ml-10",
        text: "Specifically, the group aims to do the following per tools: ",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Webapps",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "Deployed in a Kubernetes cluster",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "Properties that enable to simulate the following issues: ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "High HTTP 5xx errors ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "High HTTP 4xx errors ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "Exporters stopped working  ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "Splunkforwarder service or sidecar stopped working ",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Jenkins",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "set up a CI/CD pipeline that build and deploys the app whenever code changes ",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Prometheus",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "metric gathering solution of webapp ",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Alerting using Alertmanager/Prometheus or Splunk",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "create alerting rules based on the KPIs:",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "% availability",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "resource utilization",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "out of memory errors",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "error rates",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "establish threshold and implement annotations ",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Grafana",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "use Prometheus as data source ",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "create a set of dashboard to monitor the following: ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "cluster overview ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "count of pods running ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "count of pods failed ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "count of pods ready  ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "count of pods not ready ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "node count",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "etc",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "Chart view of containers ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "resource utilization ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "pod resources ",
      },
      {
        type: "hollow-box",
        margin: "ml-52",
        text: "node resources over time",
      },
      {
        type: "dot",
        margin: "ml-20",
        text: "Splunk",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "ingest logs from both webapp and k8s cluster ",
      },
      {
        type: "hollow",
        margin: "ml-32",
        text: "create custom dashboard for different components of the webapp ",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "user activity",
      },
      {
        type: "box",
        margin: "ml-44",
        text: "error rates",
      },

      {
        type: "hollow",
        margin: "ml-32",
        text: "configure user roles and permissions, allow new users to search through log with minimum privileges ",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center transition-all transform duration-300 ease-in pt-10 pb-32">
      <div className="w-[60%] pt-10 flex flex-col gap-10">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <Title title={item.title} />
            {item.content.map((content, index) => (
              <div key={index}>
                {content.type === "dash" && (
                  <div className={content.margin}>
                    <DashSymbol title={content.text} />
                  </div>
                )}
                {content.type === "sub-title" && (
                  <div className={content.margin}>
                    <SubTitle title={content.text} />
                  </div>
                )}
                {content.type === "dot" && (
                  <div className={content.margin}>
                    <DotSymbol title={content.text} />
                  </div>
                )}
                {content.type === "hollow" && (
                  <div className={content.margin}>
                    <HollowDotSymbol title={content.text} />
                  </div>
                )}
                {content.type === "box" && (
                  <div className={content.margin}>
                    <BoxSymbol title={content.text} />
                  </div>
                )}
                {content.type === "hollow-box" && (
                  <div className={content.margin}>
                    <HollowBoxSymbol title={content.text} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
