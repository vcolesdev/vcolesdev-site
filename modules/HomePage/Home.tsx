import SectionIntro from "./SectionIntro";
import FeaturedPosts from "@/modules/HomePage/FeaturedPosts";
import FeaturedProjects from "@/modules/HomePage/FeaturedProjects";
import FeaturedGallery from "@/modules/HomePage/FeaturedGallery";
import FeaturedAbout from "@/modules/HomePage/FeaturedAbout";
import projects from "@/assets/data/featured-projects.json";
import testPosts from "@/assets/data/featured-test-posts.json";

const Home = () => (
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

export default Home;