import React from "react";

interface EnunciadoProps {
  enunciado?: string
}

export const Enunciado: React.FC<EnunciadoProps> = ({
  enunciado
}) => {
  return (
      <div className="enunciado-container">
        <h4>Enunciado</h4>
        <h4>{enunciado}</h4>
      </div>
  );
};
