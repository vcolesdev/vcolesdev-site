import MotionDiv from "@/components/Motion/MotionDiv";
import {
  bgOutputRange,
  boxShadowOutputRange,
  inputRange,
  navAnimationTransition,
  paddingOutputRange,
} from "@/modules/Nav/animation";
import styles from "@/modules/Nav/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {useAnimate, useScroll, useTransform} from "framer-motion";
import {useEffect} from "react";

export default function NavProvider({children}: {children: ReactChildren}) {
  const [scope, animate] = useAnimate();
  const {scrollY} = useScroll();

  const background = useTransform(scrollY, inputRange, bgOutputRange);
  const padding = useTransform(scrollY, inputRange, paddingOutputRange);
  const boxShadow = useTransform(scrollY, inputRange, boxShadowOutputRange);

  const style = {
    background,
    paddingTop: padding,
    paddingBottom: padding,
    boxShadow,
  };

  useEffect(() => {}, [scrollY]);

  return (
    <MotionDiv
      id="navProvider"
      className={styles.nav.container}
      ref={scope}
      style={style}
      transition={navAnimationTransition}
    >
      {children}
    </MotionDiv>
  );
}
