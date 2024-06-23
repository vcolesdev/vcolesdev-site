"use client";

import Nav from "@/modules/Nav";
import ToggleThemeSelect from "@/modules/ToggleThemeSelect";
import { useEffect } from "react";

import { HeaderLogo } from "./components";
import HeaderProvider from "./components/HeaderProvider";
import type { Header } from "./types";

/**
 * Header
 * @module Header
 * @param currentTheme
 * @param id
 * @param onShowMobileMenu
 * @param onToggleLightTheme
 * @param onToggleDarkTheme
 * @param onToggleSystemTheme
 * @param showMobileMenuId
 */
export default function Header({
  currentTheme,
  id,
  onShowMobileMenu,
  onToggleLightTheme,
  onToggleDarkTheme,
  onToggleSystemTheme,
  showMobileMenuId,
}: Header) {
  useEffect(() => {}, [currentTheme]);

  return (
    <HeaderProvider id={id}>
      <HeaderLogo />
      <Nav onShowMobileMenu={onShowMobileMenu} showMobileMenuId={showMobileMenuId || "btnShowMobileMenu"} />
      <ToggleThemeSelect
        onToggleLightTheme={onToggleLightTheme}
        onToggleDarkTheme={onToggleDarkTheme}
        onToggleSystemTheme={onToggleSystemTheme}
      />
    </HeaderProvider>
  );
}
