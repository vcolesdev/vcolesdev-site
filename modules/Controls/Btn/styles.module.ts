import classNames from "classnames";

export const btnLink = {
  styles: classNames([
    "ease-in-out-cubic",
    "group/button",
    "relative",
    "overflow-hidden",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "px-4",
    "py-3.5",

    "rounded-full",
    "border-salmon_pink-400",
    "bg-salmon_pink-400",
    "shadow-sm",
    "shadow-melon-300/20",

    "text-center",

    "transition-all",
    "duration-200",
    "delay-75",

    "hover:bg-salmon_pink-400",
    "hover:border-salmon_pink-400",

    "focus:shadow-none",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-melon-600",
  ]),
  textContent: classNames([
    "relative",
    "w-full",
    "h-full",
    "inline-block",
    "z-[10]",

    "font-kanit",
    "text-white",
    "tracking-tight",
    "text-[17px]",
  ]),
  iconWrapper: classNames(["z-[10]", "relative"]),
  icon: classNames(["text-melon-900", "group-active/button:text-white"]),
};

export const btnLinkOutline = {
  styles: classNames([
    "ease-in-out-cubic",
    "group/outlined",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "px-4",
    "py-3",

    "rounded-full",
    "border-2",
    "border-salmon_pink-400",
    "bg-transparent",

    "text-center",

    "transition",
    "duration-75",

    "hover:bg-salmon_pink-400",
    "hover:border-salmon_pink-400",

    "focus:shadow-none",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-melon-600",
  ]),
  textContent: classNames([
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
  iconWrapper: classNames(["z-[10]", "relative"]),
  icon: classNames(["text-melon-400", "group-hover/outlined:text-white"]),
};
