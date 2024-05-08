"use client";

import {NavLinkItem, NavLinks as NavLinksType} from "@/utils/types/navigation";
import Link from "next/link";
import styles from "./styles.module";

const NavLink = ({item}: {item: NavLinkItem}) => (
  <Link href={item.href} className={styles.nav.link}>
    {item.name}
  </Link>
);

const NavLinks = ({nav}: {nav: NavLinksType}) =>
  nav.map((item: NavLinkItem) => <NavLink key={item.name} item={item} />);

export default NavLinks;
