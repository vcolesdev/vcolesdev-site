"use client";

import { tw } from "@/app/api";
import { useSocialIconSVG } from "@/components/SocialIcon/hooks/useSocialIconSVG";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

export interface SVGProps {
  children: ReactNode;
  iconStyle: string;
}

export const iconClasses = tw(["icon", "icon-tabler", "icons-tabler-outline"]);

/**
 * SVG
 * @component SVG
 * @param children
 * @param iconStyle
 */
export default function SVG({ children, iconStyle }: SVGProps) {
  const { animate, scope, setIconClassStr, ...icon } = useSocialIconSVG();

  useEffect(() => {
    setIconClassStr(iconStyle);
  }, [scope, animate, iconStyle]);

  return (
    <motion.svg
      animate="animate"
      className={`${iconClasses} ${iconStyle}`}
      fill="none"
      height={24}
      initial="rest"
      onHoverStart={icon.onHoverStart}
      ref={scope}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
    >
      <motion.path d="M0 0h24v24H0z" fill="none" stroke="none" variants={icon.drawVariants} />
      {children}
    </motion.svg>
  );
}
