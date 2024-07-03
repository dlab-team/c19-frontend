"use client";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CodeEditor, Render } from "@/components";
import {
  getSolvedListCookie,
  setProdListCookie,
} from "@/actions/cookies-client";
import { Problem } from "@/interfaces/problems";
import { handleTest } from "@/actions/problems-client-actions";

interface Props {
  excerciseId: number;
  problem: Problem | Record<string, never>;
}

export interface FileContent {
  name: string;
  language: string;
  value?: string;
}

export interface Files {
  [key: string]: FileContent;
}

export const ContainerCodeRender = ({ excerciseId, problem }: Props) => {
  const cookieList = getSolvedListCookie();

  const [cssCode, setCssCode] = useState("");
  const [HTMLcode, setHTMLCode] = useState("");

  useEffect(() => {
    // Inicializa los estados con los valores de las cookies o con los valores iniciales del problema
    const initialCssCode = cookieList[excerciseId]
      ? cookieList[excerciseId].css
      : problem.cssCode;
    const initialHTMLcode = cookieList[excerciseId]
      ? cookieList[excerciseId].html
      : problem.htmlCode;
    setCssCode(initialCssCode);
    setHTMLCode(initialHTMLcode);
  }, [excerciseId]);

  useEffect(() => {
    const date = new Date();
    setProdListCookie(Number(excerciseId), true, date, HTMLcode, cssCode);
  }, [excerciseId, HTMLcode, cssCode]);

  const files: Files = {
    "style.css": {
      name: "style.css",
      language: "css",
      value: problem.cssCode,
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: problem.htmlCode,
    },
  };
  let color = "";
  if (problem.codeType == "html") {
    color = "bg_excercises_html";
  } else if (problem.codeType == "css") {
    color = "bg_excercises_css";
  } else {
    color = "bg_excercises";
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-between  gap-5 flex-column flex-md-row bg-gray rounded p-3"
    >
      <div
        style={{
          width: "40vw",
        }}
      >
        <h4>Editor</h4>
        <h6>Escribe tu respuesta dentro del Editor</h6>
        <div className="d-flex flex-column gap-2">
          <CodeEditor
            codeType={problem.codeType}
            files={files}
            setHTMLCode={setHTMLCode}
            setCssCodeS={setCssCode}
            stateCssCode={cssCode}
            stateHtmlCode={HTMLcode}
          />
          <div className="d-flex justify-content-end me-2">
            <button
              id={color}
              className="bg_excercises px-4 py-2 next_button"
              onClick={() => handleTest(HTMLcode, problem.desiredHTMLCode)}
            >
              Ejecutar
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "40vw",
        }}
      >
        <h4>Resultado</h4>
        <h6>Resultado de la Ejecución - Renderizado</h6>
        <div>
          <Render contenidoHtml={HTMLcode} contenidoCss={cssCode} />
        </div>
      </div>
    </Container>
  );
};
