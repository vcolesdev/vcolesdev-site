"use client";

import useButtonVariants from "@/modules/Controls/Buttons/hooks/useButtonVariants";
import { ReactChildren } from "@/utils/types/layout";
import { motion } from "framer-motion";

interface ButtonWrapperProps {
  children: ReactChildren;
  styles: string;
  groupId?: string;
  onClick?: () => void;
  transition?: { duration: number };
}

export default function ButtonWrapper({ ...btn }: ButtonWrapperProps) {
  const btnVariants = useButtonVariants();

  /**
   * There is a peculiar infinite rerender bug when trying to implement the button variants
   * by using state variables and useEffect, despite the seemingly correct dependencies.
   * The bug is not present when using the hook directly in the component.
   */
  if (btn?.styles.includes("outline")) {
    return (
      <motion.button
        className={btn.styles}
        layoutId={btn.groupId || "button"}
        initial="initial"
        onClick={btn.onClick}
        transition={btn.transition || { duration: 0.15 }}
        variants={btnVariants.outline}
        whileHover="animate"
        whileTap="tap"
      >
        {btn.children}
      </motion.button>
    );
  } else {
    return (
      <motion.button
        className={btn.styles}
        layoutId={btn.groupId || "button"}
        initial="initial"
        onClick={btn.onClick}
        transition={btn.transition || { duration: 0.15 }}
        variants={btnVariants.default}
        whileHover="animate"
        whileTap="tap"
      >
        {btn.children}
      </motion.button>
    );
  }
}
