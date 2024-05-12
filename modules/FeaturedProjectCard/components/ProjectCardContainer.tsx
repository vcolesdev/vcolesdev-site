"use client";

import {
  activeAnimation,
  hoverAnimation,
  transitionAnimation,
} from "@/modules/FeaturedProjectCard/animation";
import {cardStyles as styles} from "@/modules/FeaturedProjectCard/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {motion} from "framer-motion";

export default function ProjectCardContainer({
  children,
  ...card
}: {
  children: ReactChildren;
}) {
  return (
    <motion.article
      className={styles.project.styles}
      transition={transitionAnimation}
      whileHover={hoverAnimation}
      whileFocus={activeAnimation}
      whileTap={activeAnimation}
      {...card}
    >
      {children}
    </motion.article>
  );
}
