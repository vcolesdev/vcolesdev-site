"use client";

import MotionDiv from "@/components/Motion/MotionDiv";
import {motion} from "framer-motion";
import {ImageCardProps, useImageCard} from "./api";
import imageCard from "./styles.module";

const defaultAltText = "Featured Image - Placeholder alt text, to be updated.";

export default function ImageCard(props: ImageCardProps) {
  const card = props;
  const {anim, handleClick, onHoverEnd, onHoverStart, scope} = useImageCard();

  return (
    <MotionDiv
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
      <motion.article
        className={imageCard.imageMedia}
        style={{borderRadius: "2rem"}}
      >
        <motion.img
          alt={defaultAltText}
          height={card.height || 1440}
          id={card.id}
          src={card.imgSrc}
          width={card.width || 1920}
        />
      </motion.article>
    </MotionDiv>
  );
}
