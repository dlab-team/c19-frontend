"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { Discord } from "./Discord";


interface Props {
  actualStep: number;
}

export const Advance = ({ actualStep }: Props) => {

    const [step, setStep] = useState<number>(actualStep);
    const router = useRouter();
  return (
    <>
      <Discord />
      <Container className="d-flex justify-content-between px-1 mt-1">
        <div className="d-flex justify-content-end px-2 ">
          <button
            className="bg_excercises px-4 py-2 next_button"
            onClick={() => router.push(`/courses/html-css/${actualStep - 1}`)}
          >
            Anterior
          </button>
        </div>
        <div
          className="d-flex justify-content-end px-2 "
          onClick={() => router.push(`/courses/html-css/${actualStep + 1}`)}
        >
          <button className="bg_excercises px-4 py-2 next_button">
            Siguiente
          </button>
        </div>
      </Container>
    </>
  );
};
