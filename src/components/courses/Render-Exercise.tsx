import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  contenidoHtml: string;
  contenidoCss: string;
}

export const Render = ({ contenidoHtml, contenidoCss }: Props) => {
  const contenido = `<!DOCTYPE html>
        <html>
        <head>
            <style>${contenidoCss}</style>
        </head>
        <body>
            ${contenidoHtml}
        </body>
        </html>`;
  return (
    <Container
      style={{
        height: "29rem",
        width: "100%",
        padding: "0",
      }}
    >
      <iframe
        title="Render"
        srcDoc={contenido}
        style={{
          padding: "10px",
          borderRadius: "20px",
          height: "100%",
          width: "100%",
          background: "#585757",
        }}
      ></iframe>
    </Container>
  );
};
