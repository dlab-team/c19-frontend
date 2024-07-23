import React from "react"

interface Props{
    enunciado:string
}


export default function EnunciadoGame ({enunciado}:Props){
    return(
        <div className="enunciado">
            <center><h3 className="title-card">¿Como jugar?</h3></center>
            <p>{enunciado}</p>
        </div>    

    )
}