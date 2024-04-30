import * as React from "react";
import styles from "@/modules/Nav/styles.module";
import MotionDiv from "@/components/Motion/MotionDiv";
import {ReactChildren} from "@/utils/types/layout";
import {useScroll, useTransform} from "framer-motion";
import {
  bgOutputRange,
  boxShadowOutputRange,
  inputRange,
  navAnimationTransition,
  paddingOutputRange,
} from "@/modules/Nav/animation";

export default function NavProvider ({children}: {children: ReactChildren}) {
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

  return (
    <MotionDiv
      className={styles.nav.container}
      style={style}
      transition={navAnimationTransition}
    >
      {children}
    </MotionDiv>
  )
}