"use client";

import { motion } from "framer-motion";

import styles from "./styles.module";
import type { ImageCard } from "./types";

const DEFAULT_ALT_TEXT = "Featured Image - Placeholder alt text, to be updated.";
const DEFAULT_HEIGHT = 1440;
const DEFAULT_WIDTH = 1920;
const DEFAULT_BORDER_RADIUS = "2rem";

/**
 * Image Card
 * @module ImageCard
 * @param props
 */
export default function ImageCard(props: ImageCard) {
  const card = props;

  return (
    <motion.div
      className={`motion-img-card ${styles.control}`}
      id={`motion-img-card-${card.id}`}
      onClick={() => console.log("ImageCard clicked!", props.id)}
    >
      <motion.article className={styles.imageMedia} style={{ borderRadius: DEFAULT_BORDER_RADIUS }}>
        <motion.img
          alt={DEFAULT_ALT_TEXT}
          height={card.height || DEFAULT_HEIGHT}
          id={card.id}
          src={card.imgSrc}
          width={card.width || DEFAULT_WIDTH}
        />
      </motion.article>
    </motion.div>
  );
}
