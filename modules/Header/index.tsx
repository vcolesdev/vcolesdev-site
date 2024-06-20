"use client";

import {Slot} from "@/components/Slots";
import useNavLinks from "@/hooks/fetchers/useFetchNavLinks";
import ToggleThemeSelect from "@/modules/Header/components/ToggleThemeSelect";
import SiteLogo from "@/modules/HomePage/SiteLogo";
import Navigation from "@/modules/Nav";
import NavLinks from "@/modules/Nav/components/NavLinks";
import styles from "@/modules/Nav/styles.module";
import {motion} from "framer-motion";
import {MouseEventHandler} from "react";
import useHeader from "./hooks/useHeader";
import useHeaderAnimation from "./hooks/useHeaderAnimation";
import headerStyles from "./styles.module";

interface HeaderInterface {
  id: string;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header({
  id,
  onToggleLightTheme,
  onToggleDarkTheme,
  onToggleSystemTheme,
}: HeaderInterface) {
  const navigation = useNavLinks();
  const {maxWidth, headerSpring} = useHeaderAnimation();
  const {boxShadow, contentScope, padding, scope} = useHeader();

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
      {boxShadow}
    </>
  );
}
