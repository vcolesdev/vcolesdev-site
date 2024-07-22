"use client";

import useToggleBodyScroll from "@/hooks/global/useToggleBodyScroll";
import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const styles = {
  container: classNames(["fixed", "inset-0", "z-[120]", "w-full", "h-full", "bg-transparent"]),
  overlay: classNames(["absolute", "inset-0", "w-full", "h-full"]),
  wrapper: classNames(["absolute", "inset-0", "flex", "items-center", "justify-center", "p-24"]),
};

interface Slideshow {
  content: string[];
  id: string;
  isOpen: boolean;
  type: "image";
}

/**
 * Slideshow
 * @module Slideshow
 * @param id
 * @param isOpen
 * @param content
 * @param type
 */
export default function Slideshow({ id, isOpen, content = [], type = "image" }: Slideshow) {
  const bodyScroll = useToggleBodyScroll(isOpen);

  useEffect(() => {}, [isOpen, bodyScroll]);

  return (
    <motion.div className={`slideshow ${styles.container} ${isOpen ? "flex" : "hidden"}`} id={id}>
      {/* Slideshow Overlay */}
      <motion.div className={`slideshow-overlay`} />
      <motion.div className={`slideshow-wrapper`}>
        <motion.div className={`slideshow-slides-wrapper`}>
          {content &&
            type === "image" &&
            content.map((item, index) => (
              <motion.div className="slideshow-slide" id={`slide-${index}`} key={`slide-${index}`}>
                <motion.img alt={item} src={`/images/featured/${item}`} />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
