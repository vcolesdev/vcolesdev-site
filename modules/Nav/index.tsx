import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import NavLinkItems from "@/modules/Nav/components/NavLinkItems";
import NavProvider from "@/modules/Nav/components/NavProvider";
import NavShowMobileMenu from "@/modules/Nav/components/NavShowMobileMenu";

import type { Navigation } from "./types";

/**
 * Nav
 * @module Nav
 * @param children
 * @param navId
 */
export default function Nav({ navId, onShowMobileMenu, showMobileMenuId }: Navigation) {
  const nav = useNavLinks();

  return (
    <>
      <NavProvider id={navId || "siteNavMain"}>
        <NavLinkItems nav={nav} />
        <NavShowMobileMenu id={showMobileMenuId} onShowMobileMenu={onShowMobileMenu} />
      </NavProvider>
    </>
  );
}
