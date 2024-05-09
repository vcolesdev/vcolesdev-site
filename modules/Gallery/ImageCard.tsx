"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {useImageCard} from "./api";
import styles from "./styles.module";

export default function ImageCard({
  id,
  imgSrc,
  height,
  width,
}: {
  id: string;
  imgSrc: string;
  height?: number;
  width?: number;
}) {
  const {handleClick, animations} = useImageCard();
  return (
    <motion.div
      className={`motion-img-card ${styles.control}`}
      id={`motion-img-card-${id}`}
      initial={animations.initial}
      onClick={handleClick}
      whileHover={animations.whileHover}
      whileTap={animations.whileTap}
    >
      <Image
        alt="Featured Image - Placeholder alt text, to be updated."
        className={styles.imageMedia}
        height={height || 1440}
        id={id}
        src={imgSrc}
        width={width || 1920}
      />
    </motion.div>
  );
}
