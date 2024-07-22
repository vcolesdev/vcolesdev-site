"use client";

import useIconSettings from "@/hooks/components/useIconSettings";
import { projectIconSettings } from "@/utils/types/settings";
import { motion } from "framer-motion";

import { MoreText } from "../components";
import ProjectCardIcon from "../components/ProjectCardIcon";
import styles from "../styles.module";
import type { ProjectCardLink } from "../types";

/**
 * More Icon
 * @component MoreIcon
 */
function MoreIcon() {
  return <motion.path d="m9 18 6-6-6-6" />;
}

/**
 * Project Card Link
 * @component ProjectCardLink
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
