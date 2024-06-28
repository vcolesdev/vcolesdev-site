import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

styles.boxShadow = classNames(["fixed", "left-0", "top-0", "z-10", "w-full", "bg-transparent"]);
styles.element = classNames([
  "flex",
  "z-[100]",
  "w-full",
  "fixed",
  "backdrop-blur-lg",
  "bg-melon-800/80",
  "px-8",
  "xl:px-0",
  "dark:bg-charcoal-200/80",
]);
styles.content = classNames(["mx-auto", "flex", "relative", "items-center", "justify-between", "w-full"]);

export default styles;
