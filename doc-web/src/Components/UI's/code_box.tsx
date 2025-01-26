import React from "react";
import { MdContentCopy } from "react-icons/md";

interface CodeBoxProps {
  content: string;
  title: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({ content, title }) => {
  // Function to handle the copy action
  const handleCopy = () => {
    navigator.clipboard
      .writeText(content) // Copy content to clipboard
      .then(() => {
        alert("Content copied to clipboard!"); // Optionally, you can show a confirmation message
      })
      .catch((error) => {
        alert("Failed to copy content: " + error); // Error handling
      });
  };

  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden">
      <div className="bg-gray-700 py-3 px-5 text-white">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          <div className="flex justify-end" onClick={handleCopy}>
            <MdContentCopy />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-5">
        {content.split("\n").map((line, index) => (
          <div key={index} className="whitespace-pre-wrap px-5 py-1">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBox;
