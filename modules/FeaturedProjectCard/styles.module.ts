import {tw} from "@/app/api";
import {FeaturedProjectCardStyles} from "@/modules/FeaturedProjectCard/api";

const linksContainer = ["mt-4", "inline-flex", "items-center", "gap-x-1"];

const linksSpan = [
  "text-base",
  "font-medium",
  "text-rosy_brown-300",
  "group-hover:font-semiibold",
  "dark:text-rosy_brown-800",
  "dark:group-hover:text-melon-600",
];

const linksSvg = [
  "mt-[1px]",
  "size-4",
  "flex-shrink-0",
  "transition",
  "ease-in-out",
  "group-hover:translate-x-1",
];

const projectStyles = [
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
  "dark:bg-charcoal-300",
];

const projectTitle = [
  "mt-1.5",
  "transition",
  "ease-in-out",
  "text-xl",
  "text-rosy_brown-300",
  "font-semibold",
  "dark:text-rosy_brown-800",
  "dark:group-hover:text-melon-600",
];

const projectDescription = [
  "mt-2",
  "line-clamp-3",
  "text-base/relaxed",
  "text-rosy_brown-200/80",
  "opacity-80",
  "dark:text-rosy_brown-800",
  "dark:group-hover:text-white/80",
];

export const cardStyles: FeaturedProjectCardStyles = {
  links: {
    container: tw(linksContainer),
    span: tw(linksSpan),
    svg: tw(linksSvg),
  },
  project: {
    styles: tw(projectStyles),
    title: tw(projectTitle),
    description: tw(projectDescription),
  },
};
