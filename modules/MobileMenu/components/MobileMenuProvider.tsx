import { NAV_WIDTH, providerVariants } from "@/modules/MobileMenu/api";
import useAnimateVariants from "@/modules/MobileMenu/hooks/useAnimateVariants";
import type { MobileMenuProvider } from "@/modules/MobileMenu/types";
import { motion } from "framer-motion";

import styles from "../styles.module";

/**
 * MobileMenuProvider component
 * @param activeClass
 * @param children
 * @param isActive
 * @param maxWidth
 * @param providerId
 */
export default function MobileMenuProvider({
  activeClass,
  children,
  isActive,
  maxWidth = NAV_WIDTH,
  providerId = "siteMobileMenuDialog",
}: MobileMenuProvider) {
  const animateVariants = useAnimateVariants(isActive);

  return (
    <motion.aside
      animate={animateVariants}
      className={styles.dialog.element + " " + activeClass}
      id={providerId}
      exit="hidden"
      initial="hidden"
      style={{ maxWidth: maxWidth }}
      variants={providerVariants}
    >
      {children}
    </motion.aside>
  );
}
