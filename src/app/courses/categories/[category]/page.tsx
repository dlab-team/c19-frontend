import React from "react";
import htmlCssProblems from "@/problems/problems.json";
import Excercise from "@/components/courses/Excercise";
import type { Problems } from "@/interfaces/problems";

interface Props {
  params: { category: string };
}

const CategoryPage = ({ params }: Props) => {
  const problems: Problems = htmlCssProblems;
  const title = problems[params.category][0].title;

  return (
    <div className="m-5 excercise-list">
      <div className="bg-gray p-3 rounded">
        <h4 className="m-0">{title}</h4>
      </div>
      <div className="p-3">
        <h3>Ejercicios</h3>
      </div>

      <div className="d-flex gap-5 flex-wrap align-content-around justify-content-evenly ">
        {problems[params.category].map((problem) => (
          <Excercise
            title={problem.subtitle}
            description={problem.descripcion}
            key={problem.id}
            id={problem.id}
            type={problem.codeType}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
