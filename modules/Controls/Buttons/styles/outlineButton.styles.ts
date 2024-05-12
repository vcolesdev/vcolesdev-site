import {tw} from "@/app/api";
import {ButtonStyles} from "@/modules/Controls/Buttons/api";

const layout = [
  "group/outlined",
  "inline-flex",
  "items-center",
  "gap-1.5",
  "px-4",
  "py-3",
];

const element = [
  "rounded-full",
  "border-2",
  "border-salmon_pink-400",
  "bg-transparent",
  "text-center",
];

const transition = ["ease-in-out-cubic", "transition-all", "duration-75"];

const hover = ["hover:bg-salmon_pink-400", "hover:border-salmon_pink-400"];

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
  "z-[10]",
  "font-kanit",
  "text-salmon_pink-400",
  "tracking-tight",
  "text-[17px]",
];

const iconLayout = ["z-[10]", "relative"];

const iconElement = ["text-salmon_pink-400"];

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
