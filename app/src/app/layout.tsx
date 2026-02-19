import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "../interfaces/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], 
});

export const metadata: Metadata = {
  title: "GhibliBox",
  description: "Este site serve para avaliações dos filmes do Studio Ghibli, avaliações essas compartilhadas entre os usuários.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
