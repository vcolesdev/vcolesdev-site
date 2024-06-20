import {ReactNode} from "react";
import styles from "../styles.module";

export interface NavWrapperProps {
  children: ReactNode;
  id?: string;
  theme?: string;
}

export default function Nav({children, id, ...props}: NavWrapperProps) {
  return (
    <nav className={styles.nav.styles} aria-label="Global" id={id} {...props}>
      {children}
    </nav>
  );
}
