import classNames from "classnames";
import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const CONTENT = [
  "mx-auto",
  "max-w-7xl",
  "px-6",
  "py-12",
  "md:flex",
  "md:items-center",
  "md:justify-between",
  "lg:px-8",
  "xl:px-0",
];
const SOCIAL = ["flex", "justify-center", "items-center", "sm:space-x-6", "sm:order-2"];
const COPYRIGHT = ["mt-8", "md:order-1", "md:mt-0"];
const COPYRIGHT_TEXT = ["mt-10", "text-center", "text-sm", "font-medium", "leading-5", "dark:text-charcoal-800"];
const SOCIAL_LINKS = ["mt-10", "flex", "justify-center", "space-x-10"];
const SOCIAL_LINKS_ITEM = [
  "text-rosy_brown-300",
  "hover:text-melon-400",
  "dark:text-charcoal-800",
  "dark:hover:text-rose-400",
];

styles.content = classNames(CONTENT);
styles.social = classNames(SOCIAL);
styles.copyright = classNames(COPYRIGHT);
styles.copyrightText = classNames(COPYRIGHT_TEXT);
styles.socialLinks = classNames(SOCIAL_LINKS);
styles.socialLinksItem = classNames(SOCIAL_LINKS_ITEM);

export default styles;
