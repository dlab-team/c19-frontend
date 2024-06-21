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
            className="px-4 py-2 next_button"
            onClick={() => router.push(`/courses/html-css/${actualStep - 1}`)}
          >
            Anterior
          </button>
        </div>
        <div className="d-flex justify-content-end px-2 ">
          <button
            id={color}
            className="px-4 py-2 next_button"
            onClick={() => router.push(`/courses/html-css/${actualStep + 1}`)}
          >
            Siguiente
          </button>
        </div>
      </Container>
    </div>
  );
};
