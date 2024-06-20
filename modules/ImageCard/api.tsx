"use client";

import useOnHoverImage from "@/hooks/animations/useOnHoverImage";
import {useAnimate} from "framer-motion";
import {MouseEvent} from "react";

export interface ImageCardProps {
  id: string;
  imgSrc: string;
  height?: number;
  width?: number;
}

export interface ImageCardStyles {
  overlay: {
    styles: string;
    span: string;
  };
  control: string;
  imageMedia: string;
}

export function useImageCard() {
  const [scope, animate] = useAnimate();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {};

  const anim = {
    initial: {opacity: 0.9},
    whileHover: {opacity: 1},
    whileTap: {scale: 0.98},
  };

  // We can refactor these two, as they are identical
  const onHoverStart = useOnHoverImage(animate, 0.5, 1.1, scope);
  const onHoverEnd = useOnHoverImage(animate, 0.5, 1, scope);

  return {
    anim: anim,
    handleClick: handleClick,
    onHoverEnd: onHoverEnd,
    onHoverStart: onHoverStart,
    scope: scope,
  };
}
