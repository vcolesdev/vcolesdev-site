import classNames from "classnames";

const styles = {
  category: {
    styles: classNames([
      "text-sm",
      "font-medium",
      "tracking-tight",
      "text-melon-300",
      "group-hover:font-medium",
      "group-hover:text-melon-300",
    ]),
    content: classNames([
      "mb-5",
      "inline-flex",
      "items-center",
      "gap-1.5",
      "rounded-full",
      "bg-melon-700",
      "px-3",
      "py-1.5",
      "group-hover:bg-melon-900",
      "group-hover:text-rosy_brown-200",
    ]),
  },
  default: classNames(["cursor", "group", "relative", "rounded-[28px]", "py-8", "overflow-hidden"]),
  content: classNames(["relative", "max-w-2xl", "px-8"]),
  excerpt: classNames(["mt-4", "leading-6", "text-rosy_brown-200/60", "group-hover:text-melon-900", "lg:pr-16"]),
  hoverElement: classNames([
    "absolute",
    "rounded-[28px]",
    "top-0",
    "left-0",
    "w-0",
    "h-0",
    "bg-melon-400",
    "origin-center",
    "opacity-0",
    "group-hover:top-0",
    "group-hover:left-0",
    "group-hover:right-0",
    "group-hover:bottom-0",
    "group-hover:opacity-100",
    "group-hover:w-full",
    "group-hover:h-full",
    "transition-all",
    "duration-400",
    "ease-in-out",
  ]),
  more: {
    styles: classNames(["mt-6", "inline-flex", "items-center", "gap-x-1"]),
    content: classNames(["font-medium", "tracking-tight", "group-hover:text-white"]),
    svg: classNames([
      "mt-[3px]",
      "size-4",
      "flex-shrink-0",
      "transition",
      "ease-in-out",
      "group-hover:translate-x-1",
      "group-hover:text-white",
    ]),
  },
  title: {
    styles: classNames(["mt-2", "tracking-tight", "group-hover:text-white"]),
    content: classNames(["text-xl", "font-medium"]),
  },
};

export default styles;
