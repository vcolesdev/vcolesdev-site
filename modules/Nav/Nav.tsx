"use client";

import styles from "@/modules/Nav/styles.module";
import {NavContainerProps} from "@/utils/types/navigation";
import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {useEffect} from "react";

export default function Nav({children, id, ...props}: NavContainerProps) {
  const {scrollY, scrollYProgress} = useScroll();

  const input = [0, 100];
  const output = ["80rem", "100rem"];

  const [scope, animate] = useAnimate();

  const navSpring = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const maxWidth = useTransform(scrollY, input, output);

  useEffect(() => {}, [scrollY, maxWidth, scope]);

  return (
    <motion.nav
      aria-label="Global"
      className={styles.nav.styles}
      id={id}
      ref={scope}
      style={{maxWidth: maxWidth}}
      transition={navSpring}
    >
      {children}
    </motion.nav>
  );
}
