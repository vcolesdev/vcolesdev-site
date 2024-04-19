"use client";

import styles from "../styles.module";
import Link from "next/link";
import {useState, startTransition} from "react";
import {NavLinks as NavLinksType} from "@/types/Navigation";

export default function NavLinks({nav}: {nav: NavLinksType}) {
  const [selectedItem, setSelectedItem] = useState(nav[0]);

  return nav.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={styles.nav.link}
      onClick={() => startTransition(() => setSelectedItem(item))}
    >
      {item.name}
    </Link>
  ));
}