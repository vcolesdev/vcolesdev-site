"use client";

import { useStaggerAnimateInView } from "@/hooks/animations/useStaggerAnimateInView";
import FeaturedProjectCard from "@/modules/FeaturedProjectCard";
import styles from "@/modules/HomePage/FeaturedProjects/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import { FeaturedProject, FeaturedProjectType } from "@/utils/types/projects";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect } from "react";

/**
 * Featured Projects List Items
 * @component FeaturedProjectsListItems
 * @param children
 */
function FeaturedProjectsListItems({ children }: { children: ReactChildren }) {
  const { containerRef, contentScope } = useStaggerAnimateInView({ selector: ".motion-project-card" });

  return (
    <LayoutGroup id="projects">
      <div ref={containerRef}>
        <div className={styles.projects.list} ref={contentScope}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  );
}

/**
 * Featured Projects List
 * @component FeaturedProjectsList
 * @param P { projects }
 */
export default function FeaturedProjectsList(P: { projects: FeaturedProject[] }) {
  const { projects } = P;

  useEffect(() => {
    if (!projects || projects.length! >= 0) return;
  });

  return (
    <FeaturedProjectsListItems>
      <AnimatePresence>
        {projects.map((item: FeaturedProjectType) => (
          <FeaturedProjectCard
            key={item.id}
            categorySlug={item["category_slug"]}
            description={item.description || ""}
            title={item.title}
            url={`/projects/${item.slug}`}
          />
        ))}
      </AnimatePresence>
    </FeaturedProjectsListItems>
  );
}
