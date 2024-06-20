import classNames from "classnames";

export default {
  container: classNames(["px-6", "py-24", "sm:py-32", "lg:px-8"]),
  slot: classNames(["flex", "mt-12", "justify-center"]),
  slotBottom: classNames(["flex", "mt-12", "justify-center"]),
  slotTop: classNames(["flex", "mt-8", "justify-center"]),
  title: classNames([
    "mt-2",
    "text-4xl",
    "font-bold",
    "tracking-tight",
    "sm:text-6xl",
  ]),
  text: {
    styles: classNames([
      "mt-6",
      "text-xl",
      "leading-8",
      "text-rosy_brown-200/70",
      "dark:text-melon-700/70",
    ]),
    content: classNames(["mx-auto", "max-w-2xl", "text-center"]),
  },
  image: {
    styles: classNames([
      "rounded-md",
      "shadow-2xl",
      "ring-1",
      "ring-gray-900/10",
    ]),
    container: classNames(["mt-16", "flow-root", "sm:mt-24"]),
    content: classNames([
      "-m-2",
      "rounded-xl",
      "bg-gray-900/5",
      "p-2",
      "ring-1",
      "ring-inset",
      "ring-gray-900/10",
      "lg:-m-4",
      "lg:rounded-2xl",
      "lg:p-4",
    ]),
  },
};
