import styles from "./styles.module";
import ProjectCardTitle from "./parts/CardTitle";
import ProjectCardLink from "./parts/CardLink";
import FeaturedProjectCategoryIcon from "~/components/icons/FeaturedProjectIcon";
import {Link} from "@remix-run/react";
import {FeaturedProjectCardProps} from "~/types/Projects";

/**
 * FeaturedProjectCard module
 * @interface FeaturedProjectCardProps
 */
export default function FeaturedProjectCard({
  categorySlug,
  description,
  title,
  url,
}: FeaturedProjectCardProps) {
  const projectStyles = styles.project.styles;
  const descClasses = styles.project.description;

  return (
    <Link className="relative flex" to={url}>
      <article className={projectStyles}>
        <FeaturedProjectCategoryIcon categorySlug={categorySlug} />
        <ProjectCardTitle title={title} />
        <p className={descClasses}>
          {description}
        </p>
        <ProjectCardLink moreText="View Project" />
      </article>
    </Link>
  );
}

