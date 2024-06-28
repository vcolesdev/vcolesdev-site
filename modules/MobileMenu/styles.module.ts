import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const DIALOG_CLOSE_BUTTON = ["absolute", "items-center", "top-[24px]", "right-[16px]", "dark:text-rose-400"];
const DIALOG_OVERLAY = [
  "fixed",
  "w-full",
  "h-full",
  "bg-slate-900/50",
  "z-[100]",
  "cursor-pointer",
  "dark:bg-charcoal-100/70",
];
const DIALOG_ELEMENT = [
  "fixed",
  "justify-start",
  "flex-col",
  "w-full",
  "h-full",
  "inset-0",
  "bg-melon-900",
  "z-[150]",
  "shadow-2xl",
  "shadow-melon-300/80",
  "lg:hidden",
  "dark:bg-charcoal-300",
  "dark:shadow-charcoal-100/80",
];
const DIALOG_TOP = ["block", "px-4", "py-6", "bg-melon-800", "dark:bg-charcoal-200"];
const DIALOG_TITLE = ["inline-block", "ms-2", "text-3xl", "font-cursive", "font-semibold", "dark:text-charcoal-900"];
const DIALOG_CONTENT = ["w-full", "p-4"];
const MENU_ELEMENT = [];
const MENU_ITEM = ["block"];
const MENU_LINK = [
  "inline-block",
  "relative",
  "p-4",
  "font-anek",
  "text-[1.5em]",
  "text-rose_brown-500",
  "leading-10",
  "transform",
  "translate-x-0",
  "ease-in-out-cubic",
  "duration-300",
  "hover:translate-x-7",
  "hover:text-rose_brown-700",
  "dark:text-charcoal-800",
];

styles.dialog = {
  closeButton: classNames(DIALOG_CLOSE_BUTTON),
  overlay: classNames(DIALOG_OVERLAY),
  element: classNames(DIALOG_ELEMENT),
  top: classNames(DIALOG_TOP),
  title: classNames(DIALOG_TITLE),
  content: classNames(DIALOG_CONTENT),
};

styles.menu = {
  element: classNames([]),
  item: classNames(MENU_ITEM),
  link: classNames(MENU_LINK),
};

export default styles;
