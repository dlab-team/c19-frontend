import React from "react";
import { Container } from "react-bootstrap";

export default function HeaderExercise(props: any) {
  let color = "";
  if (props.lenguaje == "html") {
    color = "bg_excercises_html";
  } else if (props.lenguaje == "css") {
    color = "bg_excercises_css";
  } else {
    color = "bg_excercises";
  }
  return (
    <Container
      id={color}
      className="rounded d-flex justify-content-center align-items-center gap-3"
    >
      <h2 className="py-5 fw-bold fs-1">
        Ejercicios <span className="text-uppercase">{props.lenguaje}</span>
      </h2>
      <h6 className="bg-light text-dark rounded p-2"> {props.id}/20</h6>{" "}
    </Container>
  );
}
