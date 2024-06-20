import {mergeStyles} from "@/app/api";
import {
  btnElement,
  btnIconLayout,
  btnLayout,
  btnText,
  btnTransition,
} from "./shared.styles";

export const layout = mergeStyles(btnLayout, ["group/outlined"]);
export const element = mergeStyles(btnElement, [
  "border-2",
  "border-melon-400",
  "bg-transparent",
]);
export const text = mergeStyles(btnText, [
  "text-melon-400",
  "group-hover/outlined:text-white",
]);
export const transition = btnTransition;
export const hover = [
  "hover:border-melon-400",
  "hover:bg-gradient-to-b",
  "hover:from-melon-400",
  "hover:to-melon-300",
];
export const focus = [
  "focus:shadow-none",
  "focus:outline-none",
  "focus:ring-4",
  "focus:ring-melon-600",
];
export const iconLayout = btnIconLayout;
export const iconElement = [
  "text-salmon_pink-400",
  "group-hover/outlined:text-white",
];
