import styles from "~/modules/FeaturedProjectCard/styles.module";
import useIconSettings from "~/hooks/components/useIconSettings";
import {projectIconSettings} from "~/types/Settings";
import ProjectCardIcon from "~/modules/FeaturedProjectCard/parts/CardIcon";

export default function ProjectCardLink({moreText}: {moreText: string}) {
  const containerStyles = styles.links.container;
  const spanStyles = styles.links.span;
  const svgStyles = styles.links.svg;

  const iconSettings = useIconSettings(projectIconSettings);

  return (
    <div className={containerStyles}>
      <span className={spanStyles}>
        {moreText}
      </span>
      <ProjectCardIcon
        iconStyles={svgStyles}
        iconSettings={iconSettings}>
        <path d="m9 18 6-6-6-6" />
      </ProjectCardIcon>
    </div>
  );
}