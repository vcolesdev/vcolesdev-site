"use client";

import {useContext, useEffect, useRef, useState} from "react";
import {DarkModeContext} from "@/context/DarkModeContext";
import useLocalStorage from "@/hooks/events/useLocalStorage";

export default function useDarkMode() {
  const [document, setDocument] = useState<null | Document>(null);
  const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext);
  const {localStorage} = useLocalStorage();

  useEffect(() => {
    // If localstorage does not exist or the "theme" key doesn't exist, return.
    // This value is coupled with the theme key in localstorage.
    if (!localStorage || !localStorage.getItem("theme")) return;

    // Set the document to the window.document.
    setDocument(window.document);

    // Check if our localstorage "theme" key contains the word "dark".
    setIsDarkMode(localStorage.getItem("theme") === "dark");

    // Handle whether we are in dark mode.
    function handleDarkMode() {
      if (!document || !localStorage) return;

      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        console.log("We are currently in dark mode.");
      } else if (localStorage.getItem("theme") == "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        console.log("We are currently in light mode.");
      } else {
        console.error("Dark mode failed to set.");
      }
    }
    handleDarkMode();

  }, [document, isDarkMode, localStorage, setIsDarkMode]);

  /**
   * handleDarkModeOn()
   * Set the localstorage theme to "dark" and set the isDarkMode state to true.
   */
  function handleDarkModeOn() {
    setIsDarkMode(true);
  }

  /**
   * handleDarkModeOff()
   * Set the localstorage theme to "light" and set the isDarkMode state to false.
   */
  function handleDarkModeOff() {
    setIsDarkMode(false);
  }

  /**
   * handleToggleDarkMode()
   * If the localstorage theme is "light", set the dark mode on. If the localstorage theme is "dark", set the dark mode off.
   */
  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return {
    isDarkMode,
    setIsDarkMode,
    handleDarkModeOn,
    handleDarkModeOff,
    handleToggleDarkMode,
  }
}