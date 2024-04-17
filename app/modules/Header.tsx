import {useState} from "react";
import Navigation from "~/modules/Navigation";
import MobileMenu from "~/modules/MobileMenu/MobileMenu";

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
