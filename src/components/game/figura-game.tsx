import React from "react";

interface Props {
  figuraCss: string;
  figuraHtml: string;
}

export default function FiguraGame({ figuraCss, figuraHtml }: Props) {
  const figura = `<!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            ${figuraHtml}
            <style>${figuraCss}</style>
        </body>
        </html>`;
  return (
    <div className="figura">
      <center>
        <h3 className="title-card">Figura</h3>
      </center>
      <center>
        <iframe
          srcDoc={figura}
          title="figura"
          style={{ width: "120px", backgroundColor: "transparent" }}
        ></iframe>
      </center>
    </div>
  );
}
