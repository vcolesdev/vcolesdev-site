import useInViewAnimateFeaturedCards from "@/hooks/animations/useInViewAnimateFeatureCards";
import { useEffect } from "react";

/**
 * useAnimateCard()
 * @param classname
 */
export default function useAnimateCard(classname?: string | ".motion-img-card") {
  const { animate, isInView, keyframes, options, ref, scope } = useInViewAnimateFeaturedCards();

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
