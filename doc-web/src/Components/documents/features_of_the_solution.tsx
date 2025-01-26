import DotSymbol from "../symbols/DotSymbol";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import SubTitle from "../symbols/SubTitle";
import Title from "../symbols/Title";

export default function FeaturesOfTheSolution() {
  return (
    <div className="pl-10 pr-10 flex flex-col gap-5 pb-20">
      <Title title="Features of the Solution" />
      <div className="pl-10 flex flex-col gap-5">
        <SubTitle title="Webapp Deployment" />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Capable of generating log messages using standard logging patterns and levels. " />
          <DotSymbol title="A static web application designed to simulate production issues, such as high 5XX and 4XX errors, disruptions in Prometheus exporters, and failures in the Splunk forwarder service or sidecar containers. " />
        </div>
        <SubTitle title="Jenkins (CI/CD Pipeline) " />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Automates the build and deployment of the web application whenever changes are made to the source code. " />
        </div>
        <SubTitle title="Splunk" />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Capable of ingesting logs from both the web application and the Kubernetes cluster. " />
          <DotSymbol title="Parses and extracts relevant fields from log entries in a structured manner, facilitating easier log analysis while ensuring sensitive data, such as credentials, is filtered out. " />
          <DotSymbol title="Dashboard Features:  " />
          <div className="pl-10 flex flex-col gap-5">
            <HollowDotSymbol title="Accurately tracks user activity and error rates. " />
            <HollowDotSymbol title="Allows configuration of user roles and permissions, enabling new users to search through logs with restricted privileges.  " />
          </div>
        </div>
        <SubTitle title="Prometheus" />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Collects data metrics related to the web application or service, providing insights into performance and resource usage. " />
        </div>
        <SubTitle title="Alerting" />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Provides notifications based on key performance indicators (KPIs), such as availability percentage, resource utilization, out-of-memory errors, and error rates. " />
          <DotSymbol title="Allows the establishment of thresholds and the implementation of annotations for better monitoring. " />
        </div>
        <SubTitle title="Grafana" />
        <div className="pl-10 flex flex-col gap-5">
          <DotSymbol title="Provides a dashboard integrated with Prometheus to monitor real-time metrics. " />
          <DotSymbol title="Accurately counts the number of nodes or pods, categorized by their various statuses. " />
          <DotSymbol title="Displays charts that visualize container resource utilization, pod resources, and node resources over time. " />
        </div>
      </div>
    </div>
  );
}
