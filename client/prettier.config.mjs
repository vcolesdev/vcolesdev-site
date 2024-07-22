// config borrowed from: https://gist.github.com/karpolan/2c573b5767bc9b65db9936c7fad4daac
/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  jsxSingleQuote: false,
  bracketSameLine: false,
  endOfLine: "lf",
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      "files": ["*.ts"],
      "options": {"parser": "babel-ts"}
    }
  ],
};

export default config;