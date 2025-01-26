import SubTitle from "@/Components/symbols/SubTitle";
import Title from "@/Components/symbols/Title";

export default function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[60%] pt-10 flex flex-col gap-5">
        <Title title="About"></Title>
        <SubTitle title="Team Name: "></SubTitle>
        <div className="pl-10">
          <Title title="Legal Loggers"></Title>
        </div>
        <SubTitle title="Leader Name: "></SubTitle>
        <div className="pl-10">
          <Title title="Michaela Shylle Ong"></Title>
        </div>
        <SubTitle title="Members Name: "></SubTitle>
        <div className="pl-10 flex flex-col gap-5">
          <Title title="Vince Villasor"></Title>
          <Title title="Ricky Indiano"></Title>
          <Title title="Ralph Lawrence Cura"></Title>
          <Title title="Khyle Matthew Yanes"></Title>
        </div>
      </div>
    </div>
  );
}
