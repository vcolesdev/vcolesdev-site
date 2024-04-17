import classNames from "classnames";

export default {
  links: {
    container: classNames([
      "mt-4",
      "inline-flex",
      "items-center",
      "gap-x-1",
    ]),
    span: classNames([
      "text-[15px]",
      "font-semibold",
      "text-rosy_brown-300",
      "group-hover:font-bold",
    ]),
    svg: classNames([
      "mt-[1px]",
      "size-4",
      "flex-shrink-0",
      "transition",
      "ease-in-out",
      "group-hover:translate-x-1",
    ])
  },
  project: {
    styles: classNames([
      "group",
      "w-full",
      "rounded-2xl",
      "bg-melon-900",
      "p-4",
      "transition",
      "hover:scale-105",
      "hover:shadow-lg",
      "hover:shadow-melon-300/10",
      "active:scale-100",
      "active:shadow-sm",
      "active:shadow-melon-300/20",
      "sm:p-6"
    ]),
    title: classNames([
      "mt-1.5",
      "transition",
      "ease-in-out",
      "text-xl",
      "text-rosy_brown-300",
      "font-semibold",
    ]),
    description: classNames([
      "mt-2",
      "line-clamp-3",
      "text-sm/relaxed",
      "text-rosy_brown-200/80",
      "font-medium"
    ])
  }
}