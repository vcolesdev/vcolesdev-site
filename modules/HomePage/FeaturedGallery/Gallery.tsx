"use client";

import ImageCard from "@/modules/HomePage/FeaturedGallery/ImageCard";
import styles from "@/modules/HomePage/FeaturedGallery/styles.module";
import useInViewAnimateFeaturedCards from "@/utils/hooks/animations/useInViewAnimateFeatureCards";
import {ReactChildren} from "@/utils/types/layout";
import {AnimatePresence, LayoutGroup} from "framer-motion";
import {useEffect} from "react";

const GalleryContent = ({children}: {children: ReactChildren}) => {
  const {animate, isInView, keyframes, options, ref, scope} =
    useInViewAnimateFeaturedCards();

  useEffect(() => {
    animate(
      ".motion-img-card",
      isInView ? keyframes.to : keyframes.from,
      options
    );
  }, [isInView]);

  return (
    <LayoutGroup id="gallery">
      <div ref={ref}>
        <div ref={scope} className={styles.content}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  );
};

const Gallery = ({images}: {images: string[]}) => (
  <GalleryContent>
    <AnimatePresence>
      {images.map((image, index) => (
        <ImageCard
          key={image}
          id={`featured-image-${index}`}
          imgSrc={`/images/featured/${image}`}
        />
      ))}
    </AnimatePresence>
  </GalleryContent>
);

export default Gallery;
