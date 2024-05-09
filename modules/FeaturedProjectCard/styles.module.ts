import {FeaturedProjectCardStyles} from "@/modules/FeaturedProjectCard/api";
import classNames from "classnames";

export const cardStyles: FeaturedProjectCardStyles = {
  links: {
    container: classNames(["mt-4", "inline-flex", "items-center", "gap-x-1"]),
    span: classNames([
      "text-base",
      "font-medium",
      "text-rosy_brown-300",
      "group-hover:font-semiibold",
    ]),
    svg: classNames([
      "mt-[1px]",
      "size-4",
      "flex-shrink-0",
      "transition",
      "ease-in-out",
      "group-hover:translate-x-1",
    ]),
  },
  project: {
    styles: classNames([
      "group",
      "flex",
      "flex-col",
      "justify-between",
      "w-full",
      "rounded-3xl",
      "bg-melon-900",
      "p-4",
      "transition",
      "sm:p-6",
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
      "text-base/relaxed",
      "text-rosy_brown-200/80",
      "opacity-80",
    ]),
  },
};
