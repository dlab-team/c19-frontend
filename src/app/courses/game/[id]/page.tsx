import Gameselect from "@/components/game/drop-select";
import FiguraGame from "@/components/game/figura-game";
import EnunciadoGame from "@/components/game/game-enunciado";
import { filterGameById } from "@/actions/game-server-action";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const GamePage = async ({ params }: Props) => {
  const problemGame = await filterGameById(Number(params.id));
  if (Object.keys(problemGame).length === 0) {
    notFound();
  }
/*var listOptions = [{"id":1,"option":"background-color:red;","lista":1},
  {"id":2,"option":"background-color:red","lista":1},
  {"id":3,"option":"background-color:yellow;","lista":1},
  {"id":4,"option":"border:4px block-end-width;","lista":1},
  {"id":5,"option":"border:4px solid blue;","lista":1},
  {"id":6,"option":"border:4px solid blue","lista":1}];
var listCorrect = ['background-color:red;','border:4px solid blue;'];*/
//var listAyuda = ["/*color rojo*/","/*borde azul 4px*/"];
/*var figuraHtml = '<div class="square"></div>'
var figuraCss = '.square{width:100px;height:100px;background-color:red;border:4px solid blue;}'
var codigo = '.square{width:100px;height:100px;'
var enunciadoGame = "Reproduce en código css, lo que ves en el recuadro Figura: color de la figura y borde de la figura. Debes completar lo que falte del código que aparece en la pantalla Editor, eligiendo correctamente la respuesta del recuadro Opciones"*/

    return (
        <div className="grid-game">
          <EnunciadoGame enunciado={problemGame.enunciadoGame}/>
          <FiguraGame figuraCss={problemGame.figuraCss} figuraHtml={problemGame.figuraHtml}/>
          <Gameselect option={problemGame.listOptions} numberSelect={problemGame.listCorrect.length} correctOption={problemGame.listCorrect} ayuda={problemGame.listAyuda} muestraCodigo={problemGame.codigo}/>
        </div>
      );
}
export default GamePage