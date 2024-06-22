import classNames from "classnames";

const styles = {
  nav: {
    styles: classNames(["mx-12"]),
    content: classNames(["hidden", "lg:flex", "lg:gap-x-12"]),
    item: classNames([
      "relative",
    ]),
    link: classNames([
      "block",
      "relative",
      "text-lg",
      "text-rose_brown-500",
      "hover:text-rose_brown-700",
      "font-semibold",
      "leading-6",
      "dark:text-charcoal-800",
    ]),
    activeLink: classNames([
      "text-melon-400",
      "dark:text-rose-400",
    ]),
    darkActiveLink: classNames([
    ]),
  },
  logoWrapper: classNames(["flex", "lg:flex-1"]),
  logo: classNames([
    "group",
    "mt-1.5",
    "p-1.5",
    "tracking-normal",
    "transition-all",
    "duration-300",
    "ease-in-out-cubic",
  ]),
  logoText: classNames([
    "font-cursive",
    "font-semibold",
    "text-[24px]",
    "dark:text-charcoal-900",
  ]),
  mobileMenuIcon: classNames(["lg:hidden", "flex", "items-end"]),
  themeChanger: classNames([
    "hidden",
    "lg:flex",
    "lg:flex-1",
    "lg:justify-end",
    "gap-3",
  ]),
};

export default styles;
