"use client";

import Image from "next/image";
import { ReactNode } from "react";

import styles from "./styles.module";

interface FeaturedImage {
  imgSrc: string;
}

const CLIP_PATH_1 =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";
const CLIP_PATH_2 =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

/**
 * Div Transforms
 * @component DivTransforms
 */
function DivTransforms() {
  return (
    <>
      <div className={styles.divOne.styles} aria-hidden="true">
        <div className={styles.divOne.child} style={{ clipPath: CLIP_PATH_1 }} />
      </div>
      <div className={styles.divTwo.styles} aria-hidden="true">
        <div className={styles.divTwo.child} style={{ clipPath: CLIP_PATH_2 }} />
      </div>
    </>
  );
}

/**
 * Image Transform Wrapper
 * @component ImageTransformWrapper
 * @param children
 */
function ImageTransformWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <section className={styles.wrapper}>
      {children}
      <DivTransforms />
    </section>
  );
}

/**
 * Featured Image
 * @module HomePage/FeaturedImage
 * @param P { FeaturedImage }
 */
export default function FeaturedImage(P: FeaturedImage) {
  const { imgSrc } = P;
  return (
    <ImageTransformWrapper>
      <Image alt="Large featured image" className={styles.image} src={imgSrc} />
    </ImageTransformWrapper>
  );
}
