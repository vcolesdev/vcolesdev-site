"use client";

import { tw } from "@/app/api";
import useAnimateDrawPaths from "@/hooks/animations/useAnimateDrawPaths";
import useDrawVariants from "@/hooks/animations/useDrawVariants";
import { motion, useAnimate } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const defaultIconStyle = "icon-tabler-brand-github";

export interface SVGProps {
  children: ReactNode;
  iconStyle: string;
}

export const iconClasses = tw(["icon", "icon-tabler", "icons-tabler-outline"]);

export function useSocialIconSVG() {
  let drawVariants = useDrawVariants();
  const [iconClassStr, setIconClassStr] = useState<string>(defaultIconStyle);
  const [scope, animate] = useAnimate();

  return {
    animate: animate,
    drawVariants: drawVariants,
    iconClassStr: iconClassStr,
    scope: scope,
    setIconClassStr: setIconClassStr,
    onHoverStart: useAnimateDrawPaths(scope),
  };
}

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
