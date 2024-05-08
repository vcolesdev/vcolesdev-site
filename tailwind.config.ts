import {defaultColors, customColors, customFonts} from "./app/theme";

const config: import('tailwindcss').Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}"
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
        light: {
          bgColor: customColors.melon[800],
          textColor: customColors.rosy_brown[200],
          linkColor: customColors.melon[300],
          focusRingColor: customColors.melon[600]
        },
        dark: {
          bgColor: customColors.charcoal[200],
        },
        primary: customColors.melon[400],
        secondary: customColors.salmon_pink[300],
      },
    },
  },
  darkMode: ["selector", '[data-mode="dark"]'],
  plugins: [],
}

export default config;