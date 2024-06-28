import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const LINKS_CONTAINER = ["mt-4", "inline-flex", "items-center", "gap-x-1"];
const LINK_CONTAINER = ["motion-project-card", "relative", "flex"];
const LINKS_SPAN = [
  "text-base",
  "font-medium",
  "text-rosy_brown-400",
  "group-hover:text-melon-400",
  "dark:text-charcoal-800",
  "dark:group-hover:text-rose-400",
  "dark:group-hover:font-semibold",
];
const LINKS_SVG = [
  "mt-[1px]",
  "size-4",
  "flex-shrink-0",
  "transition",
  "ease-in-out",
  "group-hover:translate-x-1",
  "group-hover:text-melon-400",
  "dark:text-charcoal-800",
];

const PROJECT_STYLES = [
  "group",
  "flex",
  "flex-col",
  "justify-between",
  "w-full",
  "rounded-3xl",
  "bg-melon-900",
  "p-4",
  "transition",
  "sm:p-6",
  "hover:shadow-2xl",
  "hover:shadow-melon-300/20",
  "dark:bg-charcoal-300",
  "dark:hover:shadow-2xl",
  "dark:hover:shadow-charcoal-100/40",
  "z-2",
];

const PROJECT_TITLE = [
  "mt-1.5",
  "transition",
  "ease-in-out",
  "text-xl",
  "text-rosy_brown-300",
  "font-semibold",
  "group-hover:text-melon-400",
  "dark:text-charcoal-800/90",
  "dark:group-hover:text-rose-400",
];
const PROJECT_DESCRIPTION = [
  "mt-2",
  "line-clamp-3",
  "text-base/relaxed",
  "text-rosy_brown-300",
  "opacity-80",
  "dark:text-charcoal-900/80",
  "dark:group-hover:text-white",
];

styles.links = {
  container: classNames(LINKS_CONTAINER),
  span: classNames(LINKS_SPAN),
  svg: classNames(LINKS_SVG),
};

styles.project = {
  description: classNames(PROJECT_DESCRIPTION),
  linkContainer: classNames(LINK_CONTAINER),
  styles: classNames(PROJECT_STYLES),
  title: classNames(PROJECT_TITLE),
};

export default styles;
