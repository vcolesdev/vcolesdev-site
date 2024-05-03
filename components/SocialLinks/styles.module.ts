import classNames from "classnames";

export default {
  link: classNames([
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
    "hover:bg-melon-900",
    "hover:text-melon-400",
    "active:translate-y-0.5",
    "active:bg-melon-500",
    "active:text-rosy_brown-200",
  ]),
  tooltip: {
    styles: classNames([
      "p-4",
      "bg-white",
      "rounded-lg",
      "shadow-lg"
    ]),
    textContent: classNames([
      "text-sm",
      "text-gray-900"
    ])
  }
}