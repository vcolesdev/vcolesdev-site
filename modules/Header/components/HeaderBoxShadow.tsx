"use client";

import { motion, useAnimate } from "framer-motion";

import styles from "../styles.module";
import type { HeaderBoxShadow } from "../types";

/**
 * HeaderBoxShadow
 * @param id
 */
export default function HeaderBoxShadow({ id }: HeaderBoxShadow) {
  const [scope] = useAnimate();
  return <motion.div className={styles.boxShadow} id={id} ref={scope} />;
}
