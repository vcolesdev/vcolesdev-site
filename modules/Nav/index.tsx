import * as React from "react";
import styles from "@/modules/Nav/styles.module";
import NavLinks from "./NavLinks";
import BtnToggleMobileMenu from "./BtnToggleMobileMenu";
import useNavLinks from "@/utils/hooks/fetchers/useFetchNavLinks";
import ThemeChanger from "@/modules/ThemeChanger";
import SiteLogo from "@/modules/HomePage/SiteLogo";
import Nav from "@/modules/Nav/Nav";
import NavProvider from "@/modules/Nav/NavProvider";
import {ReactChildren} from "@/utils/types/layout";
import {NavContainerProps, NavigationProps} from "@/utils/types/navigation";

const NavContainer = ({children, ...props}: NavContainerProps) => (
  <NavProvider {...props}>
    {children}
  </NavProvider>
);

const BtnToggleMobileMenuSlot = ({children}: {children: ReactChildren}) => (
  <div className={styles.btnMobileWrapper}>
    {children}
  </div>
);

const NavLogoSlot = ({children}: {children: ReactChildren}) => (
  <div className={styles.logoWrapper}>
    {children}
  </div>
);


const NavContentSlot = ({children}: {children: ReactChildren}) => (
  <div className={styles.nav.content}>
    {children}
  </div>
);

/**
 * Nav module
 * @param handleOpen
 */
export default function Navigation({handleOpen}: NavigationProps) {
  const navigation = useNavLinks();
  return (
    <NavContainer>
      <Nav id="siteNavMain">
        <NavLogoSlot>
          <SiteLogo />
        </NavLogoSlot>
        <BtnToggleMobileMenuSlot>
          <BtnToggleMobileMenu handleClick={handleOpen} textContent="Open main menu" />
        </BtnToggleMobileMenuSlot>
        <NavContentSlot>
          <NavLinks nav={navigation} />
        </NavContentSlot>
        <ThemeChanger />
      </Nav>
    </NavContainer>
  );
}
