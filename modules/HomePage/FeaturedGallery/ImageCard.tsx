"use client";

import styles from "@/modules/HomePage/FeaturedGallery/styles.module";
import {motion} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

const ImageCard = ({id, imgSrc}: {id: string; imgSrc: string}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Clicked: ", event.currentTarget);
  };

  return (
    <motion.div
      initial={{opacity: 0.9}}
      whileHover={{opacity: 1}}
      whileTap={{scale: 0.98}}
      id={`motion-img-card-${id}`}
      className={`motion-img-card ${styles.control}`}
      onClick={(event) => handleClick(event)}
    >
      <Image
        id={id}
        className={styles.imageMedia}
        src={imgSrc}
        alt="Featured Image - Placeholder alt text, to be updated."
        width={1920}
        height={1440}
      />
    </motion.div>
  );
};

export default ImageCard;
