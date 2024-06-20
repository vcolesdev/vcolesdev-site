"use client";

import {useState} from "react";

export default function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    handleOpenMobileMenu,
    handleCloseMobileMenu,
    handleToggleMobileMenu,
  };
}
