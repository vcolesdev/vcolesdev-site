import NavLinks from "@/modules/Nav/components/NavLinks";
import styles from "@/modules/Nav/styles.module";
import type { NavLinkItem } from "@/modules/Nav/types";

/**
 * Nav Link Items
 * @component NavLinkItems
 * @param nav
 */
export default function NavLinkItems({ nav }: { nav: NavLinkItem[] }) {
  return (
    <div className={styles.nav.content}>
      <NavLinks nav={nav} />
    </div>
  );
}
