"use client";

import useOnToggleTheme from "@/hooks/theme/useOnToggleTheme";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import {ReactNode} from "react";

interface ContentInterface {
  children: ReactNode | ReactNode[];
}

export default function Content({children}: ContentInterface) {
  const {onToggleDarkTheme, onToggleLightTheme, onToggleSystemTheme} =
    useOnToggleTheme();

  return (
    <>
      <Header
        id="siteHeaderPage"
        onToggleLightTheme={onToggleLightTheme}
        onToggleDarkTheme={onToggleDarkTheme}
        onToggleSystemTheme={onToggleSystemTheme}
      />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
