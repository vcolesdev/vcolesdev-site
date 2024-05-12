"use client";

import {btnVariants, iconVariants} from "@/modules/Controls/animation";
import {ReactChildren} from "@/utils/types/layout";
import {IconCaretRight} from "@tabler/icons-react";
import {motion} from "framer-motion";

export function ButtonWrapper(props: {
  children: ReactChildren;
  styles: string;
  groupId?: string;
  onClick?: () => void;
  transition?: {duration: number};
}) {
  const btn = props;
  return (
    <motion.button
      className={btn.styles}
      layoutId={btn.groupId || "button"}
      initial="initial"
      onClick={btn.onClick}
      transition={btn.transition || {duration: 0.15}}
      variants={btnVariants}
      whileHover="animate"
      whileTap="tap"
    >
      {btn.children}
    </motion.button>
  );
}

export function ButtonContent({
  ...props
}: {
  children: ReactChildren;
  styles: string;
  groupId?: string;
}) {
  const btn = props;
  return (
    <motion.span layoutId={btn.groupId} className={btn.styles}>
      {btn.children}
    </motion.span>
  );
}

export function ButtonIcon({
  ...props
}: {
  iconStyles: string;
  wrapperStyles: string;
  customIcon?: ReactChildren;
  groupId?: string;
}) {
  const btn = props;
  if (btn.customIcon) {
    return (
      <motion.div
        className={btn.wrapperStyles}
        layoutId={btn.groupId}
        variants={iconVariants}
      >
        {btn.customIcon}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={btn.wrapperStyles}
      layoutId={btn.groupId}
      variants={iconVariants}
    >
      <IconCaretRight className={btn.iconStyles} stroke={2} />
    </motion.div>
  );
}
