import classNames from "classnames";

const styles = {
  banner: {
    styles: classNames(["inline-block", "bg-melon-700", "rounded-full", "dark:bg-charcoal-300"]),
    contentWrapper: classNames(["mx-auto", "flex", "items-center", "justify-center", "px-5"]),
    content: classNames(["flex", "gap-4", "px-3", "py-4"]),
    icon: classNames(["text-melon-300/70", "inline-block"]),
  },
  textContent: {
    styles: classNames(["text-[16px]", "tracking-[0.01em]", "text-melon-200", "text-center", "dark:text-charcoal-800"]),
    span: classNames(["font-medium", "block"]),
  },
  btnDismiss: {
    styles: classNames(["relative"]),
    icon: classNames(["text-melon-300"]),
  },
};

export default styles;
