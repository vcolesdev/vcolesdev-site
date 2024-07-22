import classNames from "classnames";
import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const BANNER_STYLES = ["inline-block", "bg-melon-700", "rounded-full", "dark:bg-charcoal-300"];
const BANNER_CONTENT_WRAPPER = ["mx-auto", "flex", "items-center", "justify-center", "px-5"];
const BANNER_CONTENT = ["flex", "gap-4", "px-3", "py-4"];
const BANNER_ICON = ["text-melon-300/70", "inline-block"];

const TEXT_CONTENT = ["text-[16px]", "tracking-[0.01em]", "text-melon-200", "text-center", "dark:text-charcoal-800"];
const TEXT_CONTENT_SPAN = ["font-medium", "block"];

const BTN_DISMISS = ["relative"];
const BTN_DISMISS_ICON = ["text-melon-300"];

styles.banner = {
  styles: classNames(BANNER_STYLES),
  contentWrapper: classNames(BANNER_CONTENT_WRAPPER),
  content: classNames(BANNER_CONTENT),
  icon: classNames(BANNER_ICON),
};

styles.textContent = {
  styles: classNames(TEXT_CONTENT),
  span: classNames(TEXT_CONTENT_SPAN),
};

styles.btnDismiss = {
  styles: classNames(BTN_DISMISS),
  icon: classNames(BTN_DISMISS_ICON),
};

export default styles;
