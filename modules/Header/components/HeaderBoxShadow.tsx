"use client";

import {
  motion,
  MotionStyle,
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";
import {useEffect, useState} from "react";

interface HeaderBoxShadowInterface {
  color?: string;
  id?: string;
  isHidden?: boolean;
}

function useBoxShadowTransforms(color: string) {
  const {scrollY} = useScroll();

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    [`0 0 0 0 ${color}`, `0 4px 2.5rem 0 ${color}`]
  );

  const opacity = useTransform(scrollY, [0, 100], [0, 0.6]);
  const padding = useTransform(scrollY, [0, 100], ["2rem", "1rem"]);
  const height = useTransform(scrollY, [0, 100], ["118px", "86px"]);

  return {
    boxShadow,
    opacity,
    padding,
    height,
  };
}

export default function HeaderBoxShadow({
  color = "#f43f5e",
  id,
  isHidden,
}: HeaderBoxShadowInterface) {
  const [scope] = useAnimate();
  const [styles, setStyles] = useState({} as MotionStyle);
  const {boxShadow, opacity, padding, height} = useBoxShadowTransforms(color);

  useEffect(() => {
    setStyles({
      boxShadow: boxShadow,
      height: height,
      opacity: opacity,
      padding: padding,
    });
  }, [isHidden, setStyles]);

  return (
    <motion.div
      hidden={isHidden}
      className="fixed left-0 top-0 z-10 w-full bg-transparent"
      id={id}
      ref={scope}
      style={styles}
    />
  );
}
