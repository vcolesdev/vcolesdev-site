"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import styles from "../styles.module";
import {useEffect, useState} from "react";
import useTheme from "@/hooks/theme/useTheme";

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];

function NavLink({item, pathname}: {item: NavLinkItem; pathname?: string}) {
  const [extraClasses, setExtraClasses] = useState("");

  const {theme} = useTheme();

  useEffect(() => {
    if (pathname === item.href) {
      setExtraClasses(styles.nav.activeLink);
    }
  }, [item.href, pathname, setExtraClasses, theme]);

  return (
    <motion.div className={styles.nav.item + " " + extraClasses}>
      <Link
        href={item.href}
        className={styles.nav.link}
      >
        {item.name}
      </Link>
    </motion.div>
  );
}

function NavLinks({nav}: {nav: NavLinks}) {
  const currentPath = usePathname();

  return nav.map((item: NavLinkItem) => (
    <NavLink key={item.name} item={item} pathname={currentPath} />
  ));
}

export default NavLinks;
