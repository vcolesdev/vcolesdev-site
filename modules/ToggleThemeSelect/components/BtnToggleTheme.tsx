"use client";

import { motion } from "framer-motion";

import styles from "../styles.module";
import type { BtnToggleTheme } from "../types";

/**
 * BtnToggleTheme
 * @param ariaLabel
 * @param children
 * @param icon
 * @param onClick
 */
export default function BtnToggleTheme({ ariaLabel, icon, onClick }: BtnToggleTheme) {
  return (
    <motion.button aria-label={ariaLabel} className={styles.themeSelect.button} onClick={onClick}>
      {icon}
    </motion.button>
  );
}
