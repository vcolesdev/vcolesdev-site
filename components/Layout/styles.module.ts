import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const CONTAINER = ["container", "mx-auto", "px-4", "sm:px-6", "lg:px-8"];
const CONTAINER_NO_PADDING = ["container", "mx-auto"];
const EXTRA_CLASSES = ["max-w-7xl", "pt-12", "pb-24", "md:py-24", "lg:py-32", "xl:px-0"];

styles.container = {
  styles: classNames(CONTAINER),
  noPadding: classNames(CONTAINER_NO_PADDING),
  extraClasses: classNames(EXTRA_CLASSES),
};

export default styles;
