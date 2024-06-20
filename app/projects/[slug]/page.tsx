import featuredProjects from "@/assets/data/featured-projects.json";
import PageContainer from "@/components/Page/PageContent";
import PageTitle from "@/components/Page/PageTitle";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import {FeaturedProject} from "@/utils/types/projects";
import Project from "./Project";

export default function Page({params}: {params: {slug: string}}) {
  const projects: unknown[] = featuredProjects;
  const slug = params.slug;

  const currentProject = (projects as FeaturedProject[]).find(
    (project) => project.slug === slug
  );

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header
        id="header"
        theme="light"
        toggleLightTheme={() => {}}
        toggleDarkTheme={() => {}}
        toggleSystemTheme={() => {}}
      />
      <main className="pt-24">
        <PageContainer>
          <PageTitle title="Projects" />
          <Project {...currentProject} />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
