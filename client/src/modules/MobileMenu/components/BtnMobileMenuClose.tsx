import styles from "@/modules/MobileMenu/styles.module";
import type { MobileMenuClose } from "@/modules/MobileMenu/types";
import { motion } from "framer-motion";

/**
 * Button Mobile Menu Close
 * @component BtnMobileMenuClose
 * @param P {MobileMenuClose}
 */
export default function BtnMobileMenuClose(P: MobileMenuClose) {
  const { icon, onHideMobileMenu, onHoverStart, onHoverEnd, elementRef } = P;
  return (
    <motion.button
      className={styles.dialog.closeButton}
      onClick={onHideMobileMenu}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      ref={elementRef}
    >
      <span>{icon}</span>
      <span className="sr-only">Close Menu</span>
    </motion.button>
  );
}
