import styles from "./styles.module";
import {IconTrafficCone, IconSquareRoundedX} from "@tabler/icons-react";

export default function UnderConstruction() {
  return (
    <div className={styles.banner.styles}>
      <div className={styles.banner.contentWrapper}>
        <div className={styles.banner.content}>
          <IconTrafficCone className={styles.banner.icon} size={24} />
          <p className={styles.textContent.styles}>
            <span className={styles.textContent.span}>
              Under Construction
            </span>
            - Welcome! This site is a work in progress. Thank you for stopping by.
          </p>
          <button id="btnDismissConstructionAlert" className={styles.btnDismiss.styles}>
            <IconSquareRoundedX className={styles.btnDismiss.icon} size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
