export const iconVariants = {
  initial: {
    transform: "translateX(0)",
    paddingRight: 0,
  },
  animate: {
    transform: "translateX(4px)",
    paddingRight: "4px",
  },
};

export const btnVariants = {
  initial: {
    boxShadow: "none",
    scale: 1,
    top: 0,
  },
  animate: {
    boxShadow: "0 20px 25px -5px rgba(215, 60, 29, 0.3), 0 8px 10px -6px rgba(215, 60, 29, 0.3)",
    top: "-1px",
  },
  tap: {
    boxShadow: "none",
    top: "1px",
    scale: 0.97,
  },
};
