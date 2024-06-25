"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
  nbr: number;
}

const SidebarMenuItem = ({ path, title, nbr }: Props) => {
  const actualPath = usePathname();
  return (
    <Link
      href={path}
      className={`text-decoration-none text-dark fs-5 p-2 rounded-1 ${actualPath === path && "link-active"}`}
    >
      <div>
        <span>
          {nbr}.- {title}
        </span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
