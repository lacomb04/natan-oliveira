import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natan Oliveira",
  description:
    "Página de pre-campanha de Natan Oliveira para Deputado Estadual do Minas Gerais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
