import  subtitle  from "@/problems/problems.json";
import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  lenguaje: string;
  id: number;
  subtitle: string;
}


export default function HeaderExercise({ lenguaje, id, subtitle }: Props) {
  let color = "";
  if (lenguaje == "html") {
    color = "color_excercises_html";
  } else if (lenguaje == "css") {
    color = "color_excercises_css";
  } else {
    color = "color_excercises";
  }
  return (
    <Container
    className="bg-white d-flex pt-2 justify-content-center align-items-center gap-3"
    >
      <h2 className="py-1 fw-bold "
        id={color}>
          {subtitle}
      </h2>
      <h2 className="contador"> 
        {id}/20</h2>{" "}
    </Container>
  );
}
