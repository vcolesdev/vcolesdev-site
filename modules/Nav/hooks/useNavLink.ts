import { NavLinkItem } from "@/modules/Nav/types";
import { useEffect, useState } from "react";
import styles from "@/modules/Nav/styles.module";

/**
 * useNavLink()
 * @param pathname
 * @param item
 */
export default function useNavLink(pathname: string, item: NavLinkItem) {
  const [activelinkColor, setActiveLinkColor] = useState("");
  const [extraLinkClasses, setExtraLinkClasses] = useState("");

  useEffect(() => {
    // If the pathname matches the href of the current item, set extra link classes.
    if (pathname === item.href) {
      setExtraLinkClasses("active");

      // Set the active link color for the light theme
      // Update to include active link color for dark theme
      setActiveLinkColor(styles.nav.activeLink);
    }
  }, [item, pathname, setActiveLinkColor, setExtraLinkClasses]);

  return {
    activelinkColor,
    extraLinkClasses,
  };
}
