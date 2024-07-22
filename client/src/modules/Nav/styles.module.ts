import classNames from "classnames";
import { ClassNames } from "@/api";

let styles: ClassNames = {};

const NAV = ["mx-12"];
const NAV_CONTENT = ["hidden", "lg:flex", "lg:gap-x-12"];
const NAV_ITEM = ["relative"];
const NAV_LINK = [
  "block",
  "relative",
  "text-lg",
  "text-rose_brown-500",
  "hover:text-rose_brown-700",
  "font-semibold",
  "leading-6",
  "dark:text-charcoal-800",
];
const NAV_ACTIVE_LINK = ["text-melon-400"];
const NAV_DARK_ACTIVE_LINK = ["dark:text-rose-400"];

const LOGO_WRAPPER = ["flex", "lg:flex-1"];
const LOGO = ["group", "mt-1.5", "p-1.5", "tracking-normal", "transition-all", "duration-300", "ease-in-out-cubic"];
const LOGO_TEXT = ["font-cursive", "font-semibold", "text-[24px]", "dark:text-charcoal-900"];

const MOBILE_MENU_ICON = ["lg:hidden", "flex", "items-end"];
const THEME_CHANGER = ["hidden", "lg:flex", "lg:flex-1", "lg:justify-end", "gap-3"];

styles.nav = {
  styles: classNames(NAV),
  content: classNames(NAV_CONTENT),
  item: classNames(NAV_ITEM),
  link: classNames(NAV_LINK),
  activeLink: classNames(NAV_ACTIVE_LINK),
  darkActiveLink: classNames(NAV_DARK_ACTIVE_LINK),
};
styles.logoWrapper = classNames(LOGO_WRAPPER);
styles.logo = classNames(LOGO);
styles.logoText = classNames(LOGO_TEXT);
styles.mobileMenuIcon = classNames(MOBILE_MENU_ICON);
styles.themeChanger = classNames(THEME_CHANGER);

export default styles;
