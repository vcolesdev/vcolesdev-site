"use client";

import { FeaturedProjectIconProps } from "@/utils/types/projects";
import { motion } from "framer-motion";

/**
 * ProjectCardIcon
 * @param props
 */
export default function ProjectCardIcon(props: FeaturedProjectIconProps) {
  return (
    <motion.svg
      className={props.styles}
      xmlns={props.settings.xmlns}
      width={props.settings.width}
      height={props.settings.height}
      viewBox={props.settings.viewBox}
      fill={props.settings.fill}
      stroke={props.settings.stroke}
      strokeWidth={props.settings.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {props.children}
    </motion.svg>
  );
}
