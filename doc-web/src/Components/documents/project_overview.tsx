import DashSymbol from "../symbols/DashSymbol";
import DotSymbol from "../symbols/DotSymbol";
import SubTitle from "../symbols/SubTitle";
import Title from "../symbols/Title";

export default function ProjectOverview() {
  return (
    <div className="pl-10 pr-10 flex flex-col gap-5">
      <Title title="Project Overview" />
      <p>
        The solution is built around a static web application deployed in a
        Kubernetes cluster. This application is designed with structured logging
        to generate logs that simulate different application behavior and
        identify anomalies.
      </p>
      <p>
        The system integrates with Prometheus and Splunk to gather metrics and
        logs, offering both real-time monitoring and historical records based on
        the application performance and cluster health and status. Using
        Splunk-based alerting, we can be notified for potential performance
        issues and operational failures. Using Prometheus-based logging we can
        monitor the web application's health and performance by capturing
        metrics such as HTTP request/response rates, error counts, and system
        resource usage. This data can be used for alerting and visualization.
        With Splunk-based logging, it provides in-depth insights into error
        patterns, trace logs, and other critical data points such as response
        code, time, log level, etc.{" "}
      </p>

      <SubTitle title="The solutions aims to:" />
      <div className="pl-10">
        <DotSymbol title="Monitor:" />
        <div className="pl-10">
          <DashSymbol title="Track the system’s health and performance, ensuring high availability and rapid issue detection. " />
        </div>
      </div>
      <div className="pl-10">
        <DotSymbol title="Visualize:" />
        <div className="pl-10">
          <DashSymbol title="Use user-friendly dashboards to visualize data and spot trends that affect application performance. " />
        </div>
      </div>
      <div className="pl-10">
        <DotSymbol title="Log:" />
        <div className="pl-10">
          <DashSymbol title="Capture and analyze detailed logs that help in troubleshooting and incident resolution." />
        </div>
      </div>
      <div className="pl-10">
        <DotSymbol title="Alert:" />
        <div className="pl-10">
          <DashSymbol title="Set up alerting to identify and notify users of potential issues before they affect and impact the application and users. " />
        </div>
      </div>
    </div>
  );
}
