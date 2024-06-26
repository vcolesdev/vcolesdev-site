import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionContainer from "@/components/SectionContainer";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import { SectionHeaderContainer } from "@/components/SectionHeader/components";
import useFetchFiles from "@/hooks/fetchers/useFetchFiles";
import Gallery from "@/modules/Gallery";

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
const GalleryHeader = SectionHeaderEyebrow;
const GalleryCta = FeaturedCta;

/**
 * Featured Gallery
 * @module HomePage/FeaturedGallery
 * @param dir
 */
export default async function FeaturedGallery({ dir }: { dir: string }) {
  const images = useFetchFiles(dir);
  return (
    <GalleryContainer>
      <GalleryHeaderContainer>
        <GalleryHeader description={content.description} eyebrowText={content.eyebrowText} title={content.title} />
        <GalleryCta hasIcon ctaText={content.ctaText} href={content.ctaLink} />
      </GalleryHeaderContainer>
      <Gallery images={images} />
    </GalleryContainer>
  );
}
