import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "880px",
      }}
    >
      <Container
        className="d-flex flex-column m-0 justify-content-center align-items-center"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <Image
          src={"/Ellipse_3.png"}
          alt={"Not Found Android"}
          width={514}
          height={514}
          style={{ position: "absolute", top: -300, left: -230, zIndex: -5 }}
        />
        <Image
          src={"/Ellipse_4.png"}
          alt={"Not Found Android"}
          width={222}
          height={222}
          className="mt-5 mb-5"
          style={{ position: "absolute", top: 300, left: 152, zIndex: -5 }}
        />
        <Image
          src={"/Ellipse_5.png"}
          alt={"Not Found Android"}
          width={300}
          height={400}
          className="mt-5 mb-5"
          style={{ position: "absolute", right: -200, zIndex: -5 }}
        />
        <Image
          src={"/Ellipse_6.png"}
          alt={"Not Found Android"}
          width={166}
          height={140}
          className="mt-5 mb-5"
          style={{ position: "absolute", top: -200, right: 0, zIndex: -5 }}
        />
        <Image
          src={"/Ellipse_7.png"}
          alt={"Not Found Android"}
          width={286}
          height={150}
          className="mt-5 mb-5"
          style={{ position: "absolute", bottom: -200, right: 150, zIndex: -5 }}
        />
        <Image
          src={"/android_404.png"}
          alt={"Not Found Android"}
          width={450}
          height={520}
          className="mt-5 mb-5"
          style={{ position: "absolute" }}
        />
      </Container>
      <button className="back_button">
        <Link href="/" className="text-decoration-none back_button p-4 py-2">
          Volver al Inicio
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
