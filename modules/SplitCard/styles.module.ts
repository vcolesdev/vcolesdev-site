import classNames from "classnames";

import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const SECTION_STYLES = [
  "group/element",
  "bg-melon-900",
  "mb-12",
  "shadow-2xl",
  "shadow-melon-400/20",
  "lg:mb-24",
  "overflow-hidden",
  "dark:bg-charcoal-300",
  "dark:shadow-charcoal-100/20",
];
const SECTION_CONTENT = ["grid", "md:grid-cols-1", "md:gap-x-12", "lg:grid-cols-2", "lg:gap-y-12"];
const SECTION_TEXT_CONTENT = ["flex", "items-center"];
const SECTION_HEADER_CONTENT = ["py-12", "lg:py-24"];
const IMAGE_STYLES = [
  "h-full",
  "w-full",
  "object-cover",
  "scale-105",
  "transition-all",
  "duration-500",
  "lg:blur-md",
  "lg:group-hover/element:scale-100",
  "lg:group-hover/element:blur-none",
];
const IMAGE_WRAPPER = ["overflow-hidden"];

styles.section = {
  styles: classNames(SECTION_STYLES),
  content: classNames(SECTION_CONTENT),
  textContent: classNames(SECTION_TEXT_CONTENT),
  header: {
    content: classNames(SECTION_HEADER_CONTENT),
  },
};

styles.image = {
  styles: classNames(IMAGE_STYLES),
  wrapper: classNames(IMAGE_WRAPPER),
};

export default styles;
