import SectionIntro from "~/routes/_index/Intro";
import SectionFeaturedPosts from "~/routes/_index/FeaturedPosts";
import SectionFeaturedProjects from "~/routes/_index/FeaturedProjects";
import SectionFeaturedGallery from "~/routes/_index/FeaturedGallery";
import SectionFeaturedAbout from "~/routes/_index/FeaturedAbout";
import projects from "~/data/featured-projects.json";

export default function Home() {
  return (
    <>
      {/* Intro Content */}
      <SectionIntro />
      {/* Featured About */}
      <SectionFeaturedAbout />
      {/* Recent Posts */}
      <SectionFeaturedPosts />
      {/* Featured Projects */}
      <SectionFeaturedProjects projects={projects} />
      {/* Gallery */}
      <SectionFeaturedGallery />
    </>
  );
}
