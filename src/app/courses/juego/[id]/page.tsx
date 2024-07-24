import React from "react";
import Gameselect from "@/components/game/drop-select";
import FiguraGame from "@/components/game/figura-game";
import EnunciadoGame from "@/components/game/game-enunciado";
import { filterGameById } from "@/actions/game-server-action";
import { notFound } from "next/navigation";
import { Advance } from "@/components";

interface Props {
  params: { id: number };
}

const GamePage = async ({ params }: Props) => {
  const problemGame = await filterGameById(Number(params.id));
  if (Object.keys(problemGame).length === 0) {
    notFound();
  }

  return (
    <div>
      <div className="grid-game">
        <EnunciadoGame enunciado={problemGame.enunciadoGame} />
        <FiguraGame
          figuraCss={problemGame.figuraCss}
          figuraHtml={problemGame.figuraHtml}
        />
        <Gameselect
          option={problemGame.listOptions}
          numberSelect={problemGame.listCorrect.length}
          correctOption={problemGame.listCorrect}
          ayuda={problemGame.listAyuda}
          muestraCodigo={problemGame.codigo}
        />
      </div>
      <Advance actualStep={Number(params.id)} lenguaje="juegos" />
    </div>
  );
};
export default GamePage;
