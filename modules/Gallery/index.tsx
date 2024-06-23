"use client";

import { AnimatePresence } from "framer-motion";

import GalleryContent from "./components/GalleryContent";
import { useGalleryImages } from "./hooks/useGalleryImages";
import type { Gallery } from "./types";

/**
 * Gallery
 * @module Gallery
 * @param images
 */
export default function Gallery({ images }: Gallery) {
  const Gallery = useGalleryImages({ images });
  return (
    <GalleryContent>
      <AnimatePresence>{Gallery}</AnimatePresence>
    </GalleryContent>
  );
}
