"use server";
import htmlCssProblems from "@/problems/problems.json";
import type { Problem, Problems } from "@/interfaces/problems";

const problems: Problems = htmlCssProblems;

async function filterExercisesById(
  id: number,
): Promise<Problem | Record<string, never>> {
  const categories = Object.keys(problems);

  for (const category of categories) {
    const exercises = problems[category];
    const exercise = exercises.find((ex) => ex.id === id);
    if (exercise) {
      return exercise;
    }
  }
  return {};
}

export { filterExercisesById };
