"use client";

import Link from "next/link";
import styles from "../styles.module";

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];

const NavLink = ({item}: {item: NavLinkItem}) => (
  <Link href={item.href} className={styles.nav.link}>
    {item.name}
  </Link>
);

const NavLinks = ({nav}: {nav: NavLinks}) =>
  nav.map((item: NavLinkItem) => <NavLink key={item.name} item={item} />);

export default NavLinks;
