"use client";

import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionContainer from "@/components/SectionContainer";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import {SectionHeaderContainer} from "@/components/SectionHeader/components";
import Projects from "@/modules/HomePage/FeaturedProjects/Projects";
import {FeaturedProject} from "@/utils/types/projects";
import styles from "./styles.module";

const ProjectsContainer = SectionContainer;
const ProjectsHeaderContainer = SectionHeaderContainer;
const ProjectsHeader = SectionHeaderEyebrow;
const ProjectsCta = FeaturedCta;

const content = {
  ctaLink: "/projects",
  ctaText: "View All Projects",
  description:
    "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  eyebrowText: "Featured Projects",
  title: "Handpicked Favorites",
};

export default function FeaturedProjects({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  return (
    <ProjectsContainer extraClasses={styles.container}>
      <ProjectsHeaderContainer>
        <ProjectsHeader
          eyebrowText={content.eyebrowText}
          title={content.title}
          description={content.description}
        />
        <ProjectsCta hasIcon ctaText={content.ctaText} href={content.ctaLink} />
      </ProjectsHeaderContainer>
      <Projects projects={projects} />
    </ProjectsContainer>
  );
}
