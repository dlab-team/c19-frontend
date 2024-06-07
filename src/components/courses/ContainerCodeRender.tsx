"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CodeEditor, Render } from "./index";
import { html_css_problems } from "@/problems/html-css/html_css_problems";

interface Props {
  codeType: "css" | "html" | "html-css";
  excerciseId: number;
  cssCode: string;
  htmlCode: string;
}

export interface FileContent {
  name: string;
  language: string;
  value?: string;
}

export interface Files {
  [key: string]: FileContent;
}

export const ContainerCodeRender = ({ codeType, excerciseId }: Props) => {
  const [cssCode, setCssCode] = useState(
    html_css_problems[excerciseId - 1].cssCode
  );
    const [HTMLcode, setHTMLCode] = useState(
      html_css_problems[excerciseId - 1].htmlCode
    );

  const files: Files = {
    "style.css": {
      name: "style.css",
      language: "css",
      value: html_css_problems[excerciseId - 1].cssCode,
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: html_css_problems[excerciseId - 1].htmlCode,
    },
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center gap-5 flex-column flex-md-row"
    >
      <div className="">
        <h4>Editor</h4>
        <h6>Escribe tu respuesta dentro del Editor</h6>
        <CodeEditor
          codeType={codeType}
          files={files}
          setHTMLCode={setHTMLCode}
          setCssCodeS={setCssCode}
          stateCssCode={cssCode}
          stateHtmlCode={HTMLcode}
        />
      </div>
      <div className="flex-fill">
        <h4>Resultado</h4>
        <h6>Resultado de la Ejecución - Renderizado</h6>
        <Render contenidoHtml={HTMLcode} contenidoCss={cssCode} />
      </div>
    </Container>
  );
};
