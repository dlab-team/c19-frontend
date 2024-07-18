"use client";
import React from "react";

interface Props{
    option: Array<string>
}

export default function Options ({option}:Props) {
    function handleDrag(ev:React.DragEvent<HTMLDivElement>){
        //metodo q establece tipo de dato y valor arrastrado
        //el dato y el valor que son arrastrado
        ev.dataTransfer.setData("text",ev.currentTarget.id);
      }
    const todoItems = option.map((todo, index) =>
        <div draggable="true" onDragStart={handleDrag} id={todo} key={`items-${index}`} className="card-options">
          {todo}
        </div>
      );
    return(
        <div className="options">
            <center><h3 className="title-card">Opciones</h3></center>
            {todoItems}</div>);
}