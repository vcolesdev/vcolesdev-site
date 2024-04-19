import classNames from "classnames";

const styles = {
  banner: {
    styles: classNames([
      "w-full",
      "bg-melon-900",
    ]),
    contentWrapper: classNames([
      "mx-auto",
      "flex",
      "items-center",
      "justify-center",
    ]),
    content: classNames([
      "flex",
      "gap-4",
      "px-5",
      "py-5",
    ]),
    icon: classNames([
      "text-melon-300",
    ]),
  },
  textContent: {
    styles: classNames([
      "font-kanit",
      "text-[18px]",
      "tracking-tight",
      "text-rosy_brown-300",
    ]),
    span: classNames([
      "font-medium",
    ])
  },
  btnDismiss: {
    styles: classNames([
      "relative",
    ]),
    icon: classNames([
      "text-melon-300",
    ]),
  }
};

export default styles;