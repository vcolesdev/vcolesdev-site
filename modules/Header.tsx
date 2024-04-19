"use client";

import Navigation from "@/modules/Navigation";
import MobileMenu from "@/modules/MobileMenu/MobileMenu";
import {useState} from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <Navigation handleOpen={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        handleClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
