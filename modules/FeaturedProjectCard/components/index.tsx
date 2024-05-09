"use client";

import {
  activeAnimation,
  hoverAnimation,
  transitionAnimation,
} from "@/modules/FeaturedProjectCard/animation";
import {cardStyles as styles} from "@/modules/FeaturedProjectCard/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {motion} from "framer-motion";
import Link from "next/link";

export function ProjectCardContainer({
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

export function ProjectCardContent({children}: {children: ReactChildren}) {
  return <div>{children}</div>;
}

export function ProjectCardFooter({children}: {children: ReactChildren}) {
  return <footer>{children}</footer>;
}

export function ProjectCardProvider({
  children,
  url,
}: {
  children: ReactChildren;
  url: string;
}) {
  return (
    <Link className="motion-project-card relative flex" href={url}>
      {children}
    </Link>
  );
}
