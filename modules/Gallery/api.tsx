import useInViewAnimateFeaturedCards from "@/utils/hooks/animations/useInViewAnimateFeatureCards";
import {MouseEvent, useEffect} from "react";
import ImageCard from "./ImageCard";

export interface ImageCardProps {
  id: string;
  imgSrc: string;
  height?: number;
  width?: number;
}

export function useAnimateCard(classname?: string | ".motion-img-card") {
  const {animate, isInView, keyframes, options, ref, scope} =
    useInViewAnimateFeaturedCards();

  // If the card is scrolled into view, begin the animation
  const cardKeyFrames = isInView ? keyframes.to : keyframes.from;

  useEffect(() => {
    animate(classname || ".motion-img-card", cardKeyFrames, options);
  }, [isInView]);

  return {
    animate: animate,
    cardKeyFrames: cardKeyFrames,
    isInView: isInView,
    options: options,
    ref: ref,
    scope: scope,
  };
}

export function useGalleryImages({images}: {images: string[]}) {
  const Images = images.map((image, index) => (
    <ImageCard
      key={image}
      id={`featured-image-${index}`}
      imgSrc={`/images/featured/${image}`}
    />
  ));
  return Images;
}

export function useImageCard() {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Clicked: ", event.currentTarget);
  };

  const animations = {
    initial: {opacity: 0.9},
    whileHover: {opacity: 1},
    whileTap: {scale: 0.98},
  };

  return {
    handleClick: handleClick,
    animations: animations,
  };
}
