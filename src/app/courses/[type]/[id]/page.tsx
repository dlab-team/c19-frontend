import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import { Advance, Enunciado, ContainerCodeRender } from "@/components";
import HeaderExercise from "@/components/courses/HeaderExercise";
import { filterExercisesById } from "@/actions/problems-server-actions";
import { notFound } from "next/navigation";
import { Listas } from "@/components/courses/Listas";
import { Discord } from "@/components/common/Discord";

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

const HtmlCssPage = async ({ params }: Props) => {
  const problem = await filterExercisesById(Number(params.id));
  if (Object.keys(problem).length === 0) {
    notFound();
  }

  return (
    <Container className="mt-5 d-flex flex-column gap-5  ">
      <HeaderExercise
        lenguaje={problem.codeType}
        id={params.id}
        subtitle={problem.subtitle}
      />
      <div className="marco">
        <Container className="mt-5 d-flex flex-column gap-5 ">
          <Container>
            <Enunciado enunciado={problem.enunciado} />
          </Container>
          <Container className=" d-flex flex-column gap-2  ">
            <h4>Ejercicio</h4>
            <Listas descripcion={problem.descripcion}></Listas>
          </Container>
          <ContainerCodeRender excerciseId={params.id} problem={problem} />
          <Advance actualStep={Number(params.id)} lenguaje={problem.codeType} />
        </Container>
      </div>
      <Discord></Discord>
    </Container>
  );
};

export default HtmlCssPage;
