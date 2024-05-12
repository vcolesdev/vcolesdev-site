"use client";

import useAnimateDrawPaths from "@/utils/hooks/animations/useAnimateDrawPaths";
import useDrawVariants from "@/utils/hooks/animations/useDrawVariants";
import classNames from "classnames";
import {motion, useAnimate} from "framer-motion";
import {ReactNode, useEffect} from "react";

interface SVGProps {
  children: ReactNode;
  iconStyle: string;
}

export default function SVG({
  children,
  iconStyle = "icon-tabler-brand-github",
}: SVGProps) {
  const [scope, animate] = useAnimate();
  let drawVariants = useDrawVariants();

  const iconClasses = classNames([
    "icon",
    "icon-tabler",
    "icons-tabler-outline",
  ]);

  const onHoverStart = () => useAnimateDrawPaths(scope);

  useEffect(() => {}, [scope, animate]);

  return (
    <motion.svg
      animate="animate"
      className={`${iconClasses} ${iconStyle}`}
      fill="none"
      height={24}
      initial="rest"
      onHoverStart={onHoverStart}
      ref={scope}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
    >
      <motion.path
        d="M0 0h24v24H0z"
        fill="none"
        stroke="none"
        variants={drawVariants}
      />
      {children}
    </motion.svg>
  );
}
