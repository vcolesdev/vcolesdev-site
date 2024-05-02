/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSpacing: false,
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;