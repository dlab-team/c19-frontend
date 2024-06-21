"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { Discord } from "./Discord";

interface Props {
  actualStep: number;
}

export const Advance = ({ actualStep }: Props) => {
  const router = useRouter();

  const handlePreviousStep = () => {
    const previousStep = Math.max(actualStep - 1, 1);
    router.push(`/courses/html-css/${previousStep}`);
  };

  const handleNextStep = () => {
    const nextStep = Math.min(actualStep + 1, 4);
    router.push(`/courses/html-css/${nextStep}`);
  };

  return (
    <div className="mb-3">
      <Discord />
      <Container className="d-flex justify-content-between px-1 mt-3">
        <div className="d-flex justify-content-end px-2 ">
          <button
            className="bg_excercises px-4 py-2 next_button"
            //onClick={() => router.push(`/courses/html-css/${actualStep - 1}`)}
            onClick={handlePreviousStep}
            disabled={actualStep <= 1} //si el id es menor o igual a uno entonces el btn, se suspende
          >
            Anterior
          </button>
        </div>
        <div className="d-flex justify-content-end px-2 ">
          <button
            className="bg_excercises px-4 py-2 next_button"
            //onClick={() => router.push(`/courses/html-css/${actualStep + 1}`)}
            onClick={handleNextStep}
            disabled={actualStep >= 4} //si el id es mayor o igual a 4 entonces el btn se suspende
          >
            Siguiente
          </button>
        </div>
      </Container>
    </div>
  );
};
