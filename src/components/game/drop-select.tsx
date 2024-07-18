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
    //var select = document.createElement("div")
    //select.className="w-4 h-4 bg-white";
    const[state, setState] = useState("intentalo")
    let arreglo = ["","",""]
    function allowDrop(ev){
        ev.preventDefault();
      }
      function handleDrop(ev){
        if(arreglo[parseInt(ev.target.id)]==""){
          //obtengo los datos arrastrados con el metodo dataTrasfer
          var data = ev.dataTransfer.getData("text");
          //agrego al arreglo elk id 
          arreglo[parseInt(ev.target.id)] = data;
          console.log(arreglo)
          ev.target.appendChild(document.getElementById(data));
      }
      //controlo que todos esten arrastrados
      if (arreglo[0] != "" && arreglo[1] != "" && arreglo[2] !=""){
        if (arreglo[0] == correctOption[0] && arreglo[1] == correctOption[1] && arreglo[2] == correctOption[2]){
            /*document.getElementById("change")?.innerHTML = "logrado";*/
            setState("ganaste")
            Swal.fire({
                title: "Respuesta Correcta",
                text: "Estas haciendo un buen trabajo",
                icon: "success",
                confirmButtonText: "Ok",
              });
        }else{
            /*document.getElementById("change")?.innerHTML = "intenta de nuevo";*/
            setState("perdiste")
            Swal.fire({
                title: "Respuesta Incorrecta",
                text: "Vuelve a intentarlo",
                icon: "error",
                confirmButtonText: "Ok",
              });
        }
    }}
    const divElements = Array.from({ length: numberSelect }, (_, index) => (
        <><div key={index} id={index.toString()} onDrop={handleDrop} onDragOver={allowDrop} className="select"></div><span>{ayuda[index]}</span></>
      ));
    return(
        <>
            <Options option={option}/>
            <div className="contenedor">
                <center><h3 className="title-card">Editor</h3></center>
                {muestraCodigo}
                {divElements}
                <br></br>{"}"}
            </div>
        </>
    )
}