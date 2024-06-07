"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../app/page.module.css";
import { FileContent, Files } from "./ContainerCodeRender";


export interface Props {
  codeType: "css" | "html" | "html-css";
  stateCssCode?: string;
  stateHtmlCode?: string;
  files: Files;
  setHTMLCode: (str: string) => void;
  setCssCodeS: (str: string) => void;
}

export const CodeEditor = ({
  codeType,
  stateCssCode,
  stateHtmlCode,
  files,
  setCssCodeS,
  setHTMLCode,
}: Props) => {
  const [fileName, setFileName] = useState<string>(
    codeType === "css" ? "style.css" : "index.html"
  );
  const file = files[fileName];

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
      {fileName === "style.css" ? (
        <Editor
          height="50vh"
          width="40vw"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={stateCssCode}
          onChange={(newValue, e) => setCssCodeS(newValue!)}
        />
      ) : (
        <Editor
          height="50vh"
          width="40vw"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={stateHtmlCode}
          onChange={(newValue, e) => setHTMLCode(newValue!)}
        />
      )}
    </Container>
  );
};


