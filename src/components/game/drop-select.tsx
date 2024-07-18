import React from "react";
import { useState } from "react";
import Options from "@/components/game/options-drag"
import Swal from "sweetalert2";

interface Props{
    option: Array<string>,
    numberSelect: number,
    correctOption: string[],
    ayuda:string[],
    muestraCodigo:string
}

export default function Gameselect ({numberSelect,option,correctOption,ayuda,muestraCodigo}: Props){

    const[state, setState] = useState("intentalo")
    let arreglo = Array.from({ length: numberSelect }, (_, index) => (""))
    function allowDrop(ev : React.DragEvent<HTMLDivElement>){
        ev.preventDefault();
      }
    function handleDrop(ev : React.DragEvent<HTMLDivElement>){
        ev.preventDefault(); // Evita el comportamiento por defecto del navegador

    const targetId = parseInt(ev.currentTarget.id);
    if (arreglo[targetId] === "") {
        // Obtengo los datos arrastrados con el método dataTransfer
        const data = ev.dataTransfer.getData("text");

        // Verifico que el elemento arrastrado existe
        const draggedElement = document.getElementById(data);
        if (draggedElement) {
            // Agrego al arreglo el id
            arreglo[targetId] = data;
            console.log(arreglo);

            // Verifico que el elemento de destino existe antes de añadir el hijo
            if (ev.currentTarget) {
                ev.currentTarget.appendChild(draggedElement);
            }
        } else {
            console.error("Elemento arrastrado no encontrado");
        }
    }
      }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // tu lógica aquí
        arreglo.forEach((item,ind) => {
            if (item != ""){
                //arreglo.forEach(option:string,ind:number=>{if(option == correctOption[ind]){
                if(item == correctOption[ind]){
                let ganaste = true;
                console.log("logrado")
                setState("ganaste")
                Swal.fire({
                    title: "Respuesta Correcta",
                    text: "Estas haciendo un buen trabajo",
                    icon: "success",
                    confirmButtonText: "Ok",
                  });
                }else{
                let ganaste = false;
                console.log("perdiste")
                setState("perdiste")
                Swal.fire({
                    title: "Respuesta Incorrecta",
                    text: "Vuelve a intentarlo",
                    icon: "error",
                    confirmButtonText: "Ok",
                  });
                }
            }});
    };
    
    const divElements = Array.from({ length: numberSelect }, (_, index) => (
        <div key={`div-${index}`} id={index.toString()} onDrop={handleDrop} onDragOver={allowDrop} className="select"></div>
      ));
    return(
        <>
            <Options option={option}/>
            <div className="contenedor">
                <center><h3 className="title-card">Editor</h3></center>
                <p>{muestraCodigo}</p>
                {divElements}
                <p>{ayuda}</p>
                <span>{"}"}</span>
                <button onClick={handleClick} id="revisar">revisar</button>
            </div>
        </>
    )
}