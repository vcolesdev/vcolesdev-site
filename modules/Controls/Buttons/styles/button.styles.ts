import {mergeStyles} from "@/app/api";
import {
  btnElement,
  btnIconLayout,
  btnLayout,
  btnText,
  btnTransition,
} from "./shared.styles";

export const layout = mergeStyles(btnLayout, ["group/button"]);
export const element = mergeStyles(btnElement, [
  "border-salmon_pink-400",
  "bg-gradient-to-t",
  "from-melon-400",
  "to-melon-300/60",
  "shadow-none",
]);
export const text = mergeStyles(btnText, ["text-white"]);
export const iconLayout = btnIconLayout;
export const iconElement = ["text-melon-900", "group-active/button:text-white"];
export const transition = btnTransition;
export const hover = ["hover:border-salmon_pink-400"];
export const focus = [
  "focus:shadow-none",
  "focus:outline-none",
  "focus:ring-4",
  "focus:ring-melon-600",
];
