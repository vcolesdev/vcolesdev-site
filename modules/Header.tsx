"use client";

import Navigation from "@/modules/Nav";
import MobileMenu from "@/modules/MobileMenu/MobileMenu";
import React, {useState} from "react";

const HeaderProvider = ({children}: {children: React.ReactNode}) => (
  <header>{children}</header>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderProvider>
      <Navigation handleOpen={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        handleClose={() => setMobileMenuOpen(false)}
      />
    </HeaderProvider>
  );
}
