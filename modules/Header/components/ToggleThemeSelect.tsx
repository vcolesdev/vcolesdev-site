import {IconDeviceDesktop, IconMoonStars, IconSun} from "@tabler/icons-react";
import {motion} from "framer-motion";
import {MouseEventHandler} from "react";
import headerStyles from "../styles.module";

export default function ToggleThemeSelect({
  onToggleDarkTheme,
  onToggleLightTheme,
  onToggleSystemTheme,
}: {
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div id="toggleThemeSelect" className={headerStyles.themeSelect.container}>
      <div>
        <motion.button
          className={headerStyles.themeSelect.button}
          onClick={onToggleLightTheme}
        >
          <IconSun size={20} />
        </motion.button>
      </div>
      <div>
        <motion.button
          className={headerStyles.themeSelect.button}
          onClick={onToggleDarkTheme}
        >
          <IconMoonStars size={20} />
        </motion.button>
      </div>
      {onToggleSystemTheme && (
        <div>
          <motion.button
            className={headerStyles.themeSelect.button}
            onClick={onToggleSystemTheme}
          >
            <IconDeviceDesktop size={20} />
          </motion.button>
        </div>
      )}
    </div>
  );
}
