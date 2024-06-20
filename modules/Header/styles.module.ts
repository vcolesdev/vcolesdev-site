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
};

export default headerStyles;
