import classNames from "classnames";

export default {
  wrapper: classNames([
    "relative",
    "isolate",
    "mb-12",
    "min-h-screen",
    "overflow-hidden",
    "lg:mb-24"
  ]),
  image: classNames([
    "absolute",
    "inset-0",
    "-z-10",
    "h-full",
    "w-full",
    "object-cover"
  ]),
  divOne: {
    styles: classNames([
      "absolute",
      "inset-x-0",
      "-top-40",
      "-z-10",
      "transform-gpu",
      "overflow-hidden",
      "blur-3xl",
      "sm:-top-80"
    ]),
    child: classNames([
      "relative",
      "left-[calc(50%-11rem)]",
      "aspect-[1155/678]",
      "w-[36.125rem]",
      "-translate-x-1/2",
      "rotate-[30deg]",
      "bg-gradient-to-tr",
      "from-[#ff80b5]",
      "to-[#9089fc]",
      "opacity-20",
      "sm:left-[calc(50%-30rem)]",
      "sm:w-[72.1875rem]"
    ])
  },
  divTwo: {
    styles: classNames([
      "absolute",
      "inset-x-0",
      "top-[calc(100%-13rem)]",
      "-z-10",
      "transform-gpu",
      "overflow-hidden",
      "blur-3xl",
      "sm:top-[calc(100%-30rem)]"
    ]),
    child: classNames([
      "relative",
      "left-[calc(50%+3rem)]",
      "aspect-[1155/678]",
      "w-[36.125rem]",
      "-translate-x-1/2",
      "bg-gradient-to-tr",
      "from-[#ff80b5]",
      "to-[#9089fc]",
      "opacity-20",
      "sm:left-[calc(50%+36rem)]",
      "sm:w-[72.1875rem]"
    ])
  }
}