import classNames from "classnames";

export default {
  section: {
    styles: classNames([
      "group",
      "bg-melon-900",
      "mb-12",
      //"max-w-7xl",
      //"rounded-2xl",
      "shadow-2xl",
      "shadow-melon-400/20",
      //"md:rounded-[32px]",
      //"lg:rounded-[48px]",
      "lg:mb-24",
      "overflow-hidden"
    ]),
    content: classNames([
      "grid",
      "md:grid-cols-1",
      "md:gap-x-12",
      "lg:grid-cols-2",
      "lg:gap-y-12"
    ]),
    textContent: classNames([
      "flex",
      "items-center",
      "py-12",
      "sm:py-24",
      "lg:py-0"
    ]),
    header: {
      content: classNames([
        "py-24"
      ])
    }
  },
  image: {
    styles: classNames([
      "h-full",
      "w-full",
      "object-cover",
      "blur-md",
      "scale-105",
      "transition-all",
      "duration-500",
      "group-hover:scale-100",
      "group-hover:blur-none",
    ]),
    wrapper: classNames([
      "overflow-hidden",
    ])
  }
}