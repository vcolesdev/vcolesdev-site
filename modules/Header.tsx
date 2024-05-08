"use client";

import MobileMenu from "@/modules/MobileMenu/MobileMenu";
import Navigation from "@/modules/Nav";
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
