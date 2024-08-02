"use server";
import game from "@/problems/gameProblems.json";
import { gameProblem, gameProblems, gameFormas } from "@/interfaces/gameProblems";

const GameProblems: gameProblems = game;

function getRandomNumber(): number {
  let cant:number[] = GameProblems["juegos"].map((problem) =>problem.problems.length)
  let num:number= Math.floor(Math.random() * cant[0] );
  return num
}

async function filterGameById(
  id: number,
): Promise<gameFormas | Record<string, never>> {
  const problem = GameProblems.juegos.map((ex)=>ex.problems).flat();
  const filtered = problem.find(
    (ex)=>ex.id==id
  );
  return filtered ? filtered : {};
}


async function filterGamesBySubType(subType: string): Promise<gameFormas[]> {
  /*const slug = subType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");*/
  const allExercises = Object.values(GameProblems.juegos.map((ex)=>ex.problems)).flat();
  const filteredExercises = allExercises.map(
    (ex: gameFormas)=>ex
  );

  return filteredExercises.length ? filteredExercises : [];
}

export { filterGameById, filterGamesBySubType , getRandomNumber};
