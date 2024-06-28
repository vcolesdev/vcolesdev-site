import styles from "../styles.module";
import type { NavContainer } from "../types";

/**
 * Nav Container
 * @component NavContainer
 * @param children
 * @param id
 * @param props
 */
export default function NavContainer({ children, id, ...props }: NavContainer) {
  return (
    <nav className={styles.nav.styles} aria-label="Global" id={id} {...props}>
      {children}
    </nav>
  );
}
