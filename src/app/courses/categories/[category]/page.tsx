import React from "react";
import htmlCssProblems from "@/problems/problems.json";
import Excercise from "@/components/courses/Excercise";
import type { Problems } from "@/interfaces/problems";
import { getServerCookies } from "@/actions/cookies-server-actions";
import { notFound } from "next/navigation";
import gamesJson from "@/problems/gameProblems.json";
import { gameProblems } from "@/interfaces/gameProblems";
import { getRandomNumber } from "@/actions/game-server-action";

interface Props {
  params: { category: string };
}

const CategoryPage = ({ params }: Props) => {
  const cookieList = getServerCookies();

  if (params.category !== "juegos") {
    const problems: Problems = htmlCssProblems;
    let title: string;
    if (problems[params.category]) {
      title = problems[params.category][0].title;
    } else {
      notFound();
    }

    return (
      <div className="m-5 excercise-list">
        <div className="bg-gray p-3 rounded">
          <h4 className="m-0">{title}</h4>
        </div>
        <div className="p-3">
          <h3>Todos los Ejercicios {title}</h3>
        </div>

        <div className="d-flex gap-3 flex-wrap align-content-around justify-content-evenly m-0">
          {problems[params.category].map((problem) => (
            <Excercise
              title={problem.subtitle}
              description={problem.descripcion}
              key={problem.id}
              id={problem.id}
              type={problem.codeType}
              cookieList={cookieList[problem.id]}
            />
          ))}
        </div>
      </div>
    );
  } else {
    const games: gameProblems = gamesJson;
    if (!games[params.category]) {
      notFound();
    }
    const num: number = getRandomNumber();

    return (
      <div className="m-5 excercise-list">
        <div className="bg-gray p-3 rounded">
          <h4 className="m-0">Juegos</h4>
        </div>
        <div className="p-3">
          <h3>Todos los Juegos</h3>
        </div>

        <div className="d-flex gap-3 flex-wrap align-content-around justify-content-evenly m-0">
          {games[params.category].map((problem) => (
            <Excercise
              title={problem.titleGame}
              description={problem.enunciadoGame}
              key={problem.titleGame}
              id={problem.problems[num].id}
              type={problem.codeType}
              cookieList={cookieList[problem.problems[num].id]}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default CategoryPage;
