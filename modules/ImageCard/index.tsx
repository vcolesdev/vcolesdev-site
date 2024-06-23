"use client";

import { motion } from "framer-motion";

import useImageCard from "./hooks/useImageCard";
import imageCard from "./styles.module";
import type { ImageCard } from "./types";

const defaultAltText = "Featured Image - Placeholder alt text, to be updated.";

/**
 * ImageCard
 * @module ImageCard
 * @param props
 */
export default function ImageCard(props: ImageCard) {
  const card = props;
  const { anim, handleClick, onHoverEnd, onHoverStart, scope } = useImageCard();

  return (
    <motion.div
      className={`motion-img-card ${imageCard.control}`}
      id={`motion-img-card-${card.id}`}
      initial={anim.initial}
      onClick={handleClick}
      onHoverEnd={() => onHoverEnd()}
      onHoverStart={() => onHoverStart()}
      ref={scope}
      whileHover={anim.whileHover}
      whileTap={anim.whileTap}
    >
      <motion.article className={imageCard.imageMedia} style={{ borderRadius: "2rem" }}>
        <motion.img
          alt={defaultAltText}
          height={card.height || 1440}
          id={card.id}
          src={card.imgSrc}
          width={card.width || 1920}
        />
      </motion.article>
    </motion.div>
  );
}
