"use client";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CodeEditor, Render } from "@/components";
import {
  getSolvedListCookie,
  setProdListCookie,
} from "@/actions/cookies-client";
import { Problem } from "@/interfaces/problems";

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
  //const problem = filterExercisesById(Number(excerciseId));

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
  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center gap-5 flex-column flex-md-row"
    >
      <div
        style={{
          width: "40vw",
        }}
      >
        <h4>Editor</h4>
        <h6>Escribe tu respuesta dentro del Editor</h6>
        <CodeEditor
          codeType={problem.codeType}
          files={files}
          setHTMLCode={setHTMLCode}
          setCssCodeS={setCssCode}
          stateCssCode={cssCode}
          stateHtmlCode={HTMLcode}
        />
      </div>
      <div
        style={{
          width: "40vw",
        }}
      >
        <h4>Resultado</h4>
        <h6>Resultado de la Ejecución - Renderizado</h6>
        <Render contenidoHtml={HTMLcode} contenidoCss={cssCode} />
      </div>
    </Container>
  );
};
