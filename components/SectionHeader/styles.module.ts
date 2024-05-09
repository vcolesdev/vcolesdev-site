import classNames from "classnames";

export const styles = {
  header: classNames(["mx-auto", "max-w-7xl", "px-6", "lg:px-8"]),
  content: classNames(["mx-auto", "max-w-2xl", "lg:mx-0"]),
  eyebrow: classNames([
    "inline-block",
    "ms-0.5",
    "mb-2",
    "text-sm",
    "uppercase",
    "tracking-wide",
    "font-bold",
    "leading-7",
    "text-rosy_brown-300",
  ]),
  description: {
    styles: classNames([
      "mt-6",
      "tracking-tight",
      "leading-8",
      "text-rosy_brown-200/60",
    ]),
    default: classNames([
      "text-xl",
      "leading-8",
      "tracking-loose",
      "text-rosy_brown-200/60",
    ]),
    large: classNames([
      "text-2xl",
      "tracking-tight",
      "leading-relaxed",
      "text-rosy_brown-200/80",
    ]),
  },
  title: classNames([
    "mt-3",
    "mb-8",
    "text-4xl",
    "font-bold",
    "tracking-tight",
    "sm:text-6xl",
  ]),
};
