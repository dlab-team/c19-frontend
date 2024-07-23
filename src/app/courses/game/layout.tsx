import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juego",
  description: "...",
};

export default function ExcerciseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}