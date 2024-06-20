import {IconDeviceDesktop, IconMoonStars, IconSun} from "@tabler/icons-react";
import classNames from "classnames";
import {motion} from "framer-motion";
import {MouseEventHandler} from "react";

const styles = {
  element: {
    container: classNames([
      "flex",
      "items-center",
      "justify-between",
      "p-1",
      "rounded-full",
      "bg-melon-700",
      "dark:bg-charcoal-500",
    ]),
  },
  button: classNames([
    "inline-block",
    "rounded-full",
    "py-2",
    "px-2.5",
    "hover:bg-melon-600",
    "active:bg-melon-500",
    "dark:hover:bg-charcoal-400",
    "dark:active:bg-charcoal-300",
  ]),
};

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
    <div id="toggleThemeSelect" className={styles.element.container}>
      <div>
        <motion.button onClick={onToggleLightTheme} className={styles.button}>
          <IconSun size={24} />
        </motion.button>
      </div>
      <div>
        <motion.button onClick={onToggleDarkTheme} className={styles.button}>
          <IconMoonStars size={24} />
        </motion.button>
      </div>
      {onToggleSystemTheme && (
        <div>
          <motion.button
            onClick={onToggleSystemTheme}
            className={styles.button}
          >
            <IconDeviceDesktop size={24} />
          </motion.button>
        </div>
      )}
    </div>
  );
}
