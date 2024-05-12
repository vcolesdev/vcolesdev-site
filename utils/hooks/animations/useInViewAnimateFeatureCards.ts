import {stagger, useAnimate, useInView} from "framer-motion";
import {useRef} from "react";

export default function useInViewAnimateFeaturedCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref);

  // We can make this dynamic by passing these through props
  const staggerAnimation = {
    duration: 0.1,
    options: {startDelay: 0.15},
  };

  const staggerMenuItems = stagger(
    staggerAnimation.duration,
    staggerAnimation.options
  );

  // We can make this dynamic by passing these through props
  const keyframes = {
    to: {opacity: 0.9, y: 0},
    from: {opacity: 0, y: 100},
  };

  const options = {
    duration: 0.4,
    delay: isInView ? staggerMenuItems : 0,
  };

  return {animate, isInView, keyframes, options, ref, scope};
}
