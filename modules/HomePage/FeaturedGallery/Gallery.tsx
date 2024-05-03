"use client";

import styles from "@/modules/HomePage/FeaturedGallery/styles.module";
import ImageCard from "@/modules/HomePage/FeaturedGallery/ImageCard";
import useInViewAnimateFeaturedCards from "@/utils/hooks/animations/useInViewAnimateFeatureCards";
import {AnimatePresence, LayoutGroup} from "framer-motion";
import {ReactChildren} from "@/utils/types/layout";
import {useEffect} from "react";

const GalleryContent = ({children}: {children: ReactChildren}) => {
  const {
    animate,
    isInView,
    keyframes,
    options,
    ref,
    scope
  } = useInViewAnimateFeaturedCards();

  useEffect(() => {
    animate(".motion-img-card", isInView ? keyframes.to : keyframes.from, options);
  }, [isInView]);

  return (
    <LayoutGroup id="gallery">
      <div ref={ref}>
        <div ref={scope} className={styles.content}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  )
}

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
)


export default Gallery;