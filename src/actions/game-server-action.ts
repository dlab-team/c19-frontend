"use server";
import game from "@/problems/gameProblems.json";
import { gameProblem, gameProblems } from "@/interfaces/gameProblems";

const GameProblems: gameProblems = game;

async function filterGameById(
  id: number,
): Promise<gameProblem | Record<string, never>> {
  const categories = Object.keys(GameProblems);

  for (const category of categories) {
    const exercises = GameProblems[category];
    const exercise = exercises.find((ex) => ex.id === id);
    if (exercise) {
      return exercise;
    }
  }
  return {};
}

export { filterGameById };
