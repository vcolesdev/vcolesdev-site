import SectionIntro from "~/routes/_index/Intro";
import SectionFeaturedPosts from "~/routes/_index/FeaturedPosts";
import SectionFeaturedProjects from "~/routes/_index/FeaturedProjects";
import SectionFeaturedGallery from "~/routes/_index/FeaturedGallery";
import SectionFeaturedAbout from "~/routes/_index/FeaturedAbout";
import projects from "~/assets/data/featured-projects.json";
import testPosts from "~/assets/data/featured-test-posts.json";

export default function Home() {
  return (
    <>
      {/* Intro Content */}
      <SectionIntro />
      {/* Featured About */}
      <SectionFeaturedAbout />
      {/* Recent Posts */}
      <SectionFeaturedPosts posts={testPosts} />
      {/* Featured Projects */}
      <SectionFeaturedProjects projects={projects} />
      {/* Gallery */}
      <SectionFeaturedGallery />
    </>
  );
}
