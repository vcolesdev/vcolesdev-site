export const iconVariants = {
  initial: {
    transform: "translateX(0)",
    paddingRight: 0,
  },
  animate: {
    transform: "translateX(4px)",
    paddingRight: "4px",
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: "spring",
    },
  },
};

export const btnVariants = {
  initial: {
    scale: 1,
    top: 0,
  },
  animate: {
    //scale: 1.03,
    transition: {duration: 0.1, type: "spring"},
  },
  tap: {
    top: "2px",
    transition: {duration: 0.03, type: "spring"},
  },
};
