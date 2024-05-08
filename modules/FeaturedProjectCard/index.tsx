"use client";

import FeaturedProjectCategoryIcon from "@/components/icons/FeaturedProjectIcon";
import {
  ProjectCardDescription,
  ProjectCardLink,
  ProjectCardTitle,
} from "@/modules/FeaturedProjectCard/Card";
import {ReactChildren} from "@/utils/types/layout";
import {FeaturedProjectCardProps} from "@/utils/types/projects";
import {motion} from "framer-motion";
import Link from "next/link";
import {
  activeAnimation,
  hoverAnimation,
  transitionAnimation,
} from "./animation";
import styles from "./styles.module";

const ProjectCardContainer = ({children}: {children: ReactChildren}) => (
  <motion.article
    className={styles.project.styles}
    transition={transitionAnimation}
    whileHover={hoverAnimation}
    whileFocus={activeAnimation}
    whileTap={activeAnimation}
  >
    {children}
  </motion.article>
);

const ProjectCardContent = ({children}: {children: ReactChildren}) => (
  <div>{children}</div>
);

const ProjectCardFooter = ({children}: {children: ReactChildren}) => (
  <footer>{children}</footer>
);

const ProjectCardProvider = ({
  children,
  url,
}: {
  children: ReactChildren;
  url: string;
}) => (
  <Link className="motion-project-card relative flex" href={url}>
    {children}
  </Link>
);

/**
 * FeaturedProjectCard module
 * @interface FeaturedProjectCardProps
 */
const FeaturedProjectCard = (props: FeaturedProjectCardProps) => (
  <ProjectCardProvider url={props.url}>
    <ProjectCardContainer>
      <ProjectCardContent>
        <FeaturedProjectCategoryIcon categorySlug={props.categorySlug} />
        <ProjectCardTitle title={props.title} />
        <ProjectCardDescription description={props.description} />
      </ProjectCardContent>
      <ProjectCardFooter>
        <ProjectCardLink moreText="View Project" />
      </ProjectCardFooter>
    </ProjectCardContainer>
  </ProjectCardProvider>
);

export default FeaturedProjectCard;
