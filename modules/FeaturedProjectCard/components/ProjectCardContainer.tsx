"use client";

import { ReactChildren } from "@/utils/types/layout";
import { motion } from "framer-motion";

import { activeAnimation, hoverAnimation, transitionAnimation } from "../animation";
import styles from "../styles.module";

/**
 * Project Card Container
 * @component ProjectCardContainer
 * @param children
 * @param card
 */
export default function ProjectCardContainer({ children, ...card }: { children: ReactChildren }) {
  return (
    <motion.article
      className={styles.project.styles}
      transition={transitionAnimation}
      whileHover={hoverAnimation}
      whileFocus={activeAnimation}
      whileTap={activeAnimation}
      viewport={{ once: true }}
      {...card}
    >
      {children}
    </motion.article>
  );
}
