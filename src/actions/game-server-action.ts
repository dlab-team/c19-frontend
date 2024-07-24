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

async function filterGamesBySubType(subType: string): Promise<gameProblem[]> {
  const slug = subType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const allExercises = Object.values(GameProblems).flat();
  const filteredExercises = allExercises.filter(
    (exercise: gameProblem) => exercise.gameSubType === slug,
  );

  return filteredExercises.length ? filteredExercises : [];
}

export { filterGameById, filterGamesBySubType };
