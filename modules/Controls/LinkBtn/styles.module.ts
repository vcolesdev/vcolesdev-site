import classNames from "classnames";

export const btnLink = {
  styles: classNames([
    "ease-in-out-cubic",
    "group",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "rounded-full",
    "border-2",
    "border-melon-400",
    "bg-melon-400",
    "px-4",
    "py-3",
    "text-center",
    "text-melon-900",
    "transition",
    "duration-75",
    "hover:bg-melon-400",
    "focus:shadow-none",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-melon-600"
  ]),
  textContent: classNames([
    "font-kanit",
    "text-white",
    "tracking-tight",
    "group-active:text-melon-900"
  ]),
  iconWrapper: classNames([
    "group-hover:translate-x-0.5",
  ]),
  icon: classNames([
    "text-white",
    "group-active:text-melon-900"
  ])
}

export const btnLinkOutline = {
  styles: classNames([
    "ease-in-out-cubic",
    "group",
    "inline-flex",
    "items-center",
    "gap-1.5",
    "rounded-full",
    "border-2",
    "border-melon-400",
    "bg-transparent",
    "px-4",
    "py-3",
    "text-center",
    "transition",
    "duration-75",
    "group-hover:bg-melon-400",
    "focus:shadow-none",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-melon-600"
  ]),
  textContent: classNames([
    "font-kanit",
    "text-melon-400",
    "tracking-tight",
    "group-hover:text-white",
  ]),
  iconWrapper: classNames([
    "group-hover:translate-x-0.5",
    "group-hover:transition"
  ]),
  icon: classNames([
    "text-melon-400",
    "group-hover:text-white"
  ])
}