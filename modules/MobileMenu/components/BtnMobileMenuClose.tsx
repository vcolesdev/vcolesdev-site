import styles from "@/modules/MobileMenu/styles.module";
import type { MobileMenuClose } from "@/modules/MobileMenu/types";
import { motion } from "framer-motion";

/**
 * MobileMenuClose component
 * @param icon
 * @param onHideMobileMenu
 * @param onHoverStart
 * @param onHoverEnd
 * @param elementRef
 */
export default function BtnMobileMenuClose({
  elementRef,
  icon,
  onHideMobileMenu,
  onHoverStart,
  onHoverEnd,
}: MobileMenuClose) {
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
