import classNames from "classnames";
import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const CONTROL = [
  "group/imageCard",
  "cursor-pointer",
  "group",
  "relative",
  "flex",
  "rounded-[40px]",
  "border-8",
  "border-transparent",
  "focus:border-8",
  "focus:border-melon-500",
  "dark:focus:border-charcoal-800",
];

const IMAGE_MEDIA = ["h-auto", "max-w-full", "overflow-hidden", "duration-300", "opacity-90"];

const OVERLAY = [
  "absolute",
  "inset-0",
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "rounded-[32px]",
  "bg-melon-400/90",
  "bg-opacity-100",
  "transition",
  "active:bg-melon-400",
];

const OVERLAY_SPAN = ["text-white"];

styles.control = classNames(CONTROL);
styles.imageMedia = classNames(IMAGE_MEDIA);

styles.overlay = {
  styles: classNames(OVERLAY),
  span: classNames(OVERLAY_SPAN),
};

export default styles;
