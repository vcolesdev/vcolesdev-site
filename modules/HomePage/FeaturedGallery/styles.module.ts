import classNames from "classnames";

export default {
  overlay: {
    styles: classNames([
      "absolute",
      "inset-0",
      "flex",
      "h-full",
      "w-full",
      "items-center",
      "justify-center",
      "rounded-[32px]",
      "bg-melon-400/90",
      "bg-opacity-100",
      "transition",
      "active:bg-melon-400"
    ]),
    span: classNames([
      "text-white"
    ])
  },
  control: classNames([
    "cursor-pointer",
    "group",
    "relative",
    "flex",
    "rounded-[40px]",
    "border-8",
    "border-transparent",
    "active:border-8",
    "active:border-melon-500"
  ]),
  imageMedia: classNames([
    "h-auto",
    "max-w-full",
    "rounded-[32px]"
  ]),
  content: classNames([
    "container",
    "mx-auto",
    "grid",
    "max-w-7xl",
    "sm:grid-cols-2",
    "sm:gap-2",
    "md:grid-cols-3"
  ])
}