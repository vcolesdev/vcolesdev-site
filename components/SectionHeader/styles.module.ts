import classNames from "classnames";

export const styles = {
  header: classNames(["mx-auto", "max-w-full", "px-6", "lg:px-8", "lg:max-w-7xl"]),
  content: classNames(["mx-auto", "max-w-2xl", "lg:mx-0"]),
  eyebrow: classNames([
    "inline-block",
    "ms-0.5",
    "mb-2",
    "text-[0.975rem]",
    "uppercase",
    "tracking-loose",
    "font-bold",
    "leading-7",
    "text-rosy_brown-300",
    "dark:text-charcoal-700",
  ]),
  description: {
    styles: classNames(["mb-6", "mt-6", "tracking-tight", "text-rosy_brown-200/60", "dark:text-charcoal-800"]),
    default: classNames(["text-xl", "leading-8", "tracking-loose", "text-rosy_brown-200/60", "dark:text-charcoal-800"]),
    large: classNames([
      "text-xl",
      "leading-8",
      "tracking-tight",
      "text-rosy_brown-200/80",
      "dark:text-charcoal-800",
      "md:text-2xl",
      "md:leading-relaxed",
    ]),
  },
  title: classNames([
    "mt-3",
    "mb-8",
    "text-4xl",
    "font-bold",
    "tracking-tight",
    "sm:text-6xl",
    "dark:text-charcoal-900",
  ]),
};
