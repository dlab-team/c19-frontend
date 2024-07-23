"use client";
import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { CodeEditor, Render, IAMessage } from "@/components";
import {
  getSolvedListCookie,
  setProdListCookie,
} from "@/actions/cookies-client";
import type { CssCode, Problem } from "@/interfaces/problems";
import { handleIA, handleTest } from "@/actions/problems-client-actions";
import Swal from "sweetalert2";
import type { IAResponse } from "../ia/IAMessage";

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
  const [iaRes, setIaRes] = useState<IAResponse>({
    success: true,
    response: "",
  });
  const [solved, setSolved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [diffMsgs, setDiffMsgs] = useState<string[]>([]);

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
  const handleRequestIA = async () => {
    const res = await handleIA(diffMsgs);

    setIaRes({ success: true, response: res.tips.result });
  };

  const handleClick = async () => {
    setIsLoading(true);
    const res = await handleTest(
      HTMLcode,
      problem.desiredHTMLCode,
      cssCode,
      problem.desiredCSSCode,
      Number(excerciseId),
    );

    setIsLoading(false);
    if (res.success) {
      Swal.fire({
        title: "Respuesta Correcta",
        text: "Excelente trabajo",
        icon: "success",
        confirmButtonText: "Ok",
      });
      setSolved(true);
    } else {
      Swal.fire({
        title: "Respuesta Incorrecta",
        text: "Vuelve a intentarlo",
        icon: "error",
        confirmButtonText: "Ok",
      }).then((resp) => {
        setDiffMsgs(res.response);
        resp.isConfirmed &&
          setIaRes({
            success: false,
            response: "Deseas solicitar ayuda de la IA?",
          });
        setShowDiv(true);
      });

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

      <IAMessage
        response={iaRes}
        showDiv={showDiv}
        setShowDiv={setShowDiv}
        handleRequestIA={handleRequestIA}
      />

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner-container">
            <Spinner className="p-4" animation="grow" />
            <h6 className="mt-3">
              Verificando tu respuesta... espera un momento
            </h6>
          </div>
        </div>
      )}
    </>
  );
};
