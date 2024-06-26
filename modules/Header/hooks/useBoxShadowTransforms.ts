import { useScroll, useTransform } from "framer-motion";

/**
 * useBoxShadowTransforms()
 * @description Hook that returns the transforms for the header box shadow based on the scroll position.
 */
export default function useBoxShadowTransforms() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 0.6]);
  const padding = useTransform(scrollY, [0, 100], ["2rem", "1rem"]);
  const height = useTransform(scrollY, [0, 100], ["118px", "86px"]);

  return {
    opacity,
    padding,
    height,
  };
}
