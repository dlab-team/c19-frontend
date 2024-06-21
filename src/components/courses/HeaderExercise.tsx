import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  lenguaje: "css" | "html" | "html-css";
  id: number;
}

export const HeaderExercise = ({ lenguaje, id }: Props) => {
  return (
    <Container className="bg_excercises rounded d-flex justify-content-center align-items-center gap-3">
      <h2 className="py-5 fw-bold fs-1">Ejercicios {lenguaje}</h2>
      <h6 className="bg-light text-dark rounded p-2"> {id}/20</h6>{" "}
    </Container>
  );
};
