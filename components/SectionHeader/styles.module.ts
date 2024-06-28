import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const HEADER = ["mx-auto", "max-w-full", "px-6", "lg:px-8", "lg:max-w-7xl"];
const CONTENT = ["mx-auto", "max-w-2xl", "lg:mx-0"];
const EYEBROW = [
  "inline-block",
  "ms-0.5",
  "mb-2",
  "text-[0.975rem]",
  "uppercase",
  "tracking-loose",
  "font-bold",
  "leading-7",
  "text-rosy_brown-300",
  "dark:text-charcoal-700",
];
const DESCRIPTION_STYLES = ["mb-6", "mt-6", "tracking-tight", "text-rosy_brown-200/60", "dark:text-charcoal-800"];
const DESCRIPTION_DEFAULT = [
  "text-xl",
  "leading-8",
  "tracking-loose",
  "text-rosy_brown-200/60",
  "dark:text-charcoal-800",
];
const DESCRIPTION_LARGE = [
  "text-xl",
  "leading-8",
  "tracking-tight",
  "text-rosy_brown-200/80",
  "dark:text-charcoal-800",
  "md:text-2xl",
  "md:leading-relaxed",
];
const TITLE = ["mt-3", "mb-8", "text-4xl", "font-bold", "tracking-tight", "sm:text-6xl", "dark:text-charcoal-900"];

styles.header = classNames(HEADER);
styles.content = classNames(CONTENT);
styles.eyebrow = classNames(EYEBROW);
styles.title = classNames(TITLE);
styles.description = {
  styles: classNames(DESCRIPTION_STYLES),
  default: classNames(DESCRIPTION_DEFAULT),
  large: classNames(DESCRIPTION_LARGE),
};

export default styles;
