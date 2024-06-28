import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const CONTAINER = classNames(["px-6", "py-24", "sm:py-32", "lg:px-8"]);
const SLOT = classNames(["flex", "mt-12", "justify-center"]);
const SLOT_BOTTOM = classNames(["flex", "mt-12", "justify-center"]);
const SLOT_TOP = classNames(["flex", "mt-8", "justify-center"]);
const TITLE = classNames(["mt-2", "text-4xl", "font-bold", "tracking-tight", "sm:text-6xl", "dark:text-charcoal-900"]);
const TEXT_STYLES = classNames(["mt-6", "text-xl", "leading-8", "text-rosy_brown-200/70", "dark:text-charcoal-700/90"]);
const TEXT_CONTENT = classNames(["mx-auto", "max-w-2xl", "text-center"]);
const IMAGE_STYLES = classNames(["rounded-md", "shadow-2xl", "ring-1", "ring-gray-900/10"]);
const IMAGE_CONTAINER = classNames(["mt-16", "flow-root", "sm:mt-24"]);
const IMAGE_CONTENT = classNames([
  "-m-2",
  "rounded-xl",
  "bg-gray-900/5",
  "p-2",
  "ring-1",
  "ring-inset",
  "ring-gray-900/10",
  "lg:-m-4",
  "lg:rounded-2xl",
  "lg:p-4",
]);

styles.container = classNames(CONTAINER);
styles.slot = classNames(SLOT);
styles.slotBottom = classNames(SLOT_BOTTOM);
styles.slotTop = classNames(SLOT_TOP);
styles.title = classNames(TITLE);
styles.text = {
  styles: classNames(TEXT_STYLES),
  content: classNames(TEXT_CONTENT),
};
styles.image = {
  styles: classNames(IMAGE_STYLES),
  container: classNames(IMAGE_CONTAINER),
  content: classNames(IMAGE_CONTENT),
};

export default styles;
