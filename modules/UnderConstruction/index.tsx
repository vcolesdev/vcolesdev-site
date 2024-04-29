import styles from "./styles.module";
import {IconTrafficCone, IconSquareRoundedX} from "@tabler/icons-react";

export default function UnderConstruction() {
  return (
    <div className={styles.banner.styles}>
      <div className={styles.banner.contentWrapper}>
        <div className={styles.banner.content}>
          <div className={styles.textContent.styles}>
            <p className={styles.textContent.span}>
              <span className="px-3">Under Construction</span>
            </p>
            <p>
              Welcome!  This site is a work in progress. Thank you for stopping by.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
