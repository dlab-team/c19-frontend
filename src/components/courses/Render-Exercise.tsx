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
        border: "1px solid black",
        boxShadow: "3px 3px 5px #444",
        borderRadius: "0 0 5px 5px",
        padding: "0",
      }}
    >
      <iframe
        title="Render"
        srcDoc={contenido}
        style={{
          height: "100%",
          width: "100%",
          background: "#FFFFFF",
        }}
      ></iframe>
    </Container>
  );
};
