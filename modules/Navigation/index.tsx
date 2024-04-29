import LogoSlot from "./slots/LogoSlot";
import BtnMobileSlot from "./slots/BtnMobileSlot";
import NavLinks from "./parts/_Links";
import NavContentSlot from "./slots/NavContentSlot";
import NavContainer from "./parts/_Container";
import BtnMobile from "./parts/BtnMobile";
import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import ThemeChanger from "@/modules/ThemeChanger";
import SiteLogo from "@/modules/Navigation/parts/SiteLogo";
import {NavigationProps} from "@/types/Navigation";

/**
 * Navigation module
 * @param handleOpen
 */
export default function Navigation({handleOpen}: NavigationProps) {
  const navigation = useNavLinks();

  return (
    <NavContainer id="siteNavMain">
      <LogoSlot>
        <SiteLogo />
      </LogoSlot>
      <BtnMobileSlot>
        <BtnMobile handleClick={handleOpen} textContent="Open main menu" />
      </BtnMobileSlot>
      <NavContentSlot>
        <NavLinks nav={navigation} />
      </NavContentSlot>
      <ThemeChanger />
    </NavContainer>
  );
}
