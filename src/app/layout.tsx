import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/bootstrap/Providers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

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
      <Providers>
        <body className={inter.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </Providers>
    </html>
  );
}
