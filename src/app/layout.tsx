import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VitalX",
  description: "Seu plano de treino personalizado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <body className={inter.className}>
          <Header/>
          <main className="mt-12">
            {children}
          </main>
        </body>
      </html>
    </>
  );
}