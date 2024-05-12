"use client";

import {ReactChildren} from "@/utils/types/layout";
import {motion} from "framer-motion";

export default function ButtonContent({
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
