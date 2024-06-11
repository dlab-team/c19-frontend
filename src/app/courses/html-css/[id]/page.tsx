/* eslint-disable prettier/prettier */
import {Container} from "react-bootstrap";
import type { Metadata } from "next";
import CodeEditor from "@/components/courses/CodeEditor";
import { html_css_problems } from "@/problems/html-css/html_css_problems";
import { Advance } from "@/components";
import  Enunciado  from "@/components/Enunciado";



interface Props {
  params: { id: number };
}

export function generateMetadata({ params }: Props): Metadata {
  const { id } = params;
  return {
    title: `Ejercicio HTML/CSS #${id}/20`,
    description: `Ejercicio HTML/CSS #${id}/20`,
  };
}

const HtmlCssPage = ({ params }: Props) => {
  return (
    <Container className="mt-5 d-flex flex-column gap-5  ">
      <Container className="bg_excercises rounded d-flex justify-content-center align-items-center gap-3">
        <h2 className="py-5 fw-bold fs-1">Ejercicios</h2>
        <h6 className="bg-light text-dark rounded p-2"> {params.id}/20</h6>{" "}
        {/* TODO componente que lleve registro del avance */}
      </Container>
      <Container>
        <h4>
          <Enunciado text={"Escribir aqui el enunciado del ejercicio 1"}></Enunciado>
        </h4>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center gap-5 flex-column flex-md-row"
      >
        <div className="">
          <h4>Editor</h4>
          <h6>Escribe tu respuesta dentro del Editor</h6>
          <CodeEditor
            codeType="html-css"
            cssCode={html_css_problems[params.id - 1].cssCode}
            htmlCode={html_css_problems[params.id - 1].htmlCode}
          />
        </div>
        <div className="flex-fill">
          <h4>Resultado</h4>
          <h6>Resultado de la Ejecución - Renderizado</h6>
          <div className="bg-secondary " style={{ height: "50vh" }}></div>
          {/* TODO: sustituir por componente resultado */}
        </div>
      </Container>
      <Advance actualStep={Number(params.id)} />
    </Container>
  );
};

export default HtmlCssPage;
