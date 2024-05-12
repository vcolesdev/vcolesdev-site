import classNames from "classnames";
import {ButtonStyles} from "./api";

export const button: ButtonStyles = {
  layout: classNames([
    "group/button",
    "relative",
    "overflow-hidden",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "px-4",
    "py-4",
  ]),
  element: classNames([
    "rounded-full",
    "border-salmon_pink-400",
    "bg-gradient-to-t",
    "from-melon-400",
    "to-melon-300/60",
    "shadow-sm",
    "shadow-melon-300/20",
    "text-center",
  ]),
  transition: classNames([
    "ease-in-out-cubic",
    "transition-all",
    "duration-200",
    "delay-75",
  ]),
  states: {
    hover: classNames([
      "hover:bg-salmon_pink-400",
      "hover:border-salmon_pink-400",
      "focus:shadow-none",
    ]),
    focus: classNames([
      "focus:shadow-none",
      "focus:outline-none",
      "focus:ring-4",
      "focus:ring-melon-600",
    ]),
  },
  text: classNames([
    "relative",
    "w-full",
    "h-full",
    "inline-block",
    "z-[10]",
    "font-sans",
    "font-semibold",
    "text-white",
    "text-[17px]",
  ]),
  icon: {
    layout: classNames(["z-[10]", "relative"]),
    element: classNames(["text-melon-900", "group-active/button:text-white"]),
  },
};

export const outlineButton: ButtonStyles = {
  layout: classNames([
    "group/outlined",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "px-4",
    "py-3",
  ]),
  element: classNames([
    "rounded-full",
    "border-2",
    "border-salmon_pink-400",
    "bg-transparent",
    "text-center",
  ]),
  transition: classNames([
    "ease-in-out-cubic",
    "transition-all",
    "duration-75",
  ]),
  states: {
    hover: classNames([
      "hover:bg-salmon_pink-400",
      "hover:border-salmon_pink-400",
    ]),
    focus: classNames([
      "focus:shadow-none",
      "focus:outline-none",
      "focus:ring-4",
      "focus:ring-melon-600",
    ]),
  },
  text: classNames([
    "relative",
    "w-full",
    "h-full",
    "inline-block",
    "z-[10]",
    "font-kanit",
    "text-salmon_pink-400",
    "tracking-tight",
    "text-[17px]",
    "group-hover/outlined:text-white",
  ]),
  icon: {
    layout: classNames(["z-[10]", "relative"]),
    element: classNames([
      "text-salmon_pink-400",
      "group-hover/outlined:text-white",
    ]),
  },
};
