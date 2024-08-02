"use client";
import React from "react";
import { useState } from "react";
import Options from "@/components/game/options-drag";
import Swal from "sweetalert2";
import { FaRedo } from "react-icons/fa";

interface Props {
  option: { id: number; option: string; lista: number }[];
  numberSelect: number;
  correctOption: string[];
  ayuda: string[];
  muestraCodigo: string;
}

export default function Gameselect({
  numberSelect,
  option,
  correctOption,
  ayuda,
  muestraCodigo,
}: Props) {
  const [ListaSeleccion, setListaSeleccion] = useState(
    Array.from({ length: numberSelect }, (_, index) => ({
      id: index,
      option: "Arrastra aqui tu respuesta",
      lista: 2,
    })),
  );
  const [ListaOpcion, setListaOpcion] = useState(option);
  /* funcion para separar el texto que va en el editor */
  function separarTexto(texto: string) {
    const caracteresSeparadores = ["{", ";"];
    const resultado = [];

    let temp = "";
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      if (caracteresSeparadores.includes(char)) {
        temp += char;
        resultado.push(temp.trim());
        temp = "";
      } else {
        temp += char;
      }
    }

    return resultado;
  }
  const dragginOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const onDrop = (
    ev: React.DragEvent<HTMLDivElement>,
    list: number,
    index: number,
  ) => {
    const optionID = ev.dataTransfer.getData("optionID");
    let item = ListaOpcion.find((item) => item.id.toString() == optionID)!;
    if (typeof item === "undefined") {
      item = {
        id: index,
        option: "Arrastra aqui tu respuesta",
        lista: 2,
      };
    }

    //condiciono si la respuesta es la default se cambia la respuesta si ya ahi un item anterior se cambia al default
    if (ListaSeleccion[index].option == "Arrastra aqui tu respuesta") {
      item.lista = list;
      ListaSeleccion[index] = item;
    } else {
      ListaSeleccion[index].lista = 1;
      item.lista = list;
      ListaSeleccion[index] = item;
    }

    const newState = ListaOpcion.map((option) => {
      if (option.id.toString() === optionID) return item;
      return option;
    });

    setListaOpcion(newState);
  };
  const iaCorrecto="./ai-correcto.png"
  const handleClick = () => {
    const listaOption: string[] = [];
    ListaSeleccion.forEach((item) => {
      listaOption.push(item.option);
    });
    if (listaOption.every((item, index) => item === correctOption[index])) {
      Swal.fire({
        title: "Respuesta Correcta",
        text: "Estas haciendo un buen trabajo",
        imageUrl: "/ai-correcto.png",
        imageWidth:"14em",
        imageHeight:"10em",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Respuesta Incorrecta",
        text: "Vuelve a intentarlo",
        imageUrl: "/ai-error.png",
        imageWidth:"14em",
        imageHeight:"10em",
        confirmButtonText: "Ok",
      });
    }
  };
  const handleClickReset = () => {
    ListaSeleccion.map((item) => (item.lista = 1));
    setListaSeleccion(
      Array.from({ length: numberSelect }, (_, index) => ({
        id: index,
        option: "Arrastra aqui tu respuesta",
        lista: 2,
      })),
    );
  };
  //aqui formateo el texto para que se muestre bien en el editor componente
  const resultado = separarTexto(muestraCodigo);
  const textEditor = resultado.map((linea, index) => (
    <p key={`p-${index}`}>{linea}</p>
  ));

  return (
    <>
      <Options ListaOpcion={ListaOpcion} />
      <div className="contenedor">
        <center>
          <h3 className="title-card">Editor</h3>
        </center>
        <div className="editor-content">
          {textEditor}
          {Array.from({ length: numberSelect }, (_, index) => (
            <div key={`lista-${index}`} className="div-select">
              <div
                key={`div-${index}`}
                id={index.toString()}
                onDragOver={(ev) => dragginOver(ev)}
                onDrop={(ev) => onDrop(ev, 2, index)}
                className="select"
              >
                <div
                  id={ListaSeleccion[index].option}
                  key={`items-${ListaSeleccion[index].id}`}
                >
                  {ListaSeleccion[index].option}
                </div>
              </div>
              <p key={`ayuda-${index}`}>{ayuda[index]}</p>
            </div>
          ))}
          <span>{"}"}</span>

          <div className="game-buttons">
            <button onClick={handleClickReset}>
              <FaRedo style={{ transform: "scaleX(-1)" }} />
            </button>
            <button onClick={handleClick}>Ejecutar</button>
          </div>
        </div>
      </div>
    </>
  );
}
