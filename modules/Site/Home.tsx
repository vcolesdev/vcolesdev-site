import SectionIntro from "./Intro";
import FeaturedPosts from "./featured/_Posts";
import FeaturedProjects from "./featured/_Projects";
import FeaturedGallery from "./featured/_Gallery";
import FeaturedAbout from "./featured/_About";
import projects from "@/assets/data/featured-projects.json";
import testPosts from "@/assets/data/featured-test-posts.json";

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
