import useIconSettings from "@/hooks/components/useIconSettings";
import { projectIconSettings } from "@/utils/types/settings";

import styles from "../styles.module";
import type { PostMore } from "../types";
import PostIcon from "./PostIcon";

/**
 * PostMore
 * @param moreText
 */
export default function PostMore({ moreText }: PostMore) {
  return (
    <div className={styles.more.styles}>
      <span className={styles.more.content}>{moreText}</span>
      <PostIcon styles={styles.more.svg} settings={useIconSettings(projectIconSettings)}>
        <path d="m9 18 6-6-6-6" />
      </PostIcon>
    </div>
  );
}
