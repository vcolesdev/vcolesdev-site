"use client";

import {useState} from "react";

export default function useMobileMenu(id: string) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean | null>(
    false
  );

  function onShowMobileMenu() {
    setIsMobileMenuActive(true);
  }

  function onHideMobileMenu() {
    setIsMobileMenuActive(false);
  }

  function onToggleMobileMenu() {
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  return {
    isMobileMenuActive,
    onHideMobileMenu,
    onShowMobileMenu,
    onToggleMobileMenu,
    setIsMobileMenuActive,
  };
}
