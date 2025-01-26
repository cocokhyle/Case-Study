import SubTitle from "../symbols/SubTitle";
import BoxSymbol from "../symbols/BoxSymbol";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import URLs from "../symbols/links";
import Title from "../symbols/Title";
import CodeBox from "../UI's/code_box";

const content = [
  { type: "sub_title", margin: "ml-5", content: "Pre-requisites:" },
  { type: "dot", margin: "ml-10", content: "Installing Helm" },
  {
    type: "hollow_dot",
    margin: "ml-16",
    content: "Follow Instruction: Using Script",
  },
  {
    type: "url",
    margin: "ml-24",
    content: "https://helm.sh/docs/intro/install/ ",
  },
  { type: "dot", margin: "ml-10", content: "Installing docker" },
  {
    type: "command",
    margin: "ml-10",
    content: `$ docker use context
$ docker context use default `,
  },
  {
    type: "dot",
    margin: "ml-10",
    content: 'Fix: if "$docker ps" does not work, use the following:',
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ sudo chmod 666 /var/run/docker.sock `,
  },
  {
    type: "dot",
    margin: "ml-10",
    content: "Install java for jenkins to work, use the following command:",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ brew install java-17-openjdk -y   `,
  },
  {
    type: "dot",
    margin: "ml-10",
    content: "Others",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ brew install git -y `,
  },
];

export default function PreRequisite() {
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
    </div>
  );
}
