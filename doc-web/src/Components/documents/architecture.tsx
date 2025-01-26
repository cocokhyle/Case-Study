import Image from "next/image";
import Title from "../title";
import MedTitle from "../medium_title";
import MediumText from "../medium_text";
import SubTitle from "../symbols/SubTitle";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";
import HollowDotSymbol from "../symbols/HollowDotSymbol";

export default function Architecture() {
  return (
    <div className="flex flex-col gap-5">
      <Title title="Architecture" />
      <div className="p-10 flex flex-col gap-5">
        <MediumText title="Source Code Management(SCM)" />
        <Image src="/architecture.jpeg" width={1000} height={0} alt="SCM" />
        <DotSymbol title="Source Code Management (SCM): GitHub" />
        <DotSymbol title="CI/CD Automation Server: Connects to GitHub" />
        <DotSymbol title="Build Docker Images: CI/CD server pushes images to Dockerhub" />
        <DotSymbol title="Deployment: Kubernetes cluster pulls images from Dockerhub" />
        <DotSymbol title="Nodes:" />
        <div className="pl-10">
          <HollowDotSymbol title="Node 1: Contains CI/CD Automation Server and Static Website" />
          <HollowDotSymbol title="Node 2: Contains Monitoring and Logging tools" />
        </div>
        <DotSymbol title="Monitoring and Logging Tools:" />
        <div className="pl-10">
          <HollowDotSymbol title="Prometheus" />
          <HollowDotSymbol title="Grafana" />
          <HollowDotSymbol title="Splunk" />
          <Title title="" />
        </div>
      </div>
    </div>
  );
}
