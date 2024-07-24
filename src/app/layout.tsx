import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HTML CSS - Desafio Latam",
  description: "Landing curso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div style={{ minHeight: "110vh" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
