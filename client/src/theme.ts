import colors from "tailwindcss/colors";

/* Colors */

const bgGradientStart = "#9795f0";
const bgGradientEnd = "#fbc8d4";

export const defaultColors = {
  transparent: "transparent",
  current: "currentColor",
  white: colors.white,
  slate: colors.slate,
  gray: colors.gray,
  zinc: colors.zinc,
  neutral: colors.neutral,
  stone: colors.stone,
  red: colors.red,
  orange: colors.orange,
  amber: colors.amber,
  yellow: colors.yellow,
  lime: colors.lime,
  green: colors.green,
  emerald: colors.emerald,
  teal: colors.teal,
  cyan: colors.cyan,
  sky: colors.sky,
  blue: colors.blue,
  indigo: colors.indigo,
  violet: colors.violet,
  purple: colors.purple,
  fuchsia: colors.fuchsia,
  pink: colors.pink,
  rose: colors.rose,
};

export const customColors = {
  bgGradientStart: bgGradientStart,
  bgGradientEnd: bgGradientEnd,
  melon: {
    DEFAULT: "#f3b3a6",
    100: "#48140a",
    200: "#902814",
    300: "#d73c1d",
    400: "#e9755d",
    500: "#f3b3a6",
    600: "#f5c2b7",
    700: "#f8d1c9",
    800: "#fae0db",
    900: "#fdf0ed",
  },
  rosy_brown: {
    DEFAULT: "#b98b82",
    100: "#281a17",
    200: "#51332e",
    300: "#794d44",
    400: "#a2675b",
    500: "#b98b82",
    600: "#c7a39c",
    700: "#d5bab5",
    800: "#e3d1cd",
    900: "#f1e8e6",
  },
  salmon_pink: {
    DEFAULT: "#e4959e",
    100: "#3c0f15",
    200: "#781f29",
    300: "#b42e3e",
    400: "#d45a68",
    500: "#e4959e",
    600: "#e9abb2",
    700: "#efc0c5",
    800: "#f4d5d8",
    900: "#faeaec",
  },
  charcoal: {
    DEFAULT: "#37515f",
    100: "#0b1013",
    200: "#162026",
    300: "#203038",
    400: "#2b404b",
    500: "#37515f",
    600: "#50778c",
    700: "#759bb0",
    800: "#a3bcca",
    900: "#d1dee5",
  },
  licorice: {
    DEFAULT: "#1f0812",
    100: "#060204",
    200: "#0d0308",
    300: "#13050b",
    400: "#1a070f",
    500: "#1f0812",
    600: "#6b1c3e",
    700: "#b62f69",
    800: "#d96a9a",
    900: "#ecb4cc",
  },
};

/* Fonts */

export const customFonts = {
  anek: ['"Anek Tamil"', "sans-serif"],
  kanit: ['"Kanit"', "sans-serif"],
  sans: ['"Reddit Sans"', "system-ui", "sans-serif"],
  serif: ['"Merriweather"', "Georgia", "serif"],
  mono: ['"Fira Code"', "monospace"],
  cursive: ['"Cedarville Cursive"', "cursive"],
};
