import PageContainer from "@/components/Page/_Container";
import PageTitle from "@/components/Page/_Title";
import Projects from "./Projects";
import featuredProjects from "@/assets/data/featured-projects.json";

export default function Page() {
  return (
    <PageContainer>
      <PageTitle title="Projects" />
      <Projects projects={featuredProjects} />
    </PageContainer>
  );
}
