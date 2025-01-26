import Paragraph from "../symbols/Paragraph";
import DashSymbol from "../symbols/DashSymbol";
import Title from "../symbols/Title";

const content = [
  {
    title: "Kubernetes ",
    content:
      "Orchestrates the deployment and management of the static web application, ensuring scalability and resilience. ",
  },
  {
    title: "Jenkins",
    content:
      "Automates CI/CD pipelines, streamlining the build, test, and deployment processes for the application. ",
  },
  {
    title: "Git",
    content:
      "Serves as the source code management (SCM) tool, facilitating version control and collaborative development.",
  },
  {
    title: "Docker",
    content:
      "Builds container images for the web application, packaging its dependencies for portability and efficient resource utilization in the Kubernetes cluster.",
  },
  {
    title: "Prometheus Operator and Service Monitors",
    content:
      "Manages Prometheus deployments in Kubernetes, enabling seamless monitoring of the cluster and application performance. Service Monitors gather metrics for various components.",
  },
  {
    title: "Alert Manager",
    content:
      "Works with Prometheus to handle alerting by defining thresholds and notifying users of potential performance issues and operational failures in real-time.",
  },
  {
    title: "Grafana",
    content:
      "Integrates with Prometheus for building intuitive dashboards to visualize metrics and monitor system performance trends.",
  },
  {
    title: "Splunk Operator and Splunk Open Telemetry",
    content:
      "Facilitates integration with Kubernetes, enabling real-time log collection, monitoring, and analysis. Splunk uses HEC (HTTP Event Collector) Tokens for secure log scraping from the web application, capturing detailed traces, error patterns, and critical metrics such as response codes and log levels. ",
  },
];

export default function ToolsAndTechnologies() {
  return (
    <div className="flex flex-col gap-5 px-10">
      <div>
        <Title title="Tools/Technologies in the Solution" />

        <Paragraph title="The solution leverages the following technologies to ensure efficient deployment, monitoring, logging, visualization, alerting, and CI/CD processes: " />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-white uppercase bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Tool/Technology
              </th>

              <th scope="col" className="px-6 py-3 ">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, index) => (
              <tr className=" bg-gray-200">
                <th
                  scope="row"
                  key={index}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.title}
                </th>
                <td className="px-6 py-4 text-gray-900">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paragraph title="These tools collectively establish a robust foundation for application deployment, observability, and seamless operations. " />
    </div>
  );
}
