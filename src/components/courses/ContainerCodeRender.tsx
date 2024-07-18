"use client";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CodeEditor, Render, IAMessage } from "@/components";
import {
  getSolvedListCookie,
  setProdListCookie,
} from "@/actions/cookies-client";
import type { CssCode, Problem } from "@/interfaces/problems";
import { handleTest } from "@/actions/problems-client-actions";
import type { Response } from "@/actions/problems-client-actions";

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

  const [cssCode, setCssCode] = useState<CssCode>({
    css1Code: "",
    css2Code: "",
  });
  const [HTMLcode, setHTMLCode] = useState("");
  const [iaRes, setIaRes] = useState<Response>({ success: true, response: "" });
  const [solved, setSolved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Inicializa los estados con los valores de las cookies o con los valores iniciales del problema
    const initialCssCode = cookieList[excerciseId]
      ? cookieList[excerciseId].css
      : problem.cssCode;
    const initialHTMLcode = cookieList[excerciseId]
      ? cookieList[excerciseId].html
      : problem.htmlCode;
    const initialSolved = cookieList[excerciseId]
      ? cookieList[excerciseId].solved
      : false;

    setCssCode(initialCssCode);
    setHTMLCode(initialHTMLcode);
    setSolved(initialSolved);
  }, [excerciseId, problem]);

  useEffect(() => {
    const date = new Date();
    setProdListCookie(Number(excerciseId), solved, date, HTMLcode, cssCode);
  }, [excerciseId, HTMLcode, cssCode, solved]);

  const files: Files = {
    "style.css": {
      name: "style.css",
      language: "css",
      value: problem.cssCode.css1Code,
    },
    "style2.css": {
      name: "style2.css",
      language: "css",
      value: problem.cssCode.css2Code,
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

  const handleClick = async () => {
    setIsLoading(true);
    const res = await handleTest(
      HTMLcode,
      problem.desiredHTMLCode,
      cssCode,
      problem.desiredCSSCode,
      Number(excerciseId),
    );

    setIaRes(res);
    setIsLoading(false);
    if (res.success) {
      setSolved(true);
    } else {
      setSolved(false);
    }
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-between  gap-5 flex-column flex-md-row bg-gray rounded p-3 position-relative"
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
              problemType={problem.type}
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
                onClick={() => {
                  handleClick();
                }}
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
            <Render
              contenidoHtml={HTMLcode}
              contenidoCss={cssCode.css1Code + cssCode.css2Code}
            />
          </div>
        </div>
      </Container>

      <IAMessage response={iaRes} isLoading={isLoading} />
    </>
  );
};
