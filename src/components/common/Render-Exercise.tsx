import React from 'react';
import {Container} from "react-bootstrap";

interface Props{
    contenidohtml:string;
    contenidocss:string;
}

export const Render = ({contenidohtml, contenidocss}:Props) =>{
    const contenido = contenidohtml+"<style>"+contenidocss+"</style>"
    return(
        <Container>
        <div style={{ height: "8vh", width:"40vw", border:"1px solid black", backgroundColor:"#38353f",borderRadius:"5px 5px 0 0"}}>
            <p style={{width:"20vw", border:"1px solid white", color:"white", margin:"2vh auto"}}> Localhost:8000 </p>
        </div>
        <div style={{height: "52vh", width:"40vw", border:"1px solid black", boxShadow:"3px 3px 5px #444" ,borderRadius:"0 0 5px 5px"}}>
            <iframe srcDoc={contenido} style={{height: "50vh", width:"39vw",}}></iframe>
        </div>
        </Container>
    )
}