import React from "react";
interface EnunciadoProps {
  enunciado?: string;
  descripcion: string;
}

export const Enunciado: React.FC<EnunciadoProps> = ({
  enunciado,
  descripcion,
}) => {
  return (
    <>
      <h4>{descripcion}</h4>
      <h4>{enunciado}</h4>
    </>
  );
};
