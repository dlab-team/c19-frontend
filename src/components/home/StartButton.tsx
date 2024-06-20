"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const StartButton = () => {
  const router = useRouter();
  return (
    <Button
      className=""
      onClick={() => router.push("/courses/categories/css")}
      variant="dark"
    >
      Empezar
    </Button>
  );
};

export default StartButton;
