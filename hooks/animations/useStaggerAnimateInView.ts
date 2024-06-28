import { useEffect, useRef } from "react";
import { useAnimate, useInView, stagger, DynamicAnimationOptions } from "framer-motion";

const DEFAULT_KEYFRAMES = {
  to: { opacity: 0.9, y: 0 },
  from: { opacity: 0, y: 100 },
};

const DEFAULT_OPTIONS = {
  duration: 0.4,
};

/**
 * Animate items into view with a stagger effect, using a ref as the container.
 * @hook useStaggerAnimateInView
 * @param selector
 * @param keyframes
 * @param options
 */
export function useStaggerAnimateInView({
  selector,
  keyframes = DEFAULT_KEYFRAMES,
  options = DEFAULT_OPTIONS,
}: {
  selector: string;
  keyframes?: any;
  options?: DynamicAnimationOptions;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentScope, animateContent] = useAnimate();
  const isInView = useInView(containerRef);

  useEffect(() => {
    // Options and keyframes for the animation.
    // @todo We might want to make these dynamic.
    const staggerOptions: DynamicAnimationOptions = {
      ...options,
      delay: isInView ? staggerAnim() : 0,
    };

    const staggerKeyframes = {
      // @todo Update the type to something more appropriate.
      ...keyframes,
    };

    animateContent(selector, isInView ? staggerKeyframes.to : staggerKeyframes.from, staggerOptions);
  }, [animateContent, isInView, keyframes, options, selector]);

  /**
   * staggerAnim()
   * Stagger the animation with the options provided, returns stagger().
   */
  function staggerAnim() {
    return stagger(0.1, { startDelay: 0.15 });
  }

  return {
    animateContent,
    containerRef,
    contentScope,
    isInView,
  };
}
