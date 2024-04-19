import styles from "@/modules/Navigation/styles.module";
import Link  from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.logoText}>
        Vanessa Coles
      </span>
    </Link>
  )
}