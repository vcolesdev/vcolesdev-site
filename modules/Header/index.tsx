"use client";

import {Slot} from "@/components/Slots";
import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import ToggleThemeSelect from "@/modules/Header/components/ToggleThemeSelect";
import SiteLogo from "@/modules/HomePage/SiteLogo";
import Navigation from "@/modules/Nav";
import NavLinks from "@/modules/Nav/components/NavLinks";
import HeaderBoxShadow from "@/modules/Header/components/HeaderBoxShadow";
import styles from "@/modules/Nav/styles.module";
import {motion} from "framer-motion";
import {MouseEventHandler, useEffect} from "react";
import useHeader from "./hooks/useHeader";
import useHeaderAnimation from "./hooks/useHeaderAnimation";
import headerStyles from "./styles.module";

interface HeaderInterface {
  id: string;
  currentTheme?: string;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header({
  id,
  currentTheme,
  onToggleLightTheme,
  onToggleDarkTheme,
  onToggleSystemTheme,
}: HeaderInterface) {
  const navigation = useNavLinks();
  const {maxWidth, headerSpring} = useHeaderAnimation();
  const {contentScope, padding, scope} = useHeader();

  useEffect(() => {
    console.log("The current header theme is: ", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <motion.header className={headerStyles.element} id={id} ref={scope}>
        <motion.div
          className={headerStyles.content}
          ref={contentScope}
          style={{
            maxWidth: maxWidth,
            paddingTop: padding,
            paddingBottom: padding,
          }}
          transition={headerSpring}
        >
          {/* Site logo */}
          <Slot styles={styles.logoWrapper}>
            <SiteLogo />
          </Slot>
          {/* Navigation */}
          <Navigation>
            <div className={styles.nav.content}>
              <NavLinks nav={navigation} />
            </div>
          </Navigation>
          {/* Theme toggles */}
          <Slot>
            <ToggleThemeSelect
              onToggleLightTheme={onToggleLightTheme}
              onToggleDarkTheme={onToggleDarkTheme}
              onToggleSystemTheme={onToggleSystemTheme}
            />
          </Slot>
        </motion.div>
      </motion.header>
      {/* Box shadow element */}
      <HeaderBoxShadow />
    </>
  );
}
