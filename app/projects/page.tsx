import featuredProjects from "@/assets/data/featured-projects.json";
import PageContainer from "@/components/Page/PageContainer";
import PageTitle from "@/components/Page/PageTitle";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Projects from "./Projects";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <PageContainer>
          <PageTitle title="Projects" />
          <Projects projects={featuredProjects} />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
