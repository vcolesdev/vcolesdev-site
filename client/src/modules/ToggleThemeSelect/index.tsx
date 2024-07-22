import { IconDeviceDesktop, IconMoonStars, IconSun } from "@tabler/icons-react";

import BtnToggleTheme from "./components/BtnToggleTheme";
import styles from "./styles.module";
import type { ToggleThemeSelect } from "./types";

/**
 * ToggleThemeSelect
 * @module ToggleThemeSelect
 * @param onToggleDarkTheme
 * @param onToggleLightTheme
 * @param onToggleSystemTheme
 */
export default function ToggleThemeSelect({
  onToggleDarkTheme,
  onToggleLightTheme,
  onToggleSystemTheme,
}: ToggleThemeSelect) {
  return (
    <div id="toggleThemeSelect" className={styles.themeSelect.container}>
      <div>
        <BtnToggleTheme ariaLabel="Toggle light theme" icon={<IconSun size={20} />} onClick={onToggleLightTheme} />
      </div>
      <div>
        <BtnToggleTheme ariaLabel="Toggle dark theme" icon={<IconMoonStars size={20} />} onClick={onToggleDarkTheme} />
      </div>
      {onToggleSystemTheme && (
        <div>
          <BtnToggleTheme
            ariaLabel="Toggle system theme"
            icon={<IconDeviceDesktop size={20} />}
            onClick={onToggleSystemTheme}
          />
        </div>
      )}
    </div>
  );
}
