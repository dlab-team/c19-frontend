"use client";
import Gameselect from "@/components/game/drop-select";

var listOptions = ['backgroundColor:"red";','backgroundColor:"red"','backgroundColor:"yellow;"','border:"4px block-end-width"','border:"4px solid blue;"','border:"4px solid blue"'];
var listCorrect = ['backgroundColor:"red";','border:"4px solid blue;"'];
var listayuda = ["/*color rojo*/","/*borde azul 4px*/"];
var figura = <div style={{width:"100px",height:"100px",backgroundColor:"red", border:"4px solid blue"}}></div>;
var codigo = '.square{<br>width:"100px";<br>height:"100px";'

export default function Home() {
    return (
        <div className="grid-game">
          <div className="enunciado">
            <center><h3 className="title-card">¿Como jugar?</h3></center>
            <p>Reproduce en código css, lo que ves en el recuadro Figura:<br></br>color de la figura y borde de la figura. <br></br> Debes completar lo que falte del código que aparece en la pantalla Editor, eligiendo correctamente la respuesta del recuadro Opciones</p>
          </div>
          <div className="figura">
            <center><h3 className="title-card">Figura</h3></center>
            <center>{figura}</center>
          </div>
          <Gameselect option={listOptions} numberSelect={listCorrect.length} correctOption={listCorrect} ayuda={listayuda} muestraCodigo={codigo}/>
        </div>
      );
    }