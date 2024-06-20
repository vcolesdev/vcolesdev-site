import useInViewAnimateFeaturedCards from "@/hooks/animations/useInViewAnimateFeatureCards";
import ImageCard from "@/modules/ImageCard";
import {useEffect} from "react";

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
