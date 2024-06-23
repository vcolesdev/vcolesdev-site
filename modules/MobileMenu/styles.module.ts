import classNames from "classnames";

const styles = {
  dialog: {
    // Update to more appropriate class
    closeButton: classNames(["absolute", "items-center", "top-[24px]", "right-[16px]", "dark:text-rose-400"]),
    overlay: classNames([
      "fixed",
      "w-full",
      "h-full",
      "bg-slate-900/50",
      "z-[100]",
      "cursor-pointer",
      "dark:bg-charcoal-100/70",
    ]),
    element: classNames([
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
    ]),
    top: classNames(["block", "px-4", "py-6", "bg-melon-800", "dark:bg-charcoal-200"]),
    title: classNames(["inline-block", "ms-2", "text-3xl", "font-cursive", "font-semibold", "dark:text-charcoal-900"]),
    content: classNames(["w-full", "p-4"]),
  },
  menu: {
    element: classNames([]),
    item: classNames(["block"]),
    link: classNames([
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
    ]),
  },
};

export default styles;
