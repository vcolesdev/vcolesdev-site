"use client";

import {ThemeContext} from "@/context/ThemeContext";
import useOnToggleTheme from "@/hooks/theme/useOnToggleTheme";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import MobileMenu from "@/modules/MobileMenu";
import useMobileMenu from "@/modules/MobileMenu/hooks/useMobileMenu";
import {ReactNode, useContext, useEffect} from "react";

interface ContentInterface {
  children: ReactNode | ReactNode[];
}

export default function Content({children}: ContentInterface) {
  const {onToggleDarkTheme, onToggleLightTheme, onToggleSystemTheme} =
    useOnToggleTheme();

  const {isMobileMenuActive, onShowMobileMenu, onHideMobileMenu} =
    useMobileMenu("mainMobileMenu");

  const {theme} = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <>
      <Header
        id="siteHeaderPage"
        btnMobileMenuId="siteHeaderShowMobileMenu"
        currentTheme={theme}
        onShowMobileMenu={onShowMobileMenu}
        onToggleLightTheme={onToggleLightTheme}
        onToggleDarkTheme={onToggleDarkTheme}
        onToggleSystemTheme={onToggleSystemTheme}
      />
      {/* Fixed mobile menu */}
      <MobileMenu
        onHideMobileMenu={onHideMobileMenu}
        isActive={isMobileMenuActive || false}
        menuId="mainMobileMenu"
      />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
