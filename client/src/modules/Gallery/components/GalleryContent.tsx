"use client";

import { useStaggerAnimateInView } from "@/hooks/animations/useStaggerAnimateInView";
import styles from "@/modules/Gallery/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import { LayoutGroup } from "framer-motion";

/**
 * GalleryContent
 * @param children
 * @param groupId
 */
export default function GalleryContent({ children, groupId }: { children: ReactChildren; groupId?: string }) {
  const { containerRef, contentScope } = useStaggerAnimateInView({ selector: ".motion-img-card" });

  return (
    <LayoutGroup id={groupId || "gallery"}>
      <div ref={containerRef}>
        <div className={styles.content} ref={contentScope}>
          {children}
        </div>
      </div>
    </LayoutGroup>
  );
}
