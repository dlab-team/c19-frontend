import type { Metadata } from "next";
import {  Discord } from "@/components";


export const metadata: Metadata = {
  title: "Ejercicios HTML-CSS",
  description: "...",
};


export default function ExcerciseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Discord />
    </>
  );
}    
