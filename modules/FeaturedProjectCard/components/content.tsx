import {cardStyles as styles} from "@/modules/FeaturedProjectCard/styles.module";
import useIconSettings from "@/utils/hooks/components/useIconSettings";
import {ReactChildren} from "@/utils/types/layout";
import {FeaturedProjectIconProps} from "@/utils/types/projects";
import {projectIconSettings} from "@/utils/types/settings";

function MoreText({children}: {children: ReactChildren}) {
  return <span className={styles.links.span}>{children}</span>;
}

function ProjectCardIcon(props: FeaturedProjectIconProps) {
  return (
    <svg
      className={props.styles}
      xmlns={props.settings.xmlns}
      width={props.settings.width}
      height={props.settings.height}
      viewBox={props.settings.viewBox}
      fill={props.settings.fill}
      stroke={props.settings.stroke}
      strokeWidth={props.settings.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {props.children}
    </svg>
  );
}

export function ProjectCardLink({moreText}: {moreText: string}) {
  return (
    <div className={styles.links.container}>
      <MoreText>{moreText}</MoreText>
      <ProjectCardIcon
        styles={styles.links.svg}
        settings={useIconSettings(projectIconSettings)}
      >
        <path d="m9 18 6-6-6-6" />
      </ProjectCardIcon>
    </div>
  );
}

export function ProjectCardTitle({title}: {title: string}) {
  return <h3 className={styles.project.title}>{title}</h3>;
}

export function ProjectCardDescription(props: {description: string}) {
  return <p className={styles.project.description}>{props.description}</p>;
}
