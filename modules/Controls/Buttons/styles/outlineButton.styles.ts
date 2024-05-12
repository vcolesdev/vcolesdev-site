import {tw} from "@/app/api";
import {ButtonStyles} from "@/modules/Controls/Buttons/api";

const layout = [
  "group/outlined",
  "inline-flex",
  "items-center",
  "relative",
  "gap-1.5",
  "px-4",
  "py-3",
];

const element = [
  "rounded-full",
  "border-2",
  "border-salmon_pink-400",
  "bg-transparent",
  "relative",
  "text-center",
];

const transition = [
  "ease-in-out-cubic",
  "transition-all",
  "duration-200",
];

const hover = [
  "hover:bg-gradient-to-b",
  "hover:from-melon-300/80",
  "hover:to-salmon_pink-400/90",
];

const focus = [
  "focus:shadow-none",
  "focus:outline-none",
  "focus:ring-4",
  "focus:ring-melon-600",
];

const text = [
  "relative",
  "w-full",
  "h-full",
  "inline-block",
  "relative",
  "left-[3px]",
  "z-[10]",
  "font-kanit",
  "font-medium",
  "text-salmon_pink-400",
  "tracking-tight",
  "text-[17px]",
  "group-hover/outlined:text-white",
];

const iconLayout = ["z-[10]", "relative"];

const iconElement = ["text-salmon_pink-400", "group-hover/outlined:text-white"];

const outlineButton: ButtonStyles = {
  layout: tw(layout),
  element: tw(element),
  transition: tw(transition),
  states: {
    hover: tw(hover),
    focus: tw(focus),
  },
  text: tw(text),
  icon: {
    layout: tw(iconLayout),
    element: tw(iconElement),
  },
};

export default outlineButton;
