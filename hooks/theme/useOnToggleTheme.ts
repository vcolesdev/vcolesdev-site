import {useEffect, useRef, useState} from "react";
import {useDarkMode} from "@/app/providers";
import {useTheme} from "next-themes";

export default function useOnToggleTheme() {
  const [document, setDocument] = useState<null | Document>(null);

  const {handleDarkModeOff, handleDarkModeOn} = useDarkMode();
  const {setTheme} = useTheme();

  useEffect(() => {
    setDocument(window.document);
  }, []);

  function onToggleLightTheme() {
    if (!document) return;

    // Set darkMode to false and set the theme to "light".
    handleDarkModeOff();
    setTheme("light");

    // Remove "dark" class from <html> and add "light" class.
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");

    // Update localstorage.
    localStorage.setItem("theme", "light");

    // Console log the theme change.
    console.log("Light theme toggled");
  }

  function onToggleDarkTheme() {
    if (!document) return;

    // Set darkMode to true and set the theme to "dark".
    handleDarkModeOn();
    setTheme("dark");

    // Remove "light" class from <html> and add "dark" class.
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");

    // Update localstorage.
    localStorage.setItem("theme", "dark");

    // Console log the theme change.
    console.log("Dark theme toggled");
  }

  function onToggleSystemTheme() {
    // We need to read window.matchMedia to determine if the system theme is dark or light.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = media.matches ? "dark" : "light";

    // If the system theme is dark, toggle the dark theme.
    if (systemTheme === "dark") {
      onToggleDarkTheme();
      console.log("System theme toggled", systemTheme);
    }

    // If the system theme is light, toggle the light theme.
    if (systemTheme === "light") {
      onToggleLightTheme();
      console.log("System theme toggled", systemTheme);
    }

    // Console log the theme change.
    console.log("System theme toggled", systemTheme);
  }

  return {
    onToggleLightTheme,
    onToggleDarkTheme,
    onToggleSystemTheme,
  }
}