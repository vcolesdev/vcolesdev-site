"use client";

import styles from "../styles.module";
import {NavContainerProps} from "@/types/Navigation";
import {motion, useTransform, useScroll} from "framer-motion";

export default function NavContainer({children, id, ...props}: NavContainerProps) {
  const {scrollY} = useScroll();

  const inputRange = [0, 100];
  const bgOutputRange = [
    "rgba(255, 255, 255, 0)",
    "rgba(255, 255, 255, 0.9)"
  ];

  const background = useTransform(scrollY, inputRange, bgOutputRange);
  const padding = useTransform(scrollY, inputRange, ["2rem", "1rem"]);

  return (
    <motion.div
      className="backdrop-blur-lg fixed w-full z-50"
      style={{
        background,
        paddingTop: padding,
        paddingBottom: padding,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <nav
        aria-label="Global"
        className={styles.nav.styles}
        id={id}
        {...props}
      >
        {children}
      </nav>
    </motion.div>
  )
}