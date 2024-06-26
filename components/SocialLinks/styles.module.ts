import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const LINK = [
  "group",
  "relative",
  "inline-block",
  "rounded-lg",
  "border-2",
  "border-melon-900",
  "bg-melon-900",
  "p-1.5",
  "text-rosy_brown-300",
  "shadow-lg",
  "shadow-melon-300/20",
  "transition-all",
  "duration-75",
  "group-hover:bg-melon-900",
  "group-hover:text-melon-400",
  "group-active:translate-y-0.5",
  "group-active:bg-melon-500",
  "group-active:text-rosy_brown-200",
  "dark:border-charcoal-900",
  "dark:bg-charcoal-900",
  "dark:text-charcoal-200",
  "dark:shadow-charcoal-200",
];
const TOOLTIP = ["p-4", "bg-white", "rounded-lg", "shadow-lg"];
const TOOLTIP_TEXT_CONTENT = ["text-sm", "text-gray-900"];

styles.link = classNames(LINK);
styles.tooltip = {
  styles: classNames(TOOLTIP),
  textContent: classNames(TOOLTIP_TEXT_CONTENT),
};

export default styles;
