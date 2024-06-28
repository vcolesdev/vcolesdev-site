import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import BtnShowMobileMenu from "@/modules/MobileMenu/components/BtnShowMobileMenu";
import NavContainer from "@/modules/Nav/components/NavContainer";
import NavLinkItems from "@/modules/Nav/components/NavLinkItems";
import styles from "@/modules/Nav/styles.module";

import type { Navigation } from "./types";

const DEFAULT_NAV_ID = "siteNavMain";

/**
 * Nav
 * @module Nav
 * @param children
 * @param navId
 */
export default function Nav({ navId, onShowMobileMenu, showMobileMenuId }: Navigation) {
  const nav = useNavLinks();

  return (
    <NavContainer id={navId || DEFAULT_NAV_ID}>
      <NavLinkItems nav={nav} />
      <div className={styles.mobileMenuIcon}>
        <BtnShowMobileMenu id={showMobileMenuId} onClick={onShowMobileMenu} />
      </div>
    </NavContainer>
  );
}
