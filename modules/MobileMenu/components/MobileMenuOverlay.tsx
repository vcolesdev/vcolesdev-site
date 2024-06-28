import useAnimateVariants from "@/modules/MobileMenu/hooks/useAnimateVariants";
import { motion } from "framer-motion";

import { overlayVariants } from "../api";
import styles from "../styles.module";
import type { MobileMenuOverlay } from "../types";

/**
 * Mobile Menu Overlay
 * @component MobileMenuOverlay
 * @param isActive
 * @param onHideMobileMenu
 * @param activeClass
 */
export default function MobileMenuOverlay({ isActive, onHideMobileMenu, activeClass }: MobileMenuOverlay) {
  const animateVariants = useAnimateVariants(isActive);

  return (
    <motion.div
      animate={animateVariants}
      className={`${styles.dialog.overlay} ${activeClass}`}
      exit="hidden"
      id="mobileMenuOverlay"
      initial="hidden"
      onClick={onHideMobileMenu}
      variants={overlayVariants}
    />
  );
}
