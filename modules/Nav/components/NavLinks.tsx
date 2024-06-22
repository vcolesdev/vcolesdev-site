"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "../styles.module";

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];

function NavLink({item, pathname}: {item: NavLinkItem; pathname?: string}) {
  const activeClass = pathname === item.href ? "active" : "";

  return (
    <Link href={item.href} className={styles.nav.link + " " + activeClass}>
      {item.name}
    </Link>
  );
}

function NavLinks({nav}: {nav: NavLinks}) {
  const pathname = usePathname();

  return nav.map((item: NavLinkItem) => (
    <NavLink key={item.name} item={item} pathname={pathname} />
  ));
}

export default NavLinks;
