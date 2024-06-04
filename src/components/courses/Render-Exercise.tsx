import React from 'react';
import {Container} from "react-bootstrap";

interface Props{
    contenidohtml:string;
    contenidocss:string;
}

export const Render = ({contenidohtml, contenidocss}:Props) =>{
    const contenido = contenidohtml+contenidocss
    return(
        <Container>
        <div style={{height: "60vh", width:"40vw", border:"1px solid black", boxShadow:"3px 3px 5px #444" ,borderRadius:"0 0 5px 5px"}}>
            <iframe srcDoc={contenido} style={{height: "58vh", width:"39vw",}}></iframe>
        </div>
        </Container>
    )
}