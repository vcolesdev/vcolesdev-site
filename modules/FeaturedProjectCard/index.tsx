"use client";

import FeaturedProjectCategoryIcon from "@/components/icons/FeaturedProjectIcon";
import {
  ProjectCardContent,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardTitle,
} from "@/modules/FeaturedProjectCard/components";
import ProjectCardContainer from "@/modules/FeaturedProjectCard/components/ProjectCardContainer";
import ProjectCardLink from "@/modules/FeaturedProjectCard/components/ProjectCardLink";
import { FeaturedProjectCardProps } from "@/utils/types/projects";

import { ProjectCardProvider } from "./components";

/**
 * FeaturedProjectCard
 * @module FeaturedProjectCard
 * @param feature
 */
export default function FeaturedProjectCard(feature: FeaturedProjectCardProps) {
  return (
    <ProjectCardProvider url={feature.url}>
      <ProjectCardContainer>
        <ProjectCardContent>
          <FeaturedProjectCategoryIcon categorySlug={feature.categorySlug} />
          <ProjectCardTitle title={feature.title} />
          <ProjectCardDescription description={feature.description} />
        </ProjectCardContent>
        <ProjectCardFooter>
          <ProjectCardLink moreText="View Project" />
        </ProjectCardFooter>
      </ProjectCardContainer>
    </ProjectCardProvider>
  );
}
