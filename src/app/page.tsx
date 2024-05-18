
import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (

      <Container className=" p-5 d-flex  flex-column justify-content-center align-items-center ">
        <h1>Aprende HTML y CSS</h1>
        <h3>Un curso interactivo para aprender HTML y CSS</h3>
        <div>
          <Button className="" variant="secondary">
            Empezar
          </Button>
        </div>
      </Container>


  );
}
