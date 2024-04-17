import styles from "~/modules/Navigation/styles.module";
import {NavLink} from "@remix-run/react";

export default function SiteLogo() {
  return (
    <NavLink to="/" className={styles.logo}>
      <span className={styles.logoText}>
        Vanessa Coles
      </span>
    </NavLink>
  )
}