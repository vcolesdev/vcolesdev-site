import SectionIntro from "~/routes/_index/Intro";
import FeaturedPosts from "~/routes/_index/featured/_Posts";
import FeaturedProjects from "~/routes/_index/featured/_Projects";
import FeaturedGallery from "~/routes/_index/featured/_Gallery";
import FeaturedAbout from "~/routes/_index/featured/_About";
import projects from "~/assets/data/featured-projects.json";
import testPosts from "~/assets/data/featured-test-posts.json";

export default function Home() {
  return (
    <>
      {/* Intro Content */}
      <SectionIntro />
      {/* Featured About */}
      <FeaturedAbout />
      {/* Recent Posts */}
      <FeaturedPosts posts={testPosts} />
      {/* Featured Projects */}
      <FeaturedProjects projects={projects} />
      {/* Gallery */}
      <FeaturedGallery />
    </>
  );
}
