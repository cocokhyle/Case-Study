"use client";
import Image from "next/image";
import { useState } from "react";
import Architecture from "@/Components/documents/architecture";
import ProjectOverview from "@/Components/documents/project_overview";
import ToolsAndTechnologies from "@/Components/documents/tools_and_technologies";
import Workflows from "@/Components/documents/workflows";
import SetupInstructions from "@/Components/documents/setup_instructions";
import UserGuide from "@/Components/documents/user_guide";
import DeployingJenkins from "@/Components/documents/deploying_jenkins";
import DeployingWebapp from "@/Components/documents/deploying_wepapp";
import FeaturesOfTheSolution from "@/Components/documents/features_of_the_solution";
import DeployingPrometheus from "@/Components/documents/deploying_prometheus";
import DeployingSplunk from "@/Components/documents/deploying_splunk";
import PreRequisite from "@/Components/documents/pre_requisite";
import HighHttpErrors from "@/Components/documents/high_http_errors";
import IngestingDataToSplunk from "@/Components/documents/ingesting_data_to_splunk";
import NoDynaminProvisioning from "@/Components/documents/no_dynamic_provisioning";
import PrometheusErrors from "@/Components/documents/prometheus_errors";
import SplunkErrors from "@/Components/documents/splunk_errors";
import WebappPodDown from "@/Components/documents/webapp_pod_down";
import HighCpuUsage from "@/Components/documents/high_cpu_usage";
import HighMemoryUsage from "@/Components/documents/high_memory_usage";
import WebappAlertingRule from "@/Components/documents/webapp_alerting_rule";

const content = [
  {
    title: "About the Project",
    items: [
      { title: "Project Overview", content: "project_overview" },
      { title: "Architecture", content: "architecture" },
      { title: "Tools and Technologies", content: "tools_and_technologies" },
      {
        title: "Features of the Solution ",
        content: "features_of_the_solution",
      },
      { title: "Workflows", content: "workflows" },
    ],
  },
  {
    title: "User Handbook",
    items: [
      { title: "Pre-requisite", content: "pre_requisite" },
      { title: "Deploying Jenkins", content: "deploying_jenkins" },
      { title: "Deploying Webapp via Jenkins", content: "deploying_webapp" },
      { title: "Deploying Prometheus", content: "deploying_prometheus" },
      { title: "Deploying Splunk", content: "deploying_splunk" },
      {
        title: "Ingesting k8s cluster data to Splunk",
        content: "ingesting_data",
      },
      {
        title: "Creating Webapp Alerting Rules",
        content: "webapp_alerting_rule",
      },
      { title: "Configuring Alerts", content: "configuring_alerts" },
    ],
  },
  {
    title: "Runbooks",
    items: [
      {
        title: "High HTTP 4xx and 5xx errors from webapp",
        content: "high_http_errors",
      },
      {
        title: "Prometheus Exporters Stopped Working",
        content: "prometheus_errors",
      },
      {
        title: "Splunkforwarder Service",
        content: "splunk_errors",
      },
      {
        title: "No Dynamic Provisioning for Splunk",
        content: "no_dynamic_provisioning",
      },
      {
        title: "Webapp Pod is down",
        content: "webapp_pod_down",
      },
      {
        title: "High CPU Usage",
        content: "high_cpu_usage",
      },
      {
        title: "High Memory Usage",
        content: "high_memory_usage",
      },
    ],
  },
  {
    title: "Disaster Recovery",
    items: [
      { title: "Backing Up Cluster's ETCD", content: "example_1" },
      { title: "Restoring Cluster's ETCD", content: "example_2" },
      { title: "Pipelines for Testing and Production", content: "example_2" },
    ],
  },
];

const data = [
  { id: "project_overview", content: <ProjectOverview /> },
  { id: "architecture", content: <Architecture /> },
  { id: "tools_and_technologies", content: <ToolsAndTechnologies /> },
  { id: "workflows", content: <Workflows /> },
  { id: "setup_instructions", content: <SetupInstructions /> },
  { id: "user_guide", content: <UserGuide /> },
  { id: "deploying_jenkins", content: <DeployingJenkins /> },
  { id: "deploying_webapp", content: <DeployingWebapp /> },
  { id: "features_of_the_solution", content: <FeaturesOfTheSolution /> },
  { id: "deploying_prometheus", content: <DeployingPrometheus /> },
  { id: "deploying_splunk", content: <DeployingSplunk /> },
  { id: "pre_requisite", content: <PreRequisite /> },
  { id: "high_http_errors", content: <HighHttpErrors /> },
  { id: "ingesting_data", content: <IngestingDataToSplunk /> },
  { id: "no_dynamic_provisioning", content: <NoDynaminProvisioning /> },
  { id: "prometheus_errors", content: <PrometheusErrors /> },
  { id: "splunk_errors", content: <SplunkErrors /> },
  { id: "webapp_pod_down", content: <WebappPodDown /> },
  { id: "high_cpu_usage", content: <HighCpuUsage /> },
  { id: "high_memory_usage", content: <HighMemoryUsage /> },
  { id: "webapp_alerting_rule", content: <WebappAlertingRule /> },
];

export default function Documentation() {
  const [active, setActive] = useState<number | null>(null);
  const [contents, setContents] = useState<string>("project_overview");

  const handleClick = (index: number) => {
    setActive(index === active ? null : index);
  };
  const handleContent = (content: string) => {
    setContents(content);
  };

  const matchedContent = data.find((item) => item.id === contents)?.content;

  return (
    <section>
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1 flex">
          <div className="justify-center items-center w-full font-semibold pt-10 pb-10">
            {content.map((item, index) => (
              <div
                key={index}
                className="p-2 w-full"
                onClick={() => handleClick(index)}
              >
                <div className="flex flex-col gap-1 w-full">
                  <div className={`flex flex-row gap-2 items-center   p-2 `}>
                    <svg
                      className={`w-2.5 h-2.5 ms-3 transition-transform ${
                        active === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>

                    <button>{item.title}</button>
                  </div>
                  {active === index && (
                    <div className="flex flex-col w-full items-start pl-10">
                      {item.items.map((item, key) => (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContent(item.content);
                          }}
                          key={key}
                          className=" hover:text-blue-500  p-2 text-sm font-medium items-start text-start"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-solid border-[1px] border-slate-200 h-full"></div>
        </div>
        <div className="col-span-3 p-10 flex flex-col items-center w-full">
          {matchedContent ? (
            <div className="w-full">{matchedContent}</div>
          ) : (
            <div className="h-full w-full">
              <h1>No content available</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
