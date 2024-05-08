import styles from "@/modules/Nav/styles.module";
import {NavContainerProps} from "@/utils/types/navigation";

const Nav = ({children, id, ...props}: NavContainerProps) => (
  <nav aria-label="Global" className={styles.nav.styles} id={id} {...props}>
    {children}
  </nav>
);

export default Nav;
