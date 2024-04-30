"use client";

import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import classNames from "classnames";
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

const styles = {
  overlay: {
    styles: classNames([
      "absolute",
      "inset-0",
      "flex",
      "h-full",
      "w-full",
      "items-center",
      "justify-center",
      "rounded-[32px]",
      "bg-melon-400/90",
      "bg-opacity-100",
      "transition",
      "active:bg-melon-400"
    ]),
    span: classNames([
      "text-white"
    ])
  },
  control: classNames([
    "group",
    "relative",
    "flex",
    "rounded-[40px]",
    "border-8",
    "border-transparent",
    "active:border-8",
    "active:border-melon-500"
  ]),
  imageMedia: classNames([
    "h-auto",
    "max-w-full",
    "rounded-[32px]"
  ]),
  content: classNames([
    "container",
    "mx-auto",
    "grid",
    "max-w-7xl",
    "sm:grid-cols-2",
    "sm:gap-2",
    "md:grid-cols-3"
  ])
}

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
