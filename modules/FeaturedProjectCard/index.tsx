"use client";

import FeaturedProjectCategoryIcon from "@/components/icons/FeaturedProjectIcon";
import {
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardFooter,
  ProjectCardProvider,
} from "@/modules/FeaturedProjectCard/components";
import {
  ProjectCardDescription,
  ProjectCardLink,
  ProjectCardTitle,
} from "@/modules/FeaturedProjectCard/components/content";
import {FeaturedProjectCardProps} from "@/utils/types/projects";

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
