export const NAV_WIDTH = 375;

export const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    },
  },
};

export const dialogVariants = {
  hidden: {
    left: -NAV_WIDTH,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    },
  },
  visible: {
    left: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      delay: 0.3,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

export const listItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};
