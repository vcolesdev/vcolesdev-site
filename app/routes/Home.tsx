import SectionIntro from "~/modules/Sections/Intro";
//import SectionFeaturedImage from "~/modules/Sections/FeaturedImage";
import SectionFeaturedPosts from "~/modules/Sections/FeaturedPosts";
//import SectionFeaturedPostsAlt from "~/modules/Sections/FeaturedPostsAlt";
import SectionFeaturedProjects from "~/modules/Sections/FeaturedProjects";
import SectionFeaturedGallery from "~/modules/Sections/FeaturedGallery";
//import SectionFeaturedMorePosts from "~/modules/Sections/FeaturedMorePosts";
//import featuredImage from "~/assets/images/featured-image.jpg";
import SectionFeaturedAbout from "~/modules/Sections/FeaturedAbout";

export default function Home() {
  return (
    <>
      {/* Intro Content */}
      <SectionIntro />
      {/* Featured Image
      <SectionFeaturedImage imgSrc={featuredImage} />
      */}
      {/* Featured About */}
      <SectionFeaturedAbout />
      {/* Recent Posts */}
      <SectionFeaturedPosts />
      {/* More Posts
      <SectionFeaturedMorePosts />
      */}
      {/* Featured Projects */}
      <SectionFeaturedProjects />
      {/* Gallery */}
      <SectionFeaturedGallery />
    </>
  );
}
