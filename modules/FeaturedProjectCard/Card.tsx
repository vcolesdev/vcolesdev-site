import styles from "@/modules/FeaturedProjectCard/styles.module";
import * as React from "react";
import {FeaturedProjectIconProps} from "@/utils/types/projects";
import {motion} from "framer-motion";
import useIconSettings from "@/utils/hooks/components/useIconSettings";
import {projectIconSettings} from "@/utils/types/settings";

const MoreText = ({content}: {content: string | React.ReactNode | React.ReactNode[]}) => (
  <span className={styles.links.span}>
    {content}
  </span>
)

const ProjectCardIcon = (props: FeaturedProjectIconProps) =>  (
  <motion.svg
    className={props.iconStyles}
    xmlns={props.iconSettings.xmlns}
    width={props.iconSettings.width}
    height={props.iconSettings.height}
    viewBox={props.iconSettings.viewBox}
    fill={props.iconSettings.fill}
    stroke={props.iconSettings.stroke}
    strokeWidth={props.iconSettings.strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {props.children}
  </motion.svg>
);

export const ProjectCardLink = ({moreText}: {moreText: string}) => (
  <div className={styles.links.container}>
    <MoreText content={moreText} />
    <ProjectCardIcon
      iconStyles={styles.links.svg}
      iconSettings={useIconSettings(projectIconSettings)}>
      <path d="m9 18 6-6-6-6" />
    </ProjectCardIcon>
  </div>
);

export const ProjectCardTitle = ({title}: {title: string}) => (
  <h3 className={styles.project.title}>
    {title}
  </h3>
)

export const ProjectCardDescription = (props: {description: string}) => (
  <p className={styles.project.description}>
    {props.description}
  </p>
);