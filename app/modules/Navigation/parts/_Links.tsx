import styles from "~/modules/Navigation/styles.module";
import {NavLink} from "@remix-run/react";
import {NavLinks as NavLinksType} from "~/types/Navigation";

export default function NavLinks({nav}: {nav: NavLinksType}) {
  return (
    nav.map((item) => (
      <NavLink key={item.name} to={item.href} className={styles.nav.link}>
        {item.name}
      </NavLink>
    ))
  );
}