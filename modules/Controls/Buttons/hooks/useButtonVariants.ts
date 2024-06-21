function getButtonVariants(type: "default" | "outline") {
  const initialValue = {
    boxShadow: "none",
    scale: 1,
    top: 0,
  };

  const animateValue = {
    top: "-1px",
  };

  const tapValue = {
    top: "1px",
    scale: 0.97,
  };

  const defaultVariants = {
    initial: {
      //background: "linear-gradient(to top, #e9755d, rgba(215, 60, 29, 0.6))",
      ...initialValue,
    },
    animate: {
      ...animateValue,
    },
    tap: {...tapValue},
  };

  const outlineVariants = {
    initial: {
      //background: "transparent",
      ...initialValue,
    },
    animate: {
      //backgroundImage: "linear-gradient(to bottom, rgba(233, 117, 93, 0.9), rgba(215, 60, 29, 0.8))",
      ...animateValue,
    },
    tap: {...tapValue},
  };

  if (type === "default") {
    return defaultVariants;
  } else {
    return outlineVariants;
  }
}

export default function useButtonVariants() {
  return {
    default: getButtonVariants("default"),
    outline: getButtonVariants("outline"),
  };
}
