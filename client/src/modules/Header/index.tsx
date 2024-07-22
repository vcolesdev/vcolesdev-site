"use client";

import Nav from "@/modules/Nav";
import ToggleThemeSelect from "@/modules/ToggleThemeSelect";
import { useEffect } from "react";

import { HeaderLogo } from "./components";
import HeaderProvider from "./components/HeaderContainer";
import type { Header } from "./types";

const DEFAULT_SHOW_MOBILE_MENU_ID = "btnShowMobileMenu";

/**
 * Header
 * @module Header
 * @P {Header}
 */
export default function Header(P: Header) {
  const {
    currentTheme,
    id,
    onShowMobileMenu,
    onToggleLightTheme,
    onToggleDarkTheme,
    onToggleSystemTheme,
    showMobileMenuId,
  } = P;

  useEffect(() => {}, [currentTheme]);

  return (
    <HeaderProvider id={id}>
      <HeaderLogo />
      <Nav onShowMobileMenu={onShowMobileMenu} showMobileMenuId={showMobileMenuId || DEFAULT_SHOW_MOBILE_MENU_ID} />
      <ToggleThemeSelect
        onToggleLightTheme={onToggleLightTheme}
        onToggleDarkTheme={onToggleDarkTheme}
        onToggleSystemTheme={onToggleSystemTheme}
      />
    </HeaderProvider>
  );
}
