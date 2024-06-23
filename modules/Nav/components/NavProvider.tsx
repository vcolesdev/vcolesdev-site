import type { NavProvider } from "@/modules/Nav/types";

import styles from "../styles.module";

/**
 * NavProvider component
 * @param children
 * @param id
 * @param props
 * @constructor
 */
export default function NavProvider({ children, id, ...props }: NavProvider) {
  return (
    <nav className={styles.nav.styles} aria-label="Global" id={id} {...props}>
      {children}
    </nav>
  );
}
