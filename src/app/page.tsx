import { Comments } from "@/components/index";
import Image from "next/image";
import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container className="mt-5">
      <Container className=" p-3 d-flex  flex-column justify-content-center align-items-center ">
        <h1 className="m-3 fw-bold">Aprende HTML y CSS</h1>
        <h5 className="text-secondary">
          Un curso interactivo para aprender HTML y CSS
        </h5>
        <div>
          <Button className="" variant="dark">
            Empezar
          </Button>
        </div>
        <Image
          src="/html_css.png"
          alt={"HTML + CSS"}
          width={750}
          height={500}
        ></Image>
      </Container>
      <Container>
        <div className="">
          <h2>Únete a la comunidad de Discord</h2>
          <h5 className="text-secondary">Comentarios de Miembros</h5>
        </div>
        <Comments />
      </Container>
    </Container>
  );
}
