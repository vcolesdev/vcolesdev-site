"use client";

import ImageCard from "@/modules/ImageCard";
import { AnimatePresence } from "framer-motion";

import GalleryContent from "./components/GalleryContent";
import type { Gallery } from "./types";

/**
 * Gallery
 * @module Gallery
 * @param images
 */
export default function Gallery({ images }: Gallery) {
  return (
    <AnimatePresence>
      <GalleryContent>
        {images.map((image, index) => (
          <ImageCard key={image} id={`featured-image-${index}`} imgSrc={`/images/featured/${image}`} />
        ))}
      </GalleryContent>
    </AnimatePresence>
  );
}
