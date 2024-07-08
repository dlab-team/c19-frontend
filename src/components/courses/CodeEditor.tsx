"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../app/page.module.css";
import { Files } from "./ContainerCodeRender";
import { Dispatch, SetStateAction } from "react";
import type { CssCode } from "@/interfaces/problems";

export interface Props {
  codeType: string;
  problemType: number;
  stateCssCode?: CssCode;
  stateHtmlCode?: string;
  files: Files;
  setHTMLCode: (str: string) => void;
  setCssCodeS: Dispatch<SetStateAction<CssCode>>;
}

export const CodeEditor = ({
  codeType,
  problemType,
  stateCssCode,
  stateHtmlCode,
  files,
  setCssCodeS,
  setHTMLCode,
}: Props) => {
  const [fileName, setFileName] = useState<string>(
    codeType === "css" ? "style.css" : "index.html",
  );
  const file = files[fileName];
  const updateCss1Code = (newCss1Code: string) => {
    setCssCodeS((prevState: CssCode) => ({
      ...prevState,
      css1Code: newCss1Code,
    }));
  };
  const updateCss2Code = (newCss2Code: string) => {
    setCssCodeS((prevState: CssCode) => ({
      ...prevState,
      css2Code: newCss2Code,
    }));
  };

  return (
    <Container style={{ width: "100%" }}>
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
          {(codeType === "css" || codeType === "html-css") &&
          problemType !== 3 ? (
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
          ) : (
            (codeType === "css" || codeType === "html-css") &&
            problemType === 3 && (
              <>
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
                <button
                  className={
                    fileName !== "style2.css"
                      ? "css_button"
                      : "css_button button_active"
                  }
                  disabled={fileName === "style2.css"}
                  onClick={() => setFileName("style2.css")}
                >
                  CSS
                </button>
              </>
            )
          )}
        </div>
      </div>
      {fileName === "style.css" ? (
        <Editor
          height="25rem"
          width="100%"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={stateCssCode?.css1Code}
          onChange={(newValue) => updateCss1Code(newValue!)}
        />
      ) : fileName === "style2.css" ? (
        <Editor
          height="25rem"
          width="100%"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={stateCssCode?.css2Code}
          onChange={(newValue) => updateCss2Code(newValue!)}
        />
      ) : (
        <Editor
          height="25rem"
          width="100%"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={stateHtmlCode}
          onChange={(newValue) => setHTMLCode(newValue!)}
        />
      )}
    </Container>
  );
};
