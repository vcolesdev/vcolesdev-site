import featuredProjects from "@/assets/data/featured-projects.json";
import PageTitle from "@/components/Page/PageTitle";
import PageWrapper from "@/components/Page/PageWrapper";
import { FeaturedProject } from "@/utils/types/projects";

import Project from "./Project";

export default function Page({ params }: { params: { slug: string } }) {
  const projects: unknown[] = featuredProjects;
  const slug = params.slug;

  const currentProject = (projects as FeaturedProject[]).find((project) => project.slug === slug);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <PageWrapper headerId="siteHeaderProject">
      <PageTitle title="Projects" />
      <Project {...currentProject} />
    </PageWrapper>
  );
}
