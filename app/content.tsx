"use client";

import useBoxShadow from "@/hooks/theme/useBoxShadow";
import useOnToggleTheme from "@/hooks/theme/useOnToggleTheme";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import {ReactNode, useContext, useEffect} from "react";
import {ThemeContext} from "@/context/ThemeContext";

interface ContentInterface {
  children: ReactNode | ReactNode[];
}

export default function Content({children}: ContentInterface) {
  const {onToggleDarkTheme, onToggleLightTheme, onToggleSystemTheme} =
    useOnToggleTheme();

  const {boxShadowColor, setBoxShadowColor} = useBoxShadow();
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "light") {
      setBoxShadowColor("#d73c1d");
    }
    if (theme === "dark") {
      setBoxShadowColor("#333333");
    }
  }, [boxShadowColor, setBoxShadowColor, theme]);

  return (
    <>
      <Header
        id="siteHeaderPage"
        currentTheme={theme}
        onToggleLightTheme={onToggleLightTheme}
        onToggleDarkTheme={onToggleDarkTheme}
        onToggleSystemTheme={onToggleSystemTheme}
      />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
