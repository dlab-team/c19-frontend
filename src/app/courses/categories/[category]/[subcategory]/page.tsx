import React from "react";
import htmlCssProblems from "@/problems/problems.json";
import Excercise from "@/components/courses/Excercise";
import type { Problems } from "@/interfaces/problems";
import { getServerCookies } from "@/actions/cookies-server-actions";
import { notFound } from "next/navigation";
import { filterExcercisesBySubType } from "@/actions/problems-server-actions";
import type { gameProblems } from "@/interfaces/gameProblems";
import gamesProblems from "@/problems/gameProblems.json";
import { filterGamesBySubType } from "@/actions/game-server-action";

interface Props {
  params: { category: string; subcategory: string };
}

const SubcategoryPage = async ({ params }: Props) => {
  const cookieList = getServerCookies();

  if (params.category !== "juegos") {
    const problems: Problems = htmlCssProblems;
    let title: string;
    if (problems[params.category]) {
      title = problems[params.category][0].title;
    } else {
      notFound();
    }

    const subcatProblems = await filterExcercisesBySubType(params.subcategory);
    const slug = params.subcategory
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return (
      <div className="m-5 excercise-list">
        <div className="bg-gray p-3 rounded">
          <h4 className="m-0">{title}</h4>
        </div>
        <div className="p-3">
          <h3>Ejercicios {slug}</h3> {/* colocar subcategoria */}
        </div>

        <div className="d-flex gap-3 flex-wrap align-content-around justify-content-evenly ">
          {subcatProblems.map((problem) => (
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
    const games: gameProblems = gamesProblems;
    let title: string;
    if (games[params.category]) {
      title =
        params.category.charAt(0).toUpperCase() + params.category.slice(1);
    } else {
      notFound();
    }

    const subcatGames = await filterGamesBySubType();
    const slug = params.subcategory
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return (
      <div className="m-5 excercise-list">
        <div className="bg-gray p-3 rounded">
          <h4 className="m-0">{title}</h4>
        </div>
        <div className="p-3">
          <h3>Juegos {slug}</h3> {/* colocar subcategoria */}
        </div>

        <div className="d-flex gap-3 flex-wrap align-content-around justify-content-evenly ">
          {subcatGames.map((problem) => (
            <Excercise
              title={problem.gameSubType}
              description={problem.enunciadoGame}
              key={problem.id}
              id={problem.id}
              type={problem.codeType}
              cookieList={cookieList[problem.id]}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default SubcategoryPage;
