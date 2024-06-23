import { SplitCardStyles } from "@/modules/SplitCard/types";
import classNames from "classnames";

export const splitCardStyles: SplitCardStyles = {
  section: {
    styles: classNames([
      "group/element",
      "bg-melon-900",
      "mb-12",
      "shadow-2xl",
      "shadow-melon-400/20",
      "lg:mb-24",
      "overflow-hidden",
      "dark:bg-charcoal-300",
      "dark:shadow-charcoal-100/20",
    ]),
    content: classNames(["grid", "md:grid-cols-1", "md:gap-x-12", "lg:grid-cols-2", "lg:gap-y-12"]),
    textContent: classNames(["flex", "items-center"]),
    header: {
      content: classNames(["py-12", "lg:py-24"]),
    },
  },
  image: {
    styles: classNames([
      "h-full",
      "w-full",
      "object-cover",
      "scale-105",
      "transition-all",
      "duration-500",
      "lg:blur-md",
      "lg:group-hover/element:scale-100",
      "lg:group-hover/element:blur-none",
    ]),
    wrapper: classNames(["overflow-hidden"]),
  },
};
