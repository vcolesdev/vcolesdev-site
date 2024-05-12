import {tw} from "@/app/api";
import {ImageCardStyles} from "@/modules/ImageCard/api";

const overlay = [
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

const overlaySpan = ["text-white"];

const control = [
  "cursor-pointer",
  "group",
  "relative",
  "flex",
  "rounded-[40px]",
  "border-8",
  "border-transparent",
  "focus:border-8",
  "focus:border-melon-500",
];

const imageMedia = ["h-auto", "max-w-full", "overflow-hidden"];

const imageCard: ImageCardStyles = {
  overlay: {
    styles: tw(overlay),
    span: tw(overlaySpan),
  },
  control: tw(control),
  imageMedia: tw(imageMedia),
};

export default imageCard;
