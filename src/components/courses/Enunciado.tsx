import React from "react";
interface EnunciadoProps {
  text?: string;
}

export const Enunciado: React.FC<EnunciadoProps> = ({ text }) => {
  return <h4>{text}</h4>;
};
