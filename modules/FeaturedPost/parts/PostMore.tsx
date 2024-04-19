import styles from "@/modules/FeaturedPost/styles.module";
import PostIcon from "@/modules/FeaturedPost/parts/PostIcon";
import useIconSettings from "@/hooks/components/useIconSettings";
import {projectIconSettings} from "@/types/Settings";

export default function PostMore({moreText}: {moreText: string}) {
  const moreClasses = styles.more.styles;
  const moreContentClasses = styles.more.content;
  const moreSvgClasses = styles.more.svg;

  return (
    <div className={moreClasses}>
      <span className={moreContentClasses}>
        {moreText}
      </span>
      <PostIcon iconStyles={moreSvgClasses} iconSettings={useIconSettings(projectIconSettings)}>
        <path d="m9 18 6-6-6-6" />
      </PostIcon>
    </div>
  );
}