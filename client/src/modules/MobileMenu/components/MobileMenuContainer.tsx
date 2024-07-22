import { NAV_WIDTH, providerVariants } from "@/modules/MobileMenu/api";
import useAnimateVariants from "@/modules/MobileMenu/hooks/useAnimateVariants";
import type { MobileMenuContainer } from "@/modules/MobileMenu/types";
import { motion } from "framer-motion";

import styles from "../styles.module";

const DEFAULT_CONTAINER_ID = "siteMobileMenuDialog"; // @todo update class name to match HTML element

/**
 * Mobile Menu Container
 * @component MobileMenuContainer
 * @param P {MobileMenuContainer}
 */
export default function MobileMenuContainer(P: MobileMenuContainer) {
  const { activeClass, children, isActive, maxWidth = NAV_WIDTH, containerId = DEFAULT_CONTAINER_ID } = P;
  const animateVariants = useAnimateVariants(isActive);

  return (
    <motion.aside
      animate={animateVariants}
      className={styles.dialog.element + " " + activeClass}
      id={containerId}
      exit="hidden"
      initial="hidden"
      style={{ maxWidth: maxWidth }}
      variants={providerVariants}
    >
      {children}
    </motion.aside>
  );
}
