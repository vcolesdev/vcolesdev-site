"use client";

import styles from "@/modules/HomePage/FeaturedProjects/styles.module";
import FeaturedProjectCard from "@/modules/FeaturedProjectCard";
import useInViewAnimateFeaturedCards from "@/utils/hooks/animations/useInViewAnimateFeatureCards";
import {FeaturedProject, FeaturedProjectType} from "@/utils/types/projects";
import {LayoutGroup, stagger, useAnimate, useInView} from "framer-motion";
import {ReactChildren} from "@/utils/types/layout";
import {useEffect} from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const ProjectsList = ({children}: {children: ReactChildren}) => {
  const {
    animate,
    isInView,
    keyframes,
    options,
    ref,
    scope
  } = useInViewAnimateFeaturedCards();

  useEffect(() => {
    animate(".motion-project-card", isInView ? keyframes.to : keyframes.from, options);
  }, [isInView]);

  return (
    <LayoutGroup id="projects">
      <div ref={ref}>
        <div ref={scope} className={styles.projects.list}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  )
}

const Projects = ({projects}: {projects: FeaturedProject[]}) => {
  return (
    <ProjectsList>
      {projects && Array.isArray(projects) && projects.length > 0 &&
        projects.map((project: FeaturedProjectType) => (
          <FeaturedProjectCard
            key={project._id}
            categorySlug={project["category_slug"]}
            description={project.description || ""}
            title={project.title}
            url={`/projects/${project.slug}`}
          />
        )
      )}
    </ProjectsList>
  )
}

export default Projects;