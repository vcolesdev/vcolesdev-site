import useIconSettings from "@/hooks/components/useIconSettings";
import { projectIconSettings } from "@/utils/types/settings";

import styles from "../styles.module";
import type { FeaturedPostMore } from "../types";
import FeaturedPostIcon from "./FeaturedPostIcon";

/**
 * PostMore
 * @param moreText
 */
export default function FeaturedPostMore({ moreText }: FeaturedPostMore) {
  return (
    <div className={styles.more.styles}>
      <span className={styles.more.content}>{moreText}</span>
      <FeaturedPostIcon styles={styles.more.svg} settings={useIconSettings(projectIconSettings)}>
        <path d="m9 18 6-6-6-6" />
      </FeaturedPostIcon>
    </div>
  );
}
