import { DEFAULT_MENU_ID, NAV_WIDTH } from "@/modules/MobileMenu/api";

import styles from "../styles.module";
import type { MobileMenuContent, MobileMenuList } from "../types";

/**
 * MobileMenuTitle component
 * @param title
 */
export function MobileMenuTitle({ title }: { title: string }) {
  return (
    <div className={styles.dialog.top}>
      <h2 className={styles.dialog.title}>{title}</h2>
    </div>
  );
}

/**
 * MobileMenuContent component
 * @param children
 * @param maxWidth
 */
export function MobileMenuContent({ children, maxWidth = NAV_WIDTH }: MobileMenuContent) {
  return (
    <div className={styles.dialog.content} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
}

/**
 * MobileMenuList component
 * @param children
 * @param menuId
 */
export function MobileMenuList({ children, menuId = DEFAULT_MENU_ID }: MobileMenuList) {
  return <ul className={styles.menu.element}>{children}</ul>;
}
