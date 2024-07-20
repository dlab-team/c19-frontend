import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ejercicios HTML-CSS",
  description: "...",
};

export default function ExcerciseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="body-color">{children}</div>;
}

