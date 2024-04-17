import {NavContainerProps} from "~/types/Navigation";
import styles from "~/modules/Navigation/styles.module";

export default function NavContainer({children, id, ...props}: NavContainerProps) {
  return (
    <nav id={id} className={styles.nav.styles} aria-label="Global" {...props}>
      {children}
    </nav>
  )
}