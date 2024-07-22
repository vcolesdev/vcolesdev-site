import { NavLinkItem } from "@/modules/Nav/types";
import { useEffect, useState } from "react";
import styles from "@/modules/Nav/styles.module";

/**
 * useNavLink()
 * @param pathname
 * @param item
 */
export default function useNavLink(pathname: string, item: NavLinkItem) {
  const [activeLinkColor, setActiveLinkColor] = useState("");
  const [extraLinkClasses, setExtraLinkClasses] = useState("");

  /**
   * setActiveLinkColor()
   * @param color
   * @todo Set the active link color for the light theme
   * @todo Update to include active link color for dark theme
   */
  function setActiveLink() {
    setExtraLinkClasses("active");
    setActiveLinkColor(styles.nav.activeLink);
  }

  useEffect(() => {
    // If the pathname matches the href of the current item, set extra link classes.
    if (pathname === item.href) {
      setActiveLink();
    }
  }, [item, pathname, setActiveLinkColor, setExtraLinkClasses]);

  return {
    activeLinkColor,
    extraLinkClasses,
  };
}
