import useIconSettings from "@/hooks/components/useIconSettings";
import PostIcon from "@/modules/FeaturedPost/PostIcon";
import styles from "@/modules/FeaturedPost/styles.module";
import {projectIconSettings} from "@/utils/types/settings";

const PostMore = ({moreText}: {moreText: string}) => (
  <div className={styles.more.styles}>
    <span className={styles.more.content}>{moreText}</span>
    <PostIcon
      styles={styles.more.svg}
      settings={useIconSettings(projectIconSettings)}
    >
      <path d="m9 18 6-6-6-6" />
    </PostIcon>
  </div>
);

export default PostMore;
