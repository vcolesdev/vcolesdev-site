import classNames from "classnames";

const styles = {
  themeSelect: {
    container: classNames([
      "flex",
      "items-center",
      "justify-between",
      "p-1",
      "rounded-xl",
      "bg-melon-600",
      "dark:bg-charcoal-500",
    ]),
    button: classNames([
      "inline-block",
      "rounded-lg",
      "py-2",
      "px-2.5",
      "hover:bg-melon-600",
      "active:bg-melon-500",
      "dark:hover:bg-charcoal-400",
      "dark:active:bg-charcoal-300",
      "dark:text-charcoal-900",
    ]),
  },
};

export default styles;
