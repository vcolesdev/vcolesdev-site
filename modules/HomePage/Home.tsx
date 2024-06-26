import projects from "@/assets/data/featured-projects.json";
import testPosts from "@/assets/data/featured-test-posts.json";
import FeaturedAbout from "@/modules/HomePage/FeaturedAbout";
import FeaturedGallery from "@/modules/HomePage/FeaturedGallery";
import FeaturedPosts from "@/modules/HomePage/FeaturedPosts";
import FeaturedProjects from "@/modules/HomePage/FeaturedProjects";

import SectionIntro from "./SectionIntro";

/**
 * Home Page
 * @module Home
 */
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
      <FeaturedGallery dir="public/images/featured" />
    </>
  );
}
