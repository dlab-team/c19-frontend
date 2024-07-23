"use client";
import React from "react";
import { useState } from "react";
import Options from "@/components/game/options-drag";
import Swal from "sweetalert2";

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
    }))
  );
  const [ListaOpcion, setListaOpcion] = useState(option);
  let arreglo = Array.from({ length: numberSelect }, (_, index) => "");
  /* funcion para separar el texto que va en el editor */
  function separarTexto(texto: string) {
    const caracteresSeparadores = ["{", ";"];
    let resultado = [];

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
  //aqui recibo el evento y el string de la opcion
  const startDrag = (
    ev: React.DragEvent<HTMLDivElement>,
    item: { id: number; option: string; lista: number }
  ) => {
    ev.dataTransfer.setData("optionID", item.id.toString());
  };
  const dragginOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const onDrop = (ev: React.DragEvent<HTMLDivElement>, list: number,index:number) => {
    const optionID = ev.dataTransfer.getData("optionID");
    var item = ListaOpcion.find((item) => item.id.toString() == optionID)!;
    if(typeof(item)== undefined){
      item={
        id: index,
        option: "Arrastra aqui tu respuesta",
        lista: 2,
      };
    }
    
    //condiciono si la respuesta es la default se cambia la respuesta si ya ahi un item anterior se cambia al default
    if(ListaSeleccion[index].option=="Arrastra aqui tu respuesta"){
        item.lista=list;
        ListaSeleccion[index]=item;
        console.log(ListaSeleccion)
    }else{
        ListaSeleccion[index].lista=1;
        item.lista=list;
        ListaSeleccion[index]=item;  
        console.log(ListaSeleccion)
    }

    const newState = ListaOpcion.map((option) => {
      if (option.id.toString() === optionID) return item;
      return option;
    });

    setListaOpcion(newState);
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        var listaOption:string[] = []
        ListaSeleccion.forEach(item=>{listaOption.push(item.option)})
        console.log(listaOption)
        console.log(correctOption)
        if(listaOption.every((item,index)=>item ===correctOption[index])){
            console.log("logrado")
                Swal.fire({
                    title: "Respuesta Correcta",
                    text: "Estas haciendo un buen trabajo",
                    icon: "success",
                    confirmButtonText: "Ok",
                  });
        }else{
            let ganaste = false;
            console.log("perdiste")
            Swal.fire({
                title: "Respuesta Incorrecta",
                text: "Vuelve a intentarlo",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }}
    const handleClickReset=(event: React.MouseEvent<HTMLButtonElement>)=>{
        ListaSeleccion.map(item=>item.lista=1);
        setListaSeleccion(Array.from({ length: numberSelect }, (_, index) => ({
            id: index,
            option: "Arrastra aqui tu respuesta",
            lista: 2,
          })))
    }
//aqui formateo el texto para que se muestre bien en el editor componente
  let resultado = separarTexto(muestraCodigo);
  let textEditor = resultado.map((linea, index) => (
    <p key={`p-${index}`}>{linea}</p>
  ));

  return (
    <>
      <Options ListaOpcion={ListaOpcion} setListaOpcion={setListaOpcion} />
      <div className="contenedor">
        <center>
          <h3 className="title-card">Editor</h3>
        </center>
        <div className="editor-content">
          {textEditor}
          {Array.from({ length: numberSelect }, (_, index) => (
            <div key={`lista-${index}`}>
              <div
                key={`div-${index}`}
                id={index.toString()}
                onDragOver={(ev)=>dragginOver(ev)}
                onDrop={(ev) => onDrop(ev, 2,index)}
                className="select"
              >
                <div
                  id={ListaSeleccion[index].option}
                  key={`items-${ListaSeleccion[index].id}`}
                  className="card-options"
                >
                  {ListaSeleccion[index].option}
                </div>
              </div>
              <p key={`ayuda-${index}`}>{ayuda[index]}</p>
            </div>
          ))}
          <span>{"}"}</span>
        
        <div className="game-buttons">
          <button onClick={handleClickReset}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
            </svg></button>
            <button onClick={handleClick} >Ejecutar</button>
        </div>
        </div>
      </div>
    </>
  );
}
