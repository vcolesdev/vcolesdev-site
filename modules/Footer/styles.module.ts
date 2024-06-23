import classNames from "classnames";

const styles = {
  content: classNames([
    "mx-auto",
    "max-w-7xl",
    "px-6",
    "py-12",
    "md:flex",
    "md:items-center",
    "md:justify-between",
    "lg:px-8",
    "xl:px-0",
  ]),
  social: classNames(["flex", "justify-center", "items-center", "sm:space-x-6", "sm:order-2"]),
  copyright: classNames(["mt-8", "md:order-1", "md:mt-0"]),
  copyrightText: classNames(["mt-10", "text-center", "text-sm", "font-medium", "leading-5", "dark:text-charcoal-800"]),
  nav: {
    styles: classNames(["-mb-6", "columns-2", "sm:flex", "sm:justify-center", "sm:space-x-12"]),
    item: classNames([
      "text-rose_brown-600",
      "hover:text-rose_brown-900",
      "text-sm",
      "font-medium",
      "leading-6",
      "tracking-tight",
    ]),
  },
  socialLinks: {
    styles: classNames(["mt-10", "flex", "justify-center", "space-x-10"]),
    item: classNames([
      "text-rosy_brown-300",
      "hover:text-melon-400",
      "dark:text-charcoal-800",
      "dark:hover:text-rose-400",
    ]),
  },
};

export default styles;
