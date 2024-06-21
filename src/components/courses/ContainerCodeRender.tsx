"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CodeEditor, Render } from "@/components";
import { filterExercisesById } from "@/helpers/filterExcercises";

interface Props {
  codeType: string;
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
  const problem = filterExercisesById(Number(excerciseId));
  const [cssCode, setCssCode] = useState(problem.cssCode);
  const [HTMLcode, setHTMLCode] = useState(problem.htmlCode);

  /* TODO crear una funcion que guarde los estados de los editores en cookie
    va a recibir dos parametros opcionales, codigohtml y codigocss.
    esos codigos los va a pasar la variable de estado respectiva y a las cookies
    la cookie tiene la firma de:
    interface Status {
      problemId: number;
      solved: boolean;
      solvedTimeStamp?: Date;
      html?: string;
      css?: string;
    }
  */

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
          codeType={codeType}
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
