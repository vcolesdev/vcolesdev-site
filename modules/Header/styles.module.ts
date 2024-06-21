import classNames from "classnames";

const headerStyles = {
  element: classNames([
    "flex",
    "z-[100]",
    "w-full",
    "fixed",
    "backdrop-blur-lg",
    "bg-melon-800/80",
    "px-8",
    "lg:px-0",
    "dark:bg-charcoal-200/80",
  ]),
  content: classNames([
    "mx-auto",
    "flex",
    "relative",
    "items-center",
    "justify-between",
    "w-full",
  ]),
  themeSelect: {
    container: classNames([
      "flex",
      "items-center",
      "justify-between",
      "p-1",
      "rounded-xl",
      "bg-melon-600",
      "dark:bg-charcoal-500",
    ]),
    button: classNames([
      "inline-block",
      "rounded-lg",
      "py-2",
      "px-2.5",
      "hover:bg-melon-600",
      "active:bg-melon-500",
      "dark:hover:bg-charcoal-400",
      "dark:active:bg-charcoal-300",
      "dark:text-charcoal-900",
    ]),
  },
};

export default headerStyles;
