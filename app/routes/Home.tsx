import SectionIntro from "~/modules/Sections/Intro";
import SectionFeaturedPosts from "~/modules/Sections/FeaturedPosts";
import SectionFeaturedProjects from "~/modules/Sections/FeaturedProjects";
import SectionFeaturedGallery from "~/modules/Sections/FeaturedGallery";
import SectionFeaturedAbout from "~/modules/Sections/FeaturedAbout";
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
