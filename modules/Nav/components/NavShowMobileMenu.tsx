import BtnShowMobileMenu from "@/modules/MobileMenu/components/BtnShowMobileMenu";
import type { NavShowMobileMenu } from "@/modules/Nav/types";

import styles from "../styles.module";

/**
 * NavShowMobileMenu component
 * @param id
 * @param onShowMobileMenu
 */
export default function NavShowMobileMenu({ id, onShowMobileMenu }: NavShowMobileMenu) {
  return (
    <div className={styles.mobileMenuIcon}>
      <BtnShowMobileMenu id={id} onClick={onShowMobileMenu} />
    </div>
  );
}
