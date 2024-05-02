import Image from "next/image";
import styles from "./styles.module";
import fetchFiles from "@/utils/global/fetchFiles";
import ImageCardProvider from "@/modules/HomePage/FeaturedGallery/Provider";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import {IconArrowsMaximize} from "@tabler/icons-react";
import {ReactChildren} from "@/utils/types/layout";

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
  description: "I like to take pictures from time to time, here are some of my recent favorites.  I enjoy capturing gems of my community, family and friends, and the world at large. The images below are from Fontana, Imperial Beach, and Del Mar, CA.",
  eyebrowText: "Personal Hobby",
  title: "Photos I've Taken",
};

const GalleryContainer = SectionContainer;
const GalleryHeaderContainer = SectionHeaderContainer;
const GalleryHeader = SectionHeader;
const GalleryCta = FeaturedCta;

const ImageCardOverlay = () => (
  <div className={styles.overlay.styles}>
    <span className={styles.overlay.span}>
      <IconArrowsMaximize stroke={1.5} size={36} />
    </span>
  </div>
);

const ImageCard = ({id, imgSrc}: {id: string, imgSrc: any}) => (
  <ImageCardProvider
    imgSrc={imgSrc}
    overlayElement={<ImageCardOverlay />}
  >
    <Image
      id={id}
      className={styles.imageMedia}
      src={imgSrc}
      alt="Featured Image - Placeholder alt text, to be updated."
      width={1920}
      height={1440}
    />
  </ImageCardProvider>
);

const GalleryContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.content}>
    {children}
  </div>
);

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
        <GalleryCta
          hasIcon
          ctaText={content.ctaText}
          href={content.ctaLink}
        />
      </GalleryHeaderContainer>
      <GalleryContent>
      {images && images.map((img, index) => (
        <ImageCard
          key={img}
          id={`image-${index}`}
          imgSrc={`/images/featured/${img}`}
        />
      ))}
      </GalleryContent>
    </GalleryContainer>
  );
}
