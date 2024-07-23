"use client";
import React from "react";

interface Props{
    ListaOpcion: { id: number; option: string; lista: number; }[],
    setListaOpcion: React.Dispatch<React.SetStateAction<{
      id: number;
      option: string;
      lista: number;
  }[]>>
}

export default function Options ({ListaOpcion,setListaOpcion}:Props) {

  const getList = (opciones:{ id: number; option: string; lista: number; }[],list:number) =>{
    return opciones.filter(item => item.lista === list)
  }
  //aqui recibo el evento y el string de la opcion
  const startDrag = (ev:React.DragEvent<HTMLDivElement>,item:{ id: number; option: string; lista: number; })=>{
    ev.dataTransfer.setData("optionID",item.id.toString());
    console.log(item);    
  }

    return(
        <div className="options">
            <center><h3 className="title-card">Opciones</h3></center>
            {getList(ListaOpcion,1).map(item=>(
              <div draggable="true" onDragStart={(ev)=>startDrag(ev,item)} id={item.id.toString()} key={`items-${item.id}`} className="card-options">
                {item.option}
              </div>)
              )}
        </div>
      );
}