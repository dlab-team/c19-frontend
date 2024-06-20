import React from "react";
import Container from "react-bootstrap/Container";
import Ejercicio from "../../components/courses/Ejercicio";

export default function List() {
  return (
    <Container className="py-5">
      <h1 className="fw-bold">HTML Y CSS</h1>
      <h5 className="fw-normal text-secondary">Descripcion de HTML y CSS</h5>
      <div className="row">
        <Ejercicio
          url={"/courses/html-css/1"}
          src={"/ejerciciohtml.jpg"}
          alt={"Ejercicio 1 HTML"}
          title={"Ejercicio 1"}
          desc={"Descripción"}
        />
        <Ejercicio
          url={"/courses/html-css/2"}
          src={"/ejerciciohtml.jpg"}
          alt={"Ejercicio 2 HTML"}
          title={"Ejercicio 2"}
          desc={"Descripción"}
        />
        <Ejercicio
          url={"/courses/html-css/3"}
          src={"/ejerciciocss.jpg"}
          alt={"Ejercicio 3 HTML"}
          title={"Ejercicio 3"}
          desc={"Descripción"}
        />
        <Ejercicio
          url={"/courses/html-css/4"}
          src={"/ejerciciocss.jpg"}
          alt={"Ejercicio 4 HTML"}
          title={"Ejercicio 4"}
          desc={"Descripción"}
        />
      </div>
    </Container>
  );
}
