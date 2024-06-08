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
  return (
    <div className="mb-3">
      <Discord />
      <Container className="d-flex justify-content-between px-1 mt-3">
        <div className="d-flex justify-content-end px-2 ">
          <button
            className="bg_excercises px-4 py-2 next_button"
            onClick={() => router.push(`/courses/html-css/${actualStep - 1}`)}
          >
            Anterior
          </button>
        </div>
        <div className="d-flex justify-content-end px-2 ">
          <button
            className="bg_excercises px-4 py-2 next_button"
            onClick={() => router.push(`/courses/html-css/${actualStep + 1}`)}
          >
            Siguiente
          </button>
        </div>
      </Container>
    </div>
  );
};
