"use client";

import { useEffect, useRef, useState } from "react";
import useFetchNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import { disableScroll, enableScroll } from "@/app/api";
import { ACTIVE_CLASS, INACTIVE_CLASS } from "@/modules/MobileMenu/api";
import useToggleBodyScroll from "@/hooks/global/useToggleBodyScroll";

/**
 * useMobileMenu()
 */
export default function useMobileMenu() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean | null>(false);
  const navLinks = useFetchNavLinks();

  // Show the mobile menu
  function onShowMobileMenu() {
    setIsMobileMenuActive(true);
  }

  // Hide the mobile menu
  function onHideMobileMenu() {
    setIsMobileMenuActive(false);
  }

  // Toggle the mobile menu
  function onToggleMobileMenu() {
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  return {
    isMobileMenuActive,
    navLinks,
    onHideMobileMenu,
    onShowMobileMenu,
    onToggleMobileMenu,
    setIsMobileMenuActive,
  };
}
