import { useEffect, useRef, useState } from "react";
import useFetchNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import { disableScroll, enableScroll } from "@/api";
import { ACTIVE_CLASS, INACTIVE_CLASS } from "@/modules/MobileMenu/api";
import useToggleBodyScroll from "@/hooks/global/useToggleBodyScroll";

/**
 * Handle Mobile Menu state and actions.
 * @hook useMobileMenu
 */
export default function useMobileMenu() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean | null>(false);
  const navLinks = useFetchNavLinks();

  /**
   * onShowMobileMenu
   * @desc Show mobile menu, set active state to true.
   */
  function onShowMobileMenu() {
    setIsMobileMenuActive(true);
  }

  /**
   * onHideMobileMenu
   * @desc Hide mobile menu, set active state to false.
   */
  function onHideMobileMenu() {
    setIsMobileMenuActive(false);
  }

  /**
   * onToggleMobileMenu
   * @desc Toggle mobile menu, set active state to opposite of current state.
   */
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
