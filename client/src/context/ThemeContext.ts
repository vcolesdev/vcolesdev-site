"use client";

import {createContext} from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (value: string) => {},
});

const ThemeProvider = ThemeContext.Provider;

export {ThemeContext, ThemeProvider};