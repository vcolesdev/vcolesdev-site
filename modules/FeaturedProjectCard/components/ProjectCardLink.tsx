"use client";

import useIconSettings from "@/hooks/components/useIconSettings";
import { MoreText } from "@/modules/FeaturedProjectCard/components";
import ProjectCardIcon from "@/modules/FeaturedProjectCard/components/ProjectCardIcon";
import { cardStyles as styles } from "@/modules/FeaturedProjectCard/styles.module";
import { projectIconSettings } from "@/utils/types/settings";
import { motion } from "framer-motion";

import type { ProjectCardLink } from "../types";

function MoreIcon() {
  return <motion.path d="m9 18 6-6-6-6" />;
}

/**
 * ProjectCardLink
 * @param moreText
 */
export default function ProjectCardLink({ moreText }: ProjectCardLink) {
  return (
    <span className={styles.links.container}>
      <MoreText>{moreText}</MoreText>
      <ProjectCardIcon styles={styles.links.svg} settings={useIconSettings(projectIconSettings)}>
        <MoreIcon />
      </ProjectCardIcon>
    </span>
  );
}
