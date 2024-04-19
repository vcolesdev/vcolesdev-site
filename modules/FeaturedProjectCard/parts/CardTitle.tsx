import styles from "@/modules/FeaturedProjectCard/styles.module";

export default function ProjectCardTitle({title}: {title: string}) {
  const titleStyles = styles.project.title;
  return <h3 className={titleStyles}>{title}</h3>;
}