import FeaturedCta from "@/components/Controls/FeaturedCta";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import Gallery from "@/modules/HomePage/FeaturedGallery/Gallery";
import fetchFiles from "@/utils/global/fetchFiles";

/**
 * Gallery Requirements:
 * - When a user clicks on an image element, the user will be navigated to the "/image-{index}" route.
 * - When the user clicks on an image element, an overlay will appear on the page a close icon that closes the image and overlay.
 * - When the user clicks on an image element, the image will be displayed in a modal that takes up most of the screen.
 * - When the user uses the right key, the user will be navigated to the next image in the gallery. If the user is on the last image, the user will be navigated to the first image.
 * - When the user uses the left key, the user will be navigated to the previous image in the gallery. If the user is on the first image, the user will be navigated to the last image.
 * - When the user uses the escape key, the image and overlay will be closed, and the user will be navigated back to the homepage.
 */

const content = {
  ctaLink: "/photos",
  ctaText: "View All Photos",
  description:
    "I like to take pictures from time to time, here are some of my recent favorites.  I enjoy capturing gems of my community, family and friends, and the world at large. The images below are from Fontana, Imperial Beach, and Del Mar, CA.",
  eyebrowText: "Personal Hobby",
  title: "Photos I've Taken",
};

const GalleryContainer = SectionContainer;
const GalleryHeaderContainer = SectionHeaderContainer;
const GalleryHeader = SectionHeader;
const GalleryCta = FeaturedCta;

export default async function FeaturedGallery() {
  const images = fetchFiles("public/images/featured");
  return (
    <GalleryContainer>
      <GalleryHeaderContainer>
        <GalleryHeader
          hasEyebrow
          description={content.description}
          eyebrowText={content.eyebrowText}
          title={content.title}
        />
        <GalleryCta hasIcon ctaText={content.ctaText} href={content.ctaLink} />
      </GalleryHeaderContainer>
      <Gallery images={images} />
    </GalleryContainer>
  );
}
