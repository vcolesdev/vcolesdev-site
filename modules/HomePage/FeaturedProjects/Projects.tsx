"use client";

import useInViewAnimateFeaturedCards from "@/hooks/animations/useInViewAnimateFeatureCards";
import FeaturedProjectCard from "@/modules/FeaturedProjectCard";
import styles from "@/modules/HomePage/FeaturedProjects/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import { FeaturedProject, FeaturedProjectType } from "@/utils/types/projects";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect } from "react";

const ProjectsList = ({ children }: { children: ReactChildren }) => {
  const { animate, isInView, keyframes, options, ref, scope } = useInViewAnimateFeaturedCards();

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
  );
};

const Projects = ({ projects }: { projects: FeaturedProject[] }) => {
  return (
    <ProjectsList>
      <AnimatePresence>
        {projects &&
          Array.isArray(projects) &&
          projects.length > 0 &&
          projects.map((project: FeaturedProjectType) => (
            <FeaturedProjectCard
              key={project._id}
              categorySlug={project["category_slug"]}
              description={project.description || ""}
              title={project.title}
              url={`/projects/${project.slug}`}
            />
          ))}
      </AnimatePresence>
    </ProjectsList>
  );
};

export default Projects;
