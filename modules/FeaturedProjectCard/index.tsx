import styles from "./styles.module";
import Link from "next/link";
import ProjectCardTitle from "./parts/CardTitle";
import ProjectCardLink from "./parts/CardLink";
import FeaturedProjectCategoryIcon from "@/components/icons/FeaturedProjectIcon";
import {FeaturedProjectCardProps} from "@/types/Projects";

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
  return (
    <Link className="relative flex" href={url}>
      <article className={styles.project.styles}>
        <div>
        <FeaturedProjectCategoryIcon categorySlug={categorySlug} />
        <ProjectCardTitle title={title} />
        <p className={styles.project.description}>
          {description}
        </p>
        </div>
        <div>
          <ProjectCardLink moreText="View Project" />
        </div>
      </article>
    </Link>
  );
}

