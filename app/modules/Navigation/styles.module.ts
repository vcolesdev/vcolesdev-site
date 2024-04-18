import classNames from "classnames";

export default {
  nav: {
    styles: classNames([
      "mx-auto",
      "flex",
      "max-w-7xl",
      "items-center",
      "justify-between",
      "p-6",
      "lg:px-8",
    ]),
    content: classNames([
      "hidden",
      "lg:flex",
      "lg:gap-x-12"
    ]),
    link: classNames([
      "block",
      "relative",
      "text-lg",
      "text-rose_brown-500",
      "hover:text-rose_brown-700",
      "font-semibold",
      "leading-6",
    ]),
    activeLink: classNames([
      "absolute",
      "-bottom-1",
      "left-0",
      "w-full",
      "h-[3px]",
      "bg-melon-300",
      "z-10"
    ]),
  },
  logoWrapper: classNames([
    "flex",
    "lg:flex-1",
  ]),
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
    "text-[32px]",
    "group-hover:tracking-wide",
  ]),
  btnMobileWrapper: classNames([
    "flex",
    "lg:hidden"
  ]),
  btnMobile: classNames([
    "-m-2.5",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "p-2.5",
    "text-gray-700"
  ]),
  themeChanger: classNames([
    "hidden",
    "lg:flex",
    "lg:flex-1",
    "lg:justify-end",
    "gap-3"
  ])
}