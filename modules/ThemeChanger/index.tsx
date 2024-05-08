import styles from "@/modules/Nav/styles.module";
import {IconDeviceDesktop, IconMoonStars, IconSun} from "@tabler/icons-react";

export default function ThemeChanger() {
  return (
    <div className={styles.themeChanger}>
      <button>
        <IconMoonStars stroke={2} size={24} />
      </button>
      <button>
        <IconSun stroke={2} size={24} />
      </button>
      <button>
        <IconDeviceDesktop stroke={2} size={24} />
      </button>
    </div>
  );
}
