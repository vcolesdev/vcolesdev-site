import {useScroll, useSpring, useTransform} from "framer-motion";

export default function useHeaderAnimation() {
  const {scrollY} = useScroll();
  const maxWidth = useTransform(scrollY, [0, 100], ["80rem", "100rem"], {});

  const spring = useSpring(scrollY, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return {
    maxWidth: maxWidth,
    headerSpring: spring,
  };
}
