import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import { Advance, Enunciado, ContainerCodeRender } from "@/components";
import { htmlCssProblems } from "@/problems/html-css/html_css_problems";

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
        <Enunciado text={htmlCssProblems[params.id - 1].enunciado} />
      </Container>
      <ContainerCodeRender
        codeType={"html-css"}
        excerciseId={params.id}
        cssCode={""}
        htmlCode={""}
      />
      <Advance actualStep={Number(params.id)} />
    </Container>
  );
};

export default HtmlCssPage;
