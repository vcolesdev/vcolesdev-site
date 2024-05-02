"use client";

import * as React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";

import "@/assets/styles/main.css";

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
