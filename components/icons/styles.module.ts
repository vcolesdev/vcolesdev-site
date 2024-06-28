import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const WRAPPER = [
  "relative",
  "inline-block",
  "rounded-xl",
  "border",
  "border-transparent",
  "bg-salmon_pink-800",
  "p-2",
  "text-rosy_brown-300",
  "dark:bg-charcoal-900",
  "dark:text-charcoal-200",
  "group-hover:-translate-y-1",
  "group-hover:border-melon-300/20",
  "group-hover:bg-melon-400",
  "group-hover:text-melon-900",
  "group-hover:shadow-md",
  "group-hover:shadow-melon-300/20",
  "dark:group-hover:bg-rose-500",
  "dark:group-hover:border-rose-500",
  "dark:group-hover:text-rose-100",
  "dark:group-hover:shadow-charcoal-200/30",
];

styles.wrapper = classNames(WRAPPER);

export default styles;
