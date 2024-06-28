import {defaultColors, customColors, customFonts} from "./app/theme";

const lightTheme = {
  bgColor: customColors.melon[800],
  textColor: customColors.rosy_brown[200],
  linkColor: customColors.melon[300],
  focusRingColor: customColors.melon[500],
  primary: customColors.melon[400],
  secondary: customColors.salmon_pink[400],
}

const darkTheme = {
  bgColor: customColors.charcoal[200],
  textColor: customColors.rosy_brown[800],
  linkColor: customColors.melon[600],
  focusRingColor: customColors.melon[500],
  primary: customColors.melon[400],
  secondary: customColors.salmon_pink[400],
}

const config: import('tailwindcss').Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./hooks/**/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: defaultColors,
    extend: {
      fontFamily: customFonts,
      colors: {
        charcoal: customColors.charcoal,
        melon: customColors.melon,
        rosy_brown: customColors.rosy_brown,
        salmon_pink: customColors.salmon_pink,
        light: lightTheme,
        dark: darkTheme,
      },
    },
  },
  darkMode: ["selector"],
  plugins: []
}

export default config;