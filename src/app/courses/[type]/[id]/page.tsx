import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import { Advance, Enunciado, ContainerCodeRender } from "@/components";
import { HeaderExercise } from "@/components/courses/HeaderExercise";
import { filterExercisesById } from "@/helpers/filterExcercises";

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
  const problem = filterExercisesById(Number(params.id));

  return (
    <Container className="mt-5 d-flex flex-column gap-5  ">
      {/*<Container className="bg_excercises rounded d-flex justify-content-center align-items-center gap-3">
        <h2 className="py-5 fw-bold fs-1">Ejercicios</h2>
        <h6 className="bg-light text-dark rounded p-2"> {params.id}/20</h6>{" "}
        {/* TODO componente que lleve registro del avance }
      </Container>*/}
      <HeaderExercise lenguaje="html-css" id={params.id}/>
      <Container>
        <Enunciado text={problem && problem.enunciado} />
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
