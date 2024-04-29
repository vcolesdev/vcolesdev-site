"use client";

import React from "react";
import UnderConstruction from "../modules/UnderConstruction";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import type {Metadata} from "next";

import "@/styles/main.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <div className="pt-24">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
