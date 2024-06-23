"use client";

import useFetchNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import useToggleBodyScroll from "@/hooks/global/useToggleBodyScroll";
import { ACTIVE_CLASS, INACTIVE_CLASS } from "@/modules/MobileMenu/api";
import useAnimateCloseBtn from "@/modules/MobileMenu/hooks/useAnimateCloseBtn";
import { IconSquareX } from "@tabler/icons-react";
import { useEffect } from "react";

import { MobileMenuContent, MobileMenuList, MobileMenuTitle } from "./components";
import BtnMobileMenuClose from "./components/BtnMobileMenuClose";
import MobileMenuListItems from "./components/MobileMenuListItems";
import MobileMenuOverlay from "./components/MobileMenuOverlay";
import MobileMenuProvider from "./components/MobileMenuProvider";
import useMobileMenu from "./hooks/useMobileMenu";
import type { MobileMenu } from "./types";

/**
 * MobileMenu
 * @module MobileMenu
 * @param isActive
 * @param menuId
 * @param onHideMobileMenu
 */
export default function MobileMenu({ isActive, menuId, onHideMobileMenu }: MobileMenu) {
  const navLinks = useFetchNavLinks();
  const { scope, onHoverEnd, onHoverStart } = useAnimateCloseBtn();
  const bodyScroll = useToggleBodyScroll(isActive);

  const handleActiveClass = () => (isActive ? ACTIVE_CLASS : INACTIVE_CLASS);

  useEffect(() => {}, [bodyScroll]);

  return (
    <>
      <MobileMenuOverlay activeClass={handleActiveClass()} isActive={isActive} onHideMobileMenu={onHideMobileMenu} />
      {/* Mobile menu */}
      <MobileMenuProvider activeClass={handleActiveClass()} isActive={isActive}>
        {/* Mobile menu title */}
        <MobileMenuTitle title="Vanessa Coles" />
        <MobileMenuContent>
          {/* Mobile menu list */}
          <MobileMenuList menuId={menuId}>
            <MobileMenuListItems items={navLinks} />
          </MobileMenuList>
          {/* Close button */}
          <BtnMobileMenuClose
            icon={<IconSquareX stroke={1.5} size={36} />}
            onHideMobileMenu={onHideMobileMenu}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            elementRef={scope}
          />
        </MobileMenuContent>
      </MobileMenuProvider>
    </>
  );
}
