import BoxSymbol from "../symbols/BoxSymbol";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import URLs from "../symbols/links";
import MediumText from "../medium_text";
import MedTitle from "../medium_title";
import Title from "../title";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";

// Define types for your table structure
type TableRowContent = {
  content: string[]; // Each row is an array of strings
};

type TableContent = {
  type: "head" | "body"; // type can be "head" for headers or "body" for rows
  content: TableRowContent[]; // The content of the row (either header or body)
};

type ContentItem =
  | { type: "title"; margin: string; content: string }
  | { type: "dot"; margin: string; content: string }
  | { type: "hollow_dot"; margin: string; content: string }
  | { type: "box"; margin: string; content: string }
  | { type: "hollow_box"; margin: string; content: string }
  | { type: "table"; margin: string; content: TableContent[] };

const content: ContentItem[] = [
  { type: "title", margin: "", content: "Deploying Webapp" },
  { type: "dot", margin: "ml-5", content: "Install the following plugins" },
  { type: "hollow_dot", margin: "ml-10", content: "Docker" },
  { type: "box", margin: "ml-16", content: "Docker API Plugin" },
  { type: "box", margin: "ml-16", content: "Docker Common Plugin" },
  { type: "box", margin: "ml-16", content: "Docker Pipeline Plugin" },
  { type: "box", margin: "ml-16", content: "Docker Plugin" },
  { type: "dot", margin: "ml-5", content: "Create credentials" },
  {
    type: "table",
    margin: "ml-5",
    content: [
      { type: "head", content: [{ content: ["What for", "Kind", "ID"] }] },
      {
        type: "body",
        content: [
          {
            content: ["Github", "Username with password", "github-credential"],
          },
          {
            content: [
              "Docker Hub",
              "Username with password",
              "dockerhub-credential",
            ],
          },
          {
            content: ["KubeConfig", "Secret file", "kubeconfig-credential"],
          },
        ],
      },
    ],
  },
  { type: "dot", margin: "ml-5", content: "Add Nodes:" },

  {
    type: "table",
    margin: "ml-5",
    content: [
      {
        type: "head",
        content: [
          { content: ["Name", "Type", "Labels", "Root Dir", "Launch Method"] },
        ],
      },
      {
        type: "body",
        content: [
          {
            content: [
              "Macbook",
              "permanent",
              "node01",
              "/Users/academy",
              "Launch agent by connecting it to the controller",
            ],
          },
        ],
      },
    ],
  },
  { type: "hollow_dot", margin: "ml-10", content: "To connect the node" },
  { type: "box", margin: "ml-16", content: "Click node" },
  {
    type: "box",
    margin: "ml-16",
    content:
      "copy and paste in specified node the command given (run from agent command line, with the secret stored in a file) ",
  },
  { type: "hollow_box", margin: "ml-24", content: "It will run on foreground" },
  { type: "dot", margin: "ml-5", content: "Creating the Pipeline " },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "create Pipeline, name it “----” ",
  },

  {
    type: "hollow_dot",
    margin: "ml-10",
    content:
      "under Build Trigger, tick “Github hook trigger for GITScm polling” ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content:
      "under Pipeline, select “Pipeline script from SCM”, and fill in the details:",
  },
  { type: "box", margin: "ml-16", content: "SCM: Git" },
  { type: "box", margin: "ml-16", content: "Repository:" },
  { type: "box", margin: "ml-16", content: "Credentials:" },
  { type: "box", margin: "ml-16", content: "Branch:" },
  { type: "dot", margin: "ml-5", content: "Run Build" },
  {
    type: "dot",
    margin: "ml-5",
    content: "The Webapp should be depoyed on the node that is specified.",
  },
];

export default function DeployingWebapp() {
  return (
    <div className="flex flex-col gap-5 px-10 ">
      {content.map((item, index) => (
        <div key={index}>
          {item.type === "title" && <Title title={item.content} />}
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
          {item.type === "table" && (
            <table
              className={`table-auto ${item.margin} border-collapse border border-gray-500`}
            >
              <thead>
                {item.content
                  .filter((tableItem) => tableItem.type === "head")
                  .map((tableItem, idx) => (
                    <tr key={idx}>
                      {tableItem.content[0].content.map((header, idx) => (
                        <th
                          key={idx}
                          className="border border-gray-500 px-4 py-2"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  ))}
              </thead>
              <tbody>
                {item.content
                  .filter((tableItem) => tableItem.type === "body")
                  .map((tableItem, rowIndex) =>
                    tableItem.content.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.content.map((cell, idx) => (
                          <td
                            key={idx}
                            className="border border-gray-500 px-4 py-2"
                          >
                            {cell} {/* Render each row cell as a string */}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}
