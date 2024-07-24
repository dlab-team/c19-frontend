"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import htmlCssProblems from "@/problems/problems.json";
import gamesProblems from "@/problems/gameProblems.json";
import type { Problems } from "@/interfaces/problems";
import type { gameProblems } from "@/interfaces/gameProblems";

const problems: Problems = htmlCssProblems;
const games: gameProblems = gamesProblems;

interface Props {
  path: string;
  title: string;
}

const SidebarMenuItem = ({ path, title }: Props) => {
  const actualPath = usePathname();
  const subCats =
    title !== "juegos"
      ? problems[title].map((prob) => prob.codeSubType)
      : games[title].map((prob) => prob.gameSubType);
  const subCatSet = new Set(subCats);
  return (
    <>
      {Array.from(subCatSet).map((item, index) => {
        const slug = item.toLowerCase().trim().replace(/\s+/g, "-");
        return (
          <Link
            key={index}
            href={path + "/" + slug}
            className={`text-decoration-none text-dark  rounded-1 ${actualPath === path + "/" + slug && "link-active"}`}
          >
            <div className="subcat">
              <span>{item}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SidebarMenuItem;
