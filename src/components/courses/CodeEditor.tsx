"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../app/page.module.css";

interface FileContent {
  name: string;
  language: string;
  value?: string;
}

interface Files {
  [key: string]: FileContent;
}

interface Props {
  codeType: "css" | "html" | "html-css";
  cssCode?: string;
  htmlCode?: string;
}

const CodeEditor = ({ codeType, cssCode, htmlCode }: Props) => {

  const files: Files = {
    "style.css": {
      name: "style.css",
      language: "css",
      value: cssCode,
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: htmlCode,
    },
  };

  const [fileName, setFileName] = useState<string>(
    codeType === "css" ? "style.css" : "index.html"
  );
  const file = files[fileName];
  const [code, setCode] = useState(file.value);

  return (
    <Container>
      {/* TODO bajar este div a otro componente para manejar los clicks  */}
      <div className="editor_top">
        <div className="p-1">
          {(codeType === "html" || codeType === "html-css") && (
            <button
              disabled={fileName === "index.html"}
              className={
                fileName !== "index.html"
                  ? "html_button"
                  : "html_button button_active"
              }
              onClick={() => setFileName("index.html")}
            >
              HTML
            </button>
          )}
          {(codeType === "css" || codeType === "html-css") && (
            <button
              className={
                fileName !== "style.css"
                  ? "css_button"
                  : "css_button button_active"
              }
              disabled={fileName === "style.css"}
              onClick={() => setFileName("style.css")}
            >
              CSS
            </button>
          )}
        </div>
      </div>

      <Editor
        height="50vh"
        width="40vw"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        value={code}
        onChange={(newValue, e) => setCode(newValue!)}
      />
    </Container>
  );
};

export default CodeEditor;
