import {tw} from "@/app/api";
import {FeaturedProjectCardStyles} from "@/modules/FeaturedProjectCard/api";

const linksContainer = ["mt-4", "inline-flex", "items-center", "gap-x-1"];

const linksSpan = [
  "text-base",
  "font-medium",
  "text-rosy_brown-400",
  "group-hover:text-melon-400",
  "dark:text-charcoal-700",
  "dark:group-hover:text-rose-400",
  "dark:group-hover:font-semibold",
];

const linksSvg = [
  "mt-[1px]",
  "size-4",
  "flex-shrink-0",
  "transition",
  "ease-in-out",
  "group-hover:translate-x-1",
  "group-hover:text-melon-400",
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
  "hover:shadow-2xl",
  "hover:shadow-melon-300/20",
  "dark:bg-charcoal-300",
  "dark:hover:shadow-2xl",
  "dark:hover:shadow-charcoal-100/40",
  "z-2",
];

const projectTitle = [
  "mt-1.5",
  "transition",
  "ease-in-out",
  "text-xl",
  "text-rosy_brown-300",
  "font-semibold",
  "group-hover:text-melon-400",
  "dark:text-charcoal-700",
  "dark:group-hover:text-rose-400",
];

const projectDescription = [
  "mt-2",
  "line-clamp-3",
  "text-base/relaxed",
  "text-rosy_brown-300",
  "opacity-80",
  "dark:text-charcoal-900/80",
  "dark:group-hover:text-white",
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
