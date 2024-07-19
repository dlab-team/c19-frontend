"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import htmlCssProblems from "@/problems/problems.json";
import type { Problems } from "@/interfaces/problems";

const problems: Problems = htmlCssProblems;

interface Props {
  path: string;
  title: string;
}

const SidebarMenuItem = ({ path, title }: Props) => {
  const actualPath = usePathname();
  const subCats = problems[title].map((prob) => prob.codeSubType);
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
