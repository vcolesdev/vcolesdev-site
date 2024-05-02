import featuredProjects from "@/assets/data/featured-projects.json";
import PageContainer from "@/components/Page/_Container";
import PageTitle from "@/components/Page/_Title";
import Projects from "./Projects";

export default function Page() {
  return (
    <PageContainer>
      <PageTitle title="Projects" />
      <Projects projects={featuredProjects} />
    </PageContainer>
  );
}
