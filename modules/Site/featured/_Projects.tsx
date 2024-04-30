import classNames from "classnames";
import FeaturedProjectCard from "../../FeaturedProjectCard";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import {ReactChildren} from "@/utils/types/layout";
import {FeaturedProject, FeaturedProjectType} from "@/utils/types/projects";

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

const styles = {
  container: classNames([
    "mb-12",
    "lg:mb-24",
  ]),
  projects: {
    list: classNames([
      "container",
      "mx-auto",
      "grid",
      "max-w-7xl",
      "grid-cols-1",
      "gap-4",
      "lg:grid-cols-2",
      "lg:gap-6",
      "xl:grid-cols-3",
      "xl:gap-8"
    ])
  }
}

const Projects = ({projects}: {projects: FeaturedProject[]}) =>
  projects && Array.isArray(projects) && projects.length > 0 &&
    projects.map((project: FeaturedProjectType) => (
      <FeaturedProjectCard
        key={project._id}
        categorySlug={project["category_slug"]}
        description={project.description || ""}
        title={project.title}
        url={`/projects/${project.slug}`}
      />
));

const ProjectsList = ({children}: {children: ReactChildren}) => (
  <div className={styles.projects.list}>
    {children}
  </div>
);

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
    <ProjectsList>
      <Projects projects={projects} />
    </ProjectsList>
  </ProjectsContainer>
);

export default FeaturedProjects;
