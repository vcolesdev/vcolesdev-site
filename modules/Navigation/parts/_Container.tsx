"use client";

import styles from "../styles.module";
import classNames from "classnames";
import {NavContainerProps} from "@/types/Navigation";
import {motion, useTransform, useScroll} from "framer-motion";

export default function NavContainer({children, id, ...props}: NavContainerProps) {
  const {scrollY} = useScroll();

  const containerClasses = classNames([
    "backdrop-blur-lg",
    "fixed",
    "w-full",
    "z-50",
  ]);

  const inputRange = [0, 100];
  const bgOutputRange = [
    "#fae0db",
    "#fdf0ed"
  ];

  const background = useTransform(scrollY, inputRange, bgOutputRange);
  const padding = useTransform(scrollY, inputRange, ["2rem", "1rem"]);
  const boxShadow = useTransform(scrollY, inputRange, ["0 0 0 0 rgba(144,40,20,0)", "0px 8px 40px 0px rgba(144,40,20,0.2)"]);

  return (
    <motion.div
      className={containerClasses}
      style={{
        background,
        paddingTop: padding,
        paddingBottom: padding,
        boxShadow,
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