"use client";

import useLocalStorage from "@/hooks/events/useLocalStorage";
import {useContext, useEffect} from "react";
import {ThemeContext} from "@/context/ThemeContext";

export default function useTheme() {
  const {localStorage} = useLocalStorage();
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // If localstorage does not exist or the "theme" key doesn't exist...
    if (!localStorage) return;

    // Check for existing localstorage theme.
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as string);
      console.log("Theme set to LocalStorage theme: ", localStorage.getItem("theme"));
    }
  }, [localStorage, setTheme, theme]);

  return {
    theme,
    setTheme,
  }
}