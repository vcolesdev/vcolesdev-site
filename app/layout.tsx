import React from "react";
import UnderConstruction from "../modules/UnderConstruction";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import type {Metadata} from "next";

import {
  Inter,
  Kanit,
  Jost,
  Satisfy,
  Anek_Tamil,
  Just_Another_Hand,
} from "next/font/google";

import "@/styles/main.css";

const inter = Inter({subsets: ["latin"]});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const anek = Anek_Tamil({
  subsets: ["latin"],
  variable: "--font-anek",
});

const satisfy = Satisfy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-satisfy",
});

const justAnotherHand = Just_Another_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-just-another-hand",
});

export const metadata: Metadata = {
  title: "Vanessa Coles - FullStack Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UnderConstruction />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
