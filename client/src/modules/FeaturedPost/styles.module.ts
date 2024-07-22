import classNames from "classnames";

import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const CATEGORY_STYLES = [
  "text-sm",
  "font-medium",
  "tracking-tight",
  "text-melon-300",
  "group-hover:font-medium",
  "group-hover:text-melon-300",
];
const CATEGORY_CONTENT = [
  "mb-5",
  "inline-flex",
  "items-center",
  "gap-1.5",
  "rounded-full",
  "bg-melon-700",
  "px-3",
  "py-1.5",
  "group-hover:bg-melon-900",
  "group-hover:text-rosy_brown-200",
];

const DEFAULT_STYLES = ["cursor", "group", "relative", "rounded-[28px]", "py-8", "overflow-hidden"];
const CONTENT = ["relative", "max-w-2xl", "px-8"];
const EXCERPT = ["mt-4", "leading-6", "text-rosy_brown-200/60", "group-hover:text-melon-900", "lg:pr-16"];
const HOVER_ELEMENT = [
  "absolute",
  "rounded-[28px]",
  "top-0",
  "left-0",
  "w-0",
  "h-0",
  "bg-melon-400",
  "origin-center",
  "opacity-0",
  "group-hover:top-0",
  "group-hover:left-0",
  "group-hover:right-0",
  "group-hover:bottom-0",
  "group-hover:opacity-100",
  "group-hover:w-full",
  "group-hover:h-full",
  "transition-all",
  "duration-400",
  "ease-in-out",
];

const MORE_STYLES = ["mt-6", "inline-flex", "items-center", "gap-x-1"];
const MORE_CONTENT = ["font-medium", "tracking-tight", "group-hover:text-white"];
const MORE_SVG = [
  "mt-[3px]",
  "size-4",
  "flex-shrink-0",
  "transition",
  "ease-in-out",
  "group-hover:translate-x-1",
  "group-hover:text-white",
];

const TITLE_STYLES = ["mt-2", "tracking-tight", "group-hover:text-white"];
const TITLE_CONTENT = ["text-xl", "font-medium"];

styles.category = {
  styles: classNames(CATEGORY_STYLES),
  content: classNames(CATEGORY_CONTENT),
};

styles.default = classNames(DEFAULT_STYLES);
styles.content = classNames(CONTENT);
styles.excerpt = classNames(EXCERPT);
styles.hoverElement = classNames(HOVER_ELEMENT);

styles.more = {
  styles: classNames(MORE_STYLES),
  content: classNames(MORE_CONTENT),
  svg: classNames(MORE_SVG),
};

styles.title = {
  styles: classNames(TITLE_STYLES),
  content: classNames(TITLE_CONTENT),
};

export default styles;
