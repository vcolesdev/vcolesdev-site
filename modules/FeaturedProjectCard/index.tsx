"use client";

import * as React from "react";
import Link from "next/link";
import styles from "./styles.module";
import FeaturedProjectCategoryIcon from "@/components/icons/FeaturedProjectIcon";
import {motion} from "framer-motion";
import {ReactChildren} from "@/utils/types/layout";
import {FeaturedProjectCardProps} from "@/utils/types/projects";
import {activeAnimation, hoverAnimation, transitionAnimation} from "./animation";
import {ProjectCardTitle, ProjectCardLink, ProjectCardDescription} from "@/modules/FeaturedProjectCard/Card";

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
)

const ProjectCardContent = ({children}: {children: ReactChildren}) => (
  <div>{children}</div>
);

const ProjectCardFooter = ({children}: {children: ReactChildren}) => (
  <footer>{children}</footer>
);

/**
* FeaturedProjectCard module
* @interface FeaturedProjectCardProps
*/
const FeaturedProjectCard = (props: FeaturedProjectCardProps) => (
  <Link className="relative flex" href={props.url}>
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
  </Link>
);

export default FeaturedProjectCard;

