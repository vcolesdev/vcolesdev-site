"use client";

import { DarkModeProvider } from "@/context/DarkModeContext";
import { ThemeProvider } from "@/context/ThemeContext";
import useDarkMode from "@/hooks/theme/useDarkMode";
import useTheme from "@/hooks/theme/useTheme";
import { ReactNode, useEffect } from "react";

function Providers({ children }: { children: ReactNode | ReactNode[] }) {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { theme, setTheme } = useTheme();

  const themeValue = { theme, setTheme };
  const darkModeValue = { isDarkMode, setIsDarkMode };

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "system");
  }, [theme, isDarkMode, setTheme]);

  return (
    <ThemeProvider value={themeValue}>
      <DarkModeProvider value={darkModeValue}>{children}</DarkModeProvider>
    </ThemeProvider>
  );
}

export { Providers, useDarkMode, useTheme };
