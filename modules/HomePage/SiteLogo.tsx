"use client";

import styles from "@/modules/Nav/styles.module";
import Link from "next/link";

const SiteLogo = () => (
  <Link href="/" className={styles.logo}>
    <div className={styles.logoText}>
      <span className="inline-block lg:hidden">Vanessa C.</span>
      <span className="hidden lg:inline-block">Vanessa Coles</span>
    </div>
  </Link>
);

export default SiteLogo;
