"use client";

import useFetchNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import useToggleBodyScroll from "@/hooks/global/useToggleBodyScroll";
import { IconSquareX } from "@tabler/icons-react";
import { useEffect } from "react";

import { ACTIVE_CLASS, INACTIVE_CLASS } from "./api";
import { MobileMenuContent, MobileMenuList, MobileMenuTitle } from "./components";
import BtnMobileMenuClose from "./components/BtnMobileMenuClose";
import MobileMenuContainer from "./components/MobileMenuContainer";
import MobileMenuListItems from "./components/MobileMenuListItems";
import MobileMenuOverlay from "./components/MobileMenuOverlay";
import useAnimateCloseBtn from "./hooks/useAnimateCloseBtn";
import type { MobileMenu } from "./types";

/**
 * MobileMenu
 * @module MobileMenu
 * @param isActive
 * @param menuId
 * @param onHideMobileMenu
 */
export default function MobileMenu({ isActive, menuId, onHideMobileMenu }: MobileMenu) {
  const { scope, onHoverEnd, onHoverStart } = useAnimateCloseBtn();
  const activeClass = isActive ? ACTIVE_CLASS : INACTIVE_CLASS;
  const navLinks = useFetchNavLinks();
  const bodyScroll = useToggleBodyScroll(isActive);

  useEffect(() => {}, [bodyScroll]);

  return (
    <>
      <MobileMenuOverlay activeClass={activeClass} isActive={isActive} onHideMobileMenu={onHideMobileMenu} />
      <MobileMenuContainer activeClass={activeClass} isActive={isActive}>
        <MobileMenuTitle title="Vanessa Coles" />
        <MobileMenuContent>
          <MobileMenuList menuId={menuId}>
            <MobileMenuListItems items={navLinks} />
          </MobileMenuList>
          <BtnMobileMenuClose
            icon={<IconSquareX stroke={1.5} size={36} />}
            onHideMobileMenu={onHideMobileMenu}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            elementRef={scope}
          />
        </MobileMenuContent>
      </MobileMenuContainer>
    </>
  );
}
