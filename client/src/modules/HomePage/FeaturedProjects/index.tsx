"use client";

import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionContainer from "@/components/SectionContainer";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import { SectionHeaderContainer } from "@/components/SectionHeader/components";
import { FeaturedProject } from "@/utils/types/projects";

import FeaturedProjectsList from "./FeaturedProjectsList";
import styles from "./styles.module";

const FeaturedProjectsContainer = SectionContainer;
const FeaturedProjectsHeaderContainer = SectionHeaderContainer;
const FeaturedProjectsHeader = SectionHeaderEyebrow;
const FeaturedProjectsCta = FeaturedCta;

const CONTENT = {
  ctaLink: "/projects",
  ctaText: "View All Projects",
  description:
    "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  eyebrowText: "Featured Projects",
  title: "Handpicked Favorites",
};

/**
 * Featured Projects
 * @component FeaturedProjects
 * @param projects
 */
export default function FeaturedProjects({ projects }: { projects: FeaturedProject[] }) {
  const { ctaLink, ctaText, description, eyebrowText, title } = CONTENT;
  return (
    <FeaturedProjectsContainer extraClasses={styles.container}>
      <FeaturedProjectsHeaderContainer>
        <FeaturedProjectsHeader eyebrowText={eyebrowText} title={title} description={description} />
        <FeaturedProjectsCta hasIcon ctaText={ctaText} href={ctaLink} />
      </FeaturedProjectsHeaderContainer>
      <FeaturedProjectsList projects={projects} />
    </FeaturedProjectsContainer>
  );
}
