"use client";

import useFetchNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import {IconSquareX} from "@tabler/icons-react";
import {motion, useAnimate} from "framer-motion";
import {useEffect} from "react";
import {NAV_WIDTH, dialogVariants, overlayVariants} from "./api";
import styles from "./styles.module";

export default function MobileMenu({
  isActive,
  menuId,
  onHideMobileMenu,
}: {
  isActive: boolean;
  menuId: string;
  onHideMobileMenu: any;
}) {
  const ACTIVE_CLASS = "flex";
  const INACTIVE_CLASS = "hidden";

  const [scope] = useAnimate();
  const [closeBtnScope, animateCloseBtn] = useAnimate();
  const navLinks = useFetchNavLinks();

  const activeClass = isActive ? ACTIVE_CLASS : INACTIVE_CLASS;

  useEffect(() => {
    // When the mobile menu is active, set <body> to overflow: hidden.
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive]);

  return (
    <>
      <motion.div
        animate={isActive ? "visible" : "hidden"}
        className={styles.dialog.overlay + " " + activeClass}
        exit="hidden"
        id="mobileMenuOverlay"
        initial="hidden"
        onClick={onHideMobileMenu}
        variants={overlayVariants}
      />
      <motion.div
        animate={isActive ? "visible" : "hidden"}
        className={styles.dialog.element + " " + activeClass}
        exit="hidden"
        initial="hidden"
        ref={scope}
        style={{maxWidth: NAV_WIDTH}}
        variants={dialogVariants}
      >
        {/* Mobile menu title */}
        <div className={styles.dialog.top}>
          <h2 className={styles.dialog.title}>Vanessa Coles</h2>
        </div>
        <div className={styles.dialog.content} style={{maxWidth: NAV_WIDTH}}>
          {/* Mobile menu */}
          <motion.ul className={styles.menu.element} id={menuId}>
            {/* Mobile menu items */}
            {navLinks.map((link, i) => (
              <motion.li className={styles.menu.item} key={link.name}>
                <a className={styles.menu.link} href={link.href}>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          {/* Hide mobile menu */}
          <motion.button
            className={styles.dialog.closeButton}
            onClick={onHideMobileMenu}
            onHoverStart={() => {
              animateCloseBtn(closeBtnScope.current, {
                scale: 1.05,
                rotate: 90,
              });
            }}
            onHoverEnd={() => {
              animateCloseBtn(closeBtnScope.current, {
                scale: 1,
                rotate: 0,
              });
            }}
            ref={closeBtnScope}
          >
            <span>
              <IconSquareX stroke={1.5} size={36} />
            </span>
            <span className="sr-only">Close Menu</span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
