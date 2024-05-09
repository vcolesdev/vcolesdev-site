"use client";

import {ReactChildren} from "@/utils/types/layout";
import {AnimatePresence, LayoutGroup} from "framer-motion";
import {useAnimateCard, useGalleryImages} from "./api";
import styles from "./styles.module";

function GalleryContent({
  children,
  groupId,
}: {
  children: ReactChildren;
  groupId?: string;
}) {
  const {ref, scope} = useAnimateCard();
  return (
    <LayoutGroup id={groupId || "gallery"}>
      <div ref={ref}>
        <div ref={scope} className={styles.content}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  );
}

export default function Gallery({images}: {images: string[]}) {
  const Gallery = useGalleryImages({images});
  return (
    <GalleryContent>
      <AnimatePresence>{Gallery}</AnimatePresence>
    </GalleryContent>
  );
}
