"use client";

import {Slot} from "@/components/Slots";
import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import HeaderProvider from "@/modules/Header/components/HeaderProvider";
import ToggleThemeSelect from "@/modules/Header/components/ToggleThemeSelect";
import SiteLogo from "@/modules/HomePage/SiteLogo";
import BtnShowMobileMenu from "@/modules/MobileMenu/components/BtnShowMobileMenu";
import Navigation from "@/modules/Nav";
import NavLinks from "@/modules/Nav/components/NavLinks";
import styles from "@/modules/Nav/styles.module";
import {MouseEventHandler, useEffect} from "react";

interface HeaderInterface {
  btnMobileMenuId?: string;
  currentTheme?: string;
  id: string;
  onShowMobileMenu?: MouseEventHandler<HTMLButtonElement> | undefined;
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header({
  btnMobileMenuId,
  currentTheme,
  id,
  onShowMobileMenu,
  onToggleLightTheme,
  onToggleDarkTheme,
  onToggleSystemTheme,
}: HeaderInterface) {
  const navigation = useNavLinks();

  useEffect(() => {
    console.log("The current header theme is: ", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <HeaderProvider id={id}>
        {/* Site logo */}
        <Slot styles={styles.logoWrapper}>
          <SiteLogo />
        </Slot>
        {/* Navigation */}
        <Navigation>
          <div className={styles.nav.content}>
            <NavLinks nav={navigation} />
          </div>
          {/* Mobile menu button */}
          <div className={styles.mobileMenuIcon}>
            <BtnShowMobileMenu
              id={btnMobileMenuId}
              onClick={onShowMobileMenu || (() => {})}
            />
          </div>
        </Navigation>
        {/* Theme toggles */}
        <Slot>
          <ToggleThemeSelect
            onToggleLightTheme={onToggleLightTheme}
            onToggleDarkTheme={onToggleDarkTheme}
            onToggleSystemTheme={onToggleSystemTheme}
          />
        </Slot>
      </HeaderProvider>
      {/* Box shadow element */}
    </>
  );
}
