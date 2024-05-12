import {tw} from "@/app/api";
import {ButtonStyles} from "@/modules/Controls/Buttons/api";

const layout = [
  "group/button",
  "relative",
  "overflow-hidden",
  "inline-flex",
  "items-center",
  "gap-1.5",
  "ps-4",
  "pe-4",
  "py-4",
];

const element = [
  "rounded-full",
  "border-salmon_pink-400",
  "bg-gradient-to-t",
  "from-melon-400",
  "to-melon-300/60",
  "shadow-none",
  "text-center",
];

const transition = [
  "ease-in-out-cubic",
  "transition-all",
  "duration-200",
  "delay-75",
];

const hover = [
  "hover:bg-salmon_pink-400",
  "hover:border-salmon_pink-400",
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
  "text-white",
  "text-[17px]",
];

const iconLayout = ["z-[10]", "relative"];

const iconElement = ["text-melon-900", "group-active/button:text-white"];

const button: ButtonStyles = {
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

export default button;
