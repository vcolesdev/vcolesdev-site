import { stagger, useAnimate, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Used to animate the image cards when they come into view.
 * @todo This hook is basically the same as the useInViewAnimateFeaturedCards hook.  Need to refactor to be reusable with appropriate name.
 * @hook useAnimateImageCards
 */
export default function useAnimateImageCards() {
  let options = useRef({});
  let elementRef = useRef<HTMLDivElement>(null);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const keyframes = {
    to: { opacity: 0.9, scale: 1 },
    from: { opacity: 0, scale: 0 },
  };

  const staggerAnim = {
    duration: 0.1,
    options: { startDelay: 0.15 },
  };

  const staggerItems = stagger(staggerAnim.duration, staggerAnim.options);

  options.current = {
    duration: 0.4,
    delay: isInView ? staggerItems : 0,
  };

  return { animate, elementRef, keyframes, scope, isInView, options };
}
