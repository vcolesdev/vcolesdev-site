import styles from "./styles.module";
import Projects from "@/modules/HomePage/FeaturedProjects/Projects";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import {FeaturedProject} from "@/utils/types/projects";

const ProjectsContainer = SectionContainer;
const ProjectsHeaderContainer = SectionHeaderContainer;
const ProjectsHeader = SectionHeader;
const ProjectsCta = FeaturedCta;

const content = {
  ctaLink: "/projects",
  ctaText: "View All Projects",
  description: "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  eyebrowText: "Featured Projects",
  title: "Handpicked Favorites",
}

const FeaturedProjects = ({projects}: {projects: FeaturedProject[]}) => (
  <ProjectsContainer extraClasses={styles.container}>
    <ProjectsHeaderContainer>
      <ProjectsHeader
        hasEyebrow
        eyebrowText={content.eyebrowText}
        title={content.title}
        description={content.description}
      />
      <ProjectsCta
        hasIcon
        ctaText={content.ctaText}
        href={content.ctaLink}
      />
    </ProjectsHeaderContainer>
    <Projects projects={projects} />
  </ProjectsContainer>
);

export default FeaturedProjects;
