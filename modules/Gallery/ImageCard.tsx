"use client";

import {motion, useAnimate} from "framer-motion";
import {ImageCardProps, useImageCard} from "./api";
import styles from "./styles.module";

export default function ImageCard(props: ImageCardProps) {
  const {id, imgSrc, height, width} = props;

  const {handleClick, animations} = useImageCard();
  const [scope, animate] = useAnimate();

  // We can refactor these two, as they are identical
  const onHoverStart = () => {
    const images = scope.current.querySelectorAll("img");
    const article = scope.current.querySelectorAll("article");

    Array.from(images).forEach((image, i) => {
      animate(image, {scale: 1.1}, {duration: 0.5});
    });
  };

  const onHoverEnd = () => {
    const images = scope.current.querySelectorAll("img");
    const article = scope.current.querySelectorAll("article");

    Array.from(images).forEach((image) => {
      animate(image, {scale: 1}, {duration: 0.5});
    });
  };

  return (
    <motion.div
      className={`motion-img-card ${styles.control}`}
      id={`motion-img-card-${id}`}
      initial={animations.initial}
      onClick={handleClick}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
      ref={scope}
      whileHover={animations.whileHover}
      whileTap={animations.whileTap}
    >
      <motion.article
        className={styles.imageMedia}
        style={{borderRadius: "2rem"}}
      >
        <motion.img
          alt="Featured Image - Placeholder alt text, to be updated."
          height={height || 1440}
          id={id}
          src={imgSrc}
          width={width || 1920}
        />
      </motion.article>
    </motion.div>
  );
}
