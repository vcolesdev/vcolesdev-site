"use client";

import {btnVariants, iconVariants} from "@/modules/Controls/animation";
import {ReactChildren} from "@/utils/types/layout";
import {IconCaretRight} from "@tabler/icons-react";
import {motion} from "framer-motion";

export function ButtonWrapper({
  ...props
}: {
  children: ReactChildren;
  styles: string;
  groupId?: string;
  onClick?: () => void;
  transition?: {duration: number};
}) {
  const {children, ...p} = props;
  return (
    <motion.button
      className={p.styles}
      layoutId={p.groupId}
      initial="initial"
      onClick={p.onClick}
      transition={p.transition || {duration: 0.15}}
      variants={btnVariants}
      whileHover="animate"
      {...p}
    >
      {children}
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
  const {children, ...p} = props;
  return (
    <motion.span layoutId={p.groupId} className={p.styles} {...p}>
      {props.children}
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
  const {...p} = props;

  if (p.customIcon) {
    return (
      <motion.div
        className={p.wrapperStyles}
        layoutId={p.groupId}
        variants={iconVariants}
        {...p}
      >
        {p.customIcon}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={p.wrapperStyles}
      layoutId={p.groupId}
      variants={iconVariants}
      {...p}
    >
      <IconCaretRight className={p.iconStyles} stroke={2} />
    </motion.div>
  );
}
