import classNames from "classnames";

export default {
  link: classNames([
    "group",
    "relative",
    "inline-block",
    "rounded-lg",
    "border-2",
    "border-melon-900",
    "bg-melon-900",
    "p-1.5",
    "text-rosy_brown-300",
    "shadow-lg",
    "shadow-melon-300/20",
    "transition-all",
    "duration-75",

    "group-hover:bg-melon-900",
    "group-hover:text-melon-400",
    "group-active:translate-y-0.5",
    "group-active:bg-melon-500",
    "group-active:text-rosy_brown-200",

    "dark:border-charcoal-900",
    "dark:bg-charcoal-900",
    "dark:text-charcoal-200",
    "dark:shadow-charcoal-200",
  ]),
  tooltip: {
    styles: classNames(["p-4", "bg-white", "rounded-lg", "shadow-lg"]),
    textContent: classNames(["text-sm", "text-gray-900"]),
  },
};
