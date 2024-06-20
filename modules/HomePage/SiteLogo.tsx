"use client";

import styles from "@/modules/Nav/styles.module";
import Link from "next/link";

const SiteLogo = () => (
  <Link href="/" className={styles.logo}>
    <span className={styles.logoText}>Vanessa Coles</span>
  </Link>
);

export default SiteLogo;
