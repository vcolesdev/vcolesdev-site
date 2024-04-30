import classNames from "classnames";

const styles = {
  banner: {
    styles: classNames([
      "inline-block",
      "bg-salmon_pink-800",
      "rounded-full",
    ]),
    contentWrapper: classNames([
      "mx-auto",
      "flex",
      "items-center",
      "justify-center",
      "px-5"
    ]),
    content: classNames([
      "flex",
      "gap-4",
      "px-3",
      "py-4",
    ]),
    icon: classNames([
      "text-salmon_pink-300/70",
      "inline-block"
    ]),
  },
  textContent: {
    styles: classNames([
      "text-[16px]",
      "tracking-tight",
      "text-salmon_pink-200",
      "text-center",
    ]),
    span: classNames([
      "font-medium",
      "block"
    ])
  },
  btnDismiss: {
    styles: classNames([
      "relative",
    ]),
    icon: classNames([
      "text-salmon_pink-300",
    ]),
  }
};

export default styles;