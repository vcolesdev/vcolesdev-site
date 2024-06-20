"use client";

import useIconSettings from "@/hooks/components/useIconSettings";
import {MoreText} from "@/modules/FeaturedProjectCard/components";
import ProjectCardIcon from "@/modules/FeaturedProjectCard/components/ProjectCardIcon";
import {cardStyles as styles} from "@/modules/FeaturedProjectCard/styles.module";
import {projectIconSettings} from "@/utils/types/settings";
import {motion} from "framer-motion";

function MoreIcon() {
  return <motion.path d="m9 18 6-6-6-6" />;
}

export default function ProjectCardLink({moreText}: {moreText: string}) {
  return (
    <div className={styles.links.container}>
      <MoreText>{moreText}</MoreText>
      <ProjectCardIcon
        styles={styles.links.svg}
        settings={useIconSettings(projectIconSettings)}
      >
        <MoreIcon />
      </ProjectCardIcon>
    </div>
  );
}
