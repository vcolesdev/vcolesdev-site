"use client";

import Link from "next/link";
import styles from "./styles.module";
import Image, {StaticImageData} from "next/image";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import useFetchFeaturedImages from "@/utils/hooks/fetchers/useFetchFeaturedImages";
import {IconArrowsMaximize} from "@tabler/icons-react";
import {ReactChildren} from "@/utils/types/layout";
import {ReactNode, useState} from "react";

interface ImageCardProviderProps {
  children: ReactChildren;
  imgSrc: any;
  overlayElement: ReactNode;
}

const content = {
  ctaLink: "/photos",
  ctaText: "View All Photos",
  description: "I like to take pictures from time to time, here are some of my recent favorites.  I enjoy capturing gems of my community, family and friends, and the world at large. The images below are from Fontana, Imperial Beach, and Del Mar, CA.",
  eyebrowText: "Personal Hobby",
  title: "Photos I've Taken",
};

const ImageControl = Link;
const ImageCardMedia = Image;

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

const ImageCardProvider = ({children, ...props}: ImageCardProviderProps) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <ImageControl
      className={styles.control}
      href={props.imgSrc}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {overlay && props.overlayElement}
      {children}
    </ImageControl>
  )
};

const ImageCard = ({id, imgSrc}: {id: string, imgSrc: any}) => (
  <ImageCardProvider
    imgSrc={imgSrc}
    overlayElement={<ImageCardOverlay />}
  >
    <ImageCardMedia
      id={id}
      className={styles.imageMedia}
      src={imgSrc}
      alt=""
    />
  </ImageCardProvider>
);

const ImageCardList = ({images}: {images: StaticImageData[]}) =>
  images && images.map((img, index) => (
    <ImageCard
      key={index + 1}
      id={`image-${index}`}
      imgSrc={img}
    />
));

const GalleryContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.content}>
    {children}
  </div>
);

export default function FeaturedGallery() {
  const {featuredImages} = useFetchFeaturedImages();
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
        <ImageCardList images={featuredImages} />
      </GalleryContent>
    </GalleryContainer>
  );
}
