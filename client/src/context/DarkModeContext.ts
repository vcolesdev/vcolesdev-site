"use client";

import {createContext} from "react";

const DarkModeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: (value: boolean) => {},
});

const DarkModeProvider = DarkModeContext.Provider;

export {DarkModeContext, DarkModeProvider};