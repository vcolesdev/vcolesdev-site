import SiteLogo from "@/modules/HomePage/SiteLogo";
import styles from "@/modules/Nav/styles.module";

/**
 * HeaderLogo
 */
export function HeaderLogo() {
  return (
    <div className={styles.logoWrapper}>
      <SiteLogo />
    </div>
  );
}
