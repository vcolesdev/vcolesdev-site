import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const THEME_SELECT_CONTAINER = [
  "flex",
  "items-center",
  "justify-between",
  "p-1",
  "rounded-xl",
  "bg-melon-600",
  "dark:bg-charcoal-500",
];

const THEME_SELECT_BUTTON = [
  "inline-block",
  "rounded-lg",
  "py-2",
  "px-2.5",
  "hover:bg-melon-600",
  "active:bg-melon-500",
  "dark:hover:bg-charcoal-400",
  "dark:active:bg-charcoal-300",
  "dark:text-charcoal-900",
];

styles.themeSelect = {
  container: classNames(THEME_SELECT_CONTAINER),
  button: classNames(THEME_SELECT_BUTTON),
};

export default styles;
