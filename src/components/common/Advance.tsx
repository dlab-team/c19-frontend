"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { Discord } from "./Discord";

interface Props {
  actualStep: number;
  lenguaje: string;
}

export const Advance = ({ actualStep, lenguaje }: Props) => {
  const router = useRouter();

  const handlePreviousStep = () => {
    const previousStep = Math.max(actualStep - 1, 1);
    router.push(`/courses/${lenguaje}/${previousStep}`);
  };

  const handleNextStep = () => {
    const nextStep = Math.min(actualStep + 1, 20);
    router.push(`/courses/${lenguaje}/${nextStep}`);
  };

  let color = "";
  if (lenguaje == "html") {
    color = "bg_excercises_html";
  } else if (lenguaje == "css") {
    color = "bg_excercises_css";
  } else {
    color = "bg_excercises";
  }

  return (
    <div className="mb-3">
      <Discord />
      <Container className="d-flex justify-content-between px-1 mt-3">
        <div className="d-flex justify-content-end px-2 ">
          <button
            id={color}
            className="bg_excercises px-4 py-2 next_button"
            onClick={handlePreviousStep}
            disabled={actualStep <= 1} //si el id es menor o igual a uno entonces el btn, se suspende
          >
            Anterior
          </button>
        </div>
        <div className="d-flex justify-content-end px-2 ">
          <button
            id={color}
            className="bg_excercises px-4 py-2 next_button"
            onClick={handleNextStep}
            disabled={actualStep >= 20} //si el id es mayor o igual a 4 entonces el btn se suspende
          >
            Siguiente
          </button>
        </div>
      </Container>
    </div>
  );
};
