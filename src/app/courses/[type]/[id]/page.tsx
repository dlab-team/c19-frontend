import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import { Advance, Enunciado, ContainerCodeRender } from "@/components";
import HeaderExercise from "@/components/courses/HeaderExercise";
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
      <HeaderExercise lenguaje={problem.codeType} id={params.id} />
      <Container>
        <Enunciado text={problem && problem.enunciado} />
      </Container>
      <ContainerCodeRender
        codeType={problem.codeType}
        excerciseId={params.id}
        cssCode={""}
        htmlCode={""}
      />
      <Advance actualStep={Number(params.id)} lenguaje={problem.codeType} />
    </Container>
  );
};

export default HtmlCssPage;
