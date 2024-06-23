import { useAnimate } from "framer-motion";

/**
 * useCloseBtnAnimation()
 * Animate the close button on hover.
 */
export default function useAnimateCloseBtn() {
  const [scope, animate] = useAnimate();

  /**
   * onHoverStart()
   * Animate the close button on hover
   */
  function onHoverStart() {
    animate(scope.current, {
      scale: 1.05,
      rotate: 90,
    });
  }

  /**
   * onHoverEnd()
   * Animate the close button on hover end
   */
  function onHoverEnd() {
    animate(scope.current, {
      scale: 1,
      rotate: 0,
    });
  }

  return {
    scope,
    onHoverEnd,
    onHoverStart,
  };
}
