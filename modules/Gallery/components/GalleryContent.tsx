"use client";

import styles from "@/modules/Gallery/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import { LayoutGroup } from "framer-motion";

import useAnimateCard from "../hooks/useAnimateCard";

/**
 * GalleryContent
 * @param children
 * @param groupId
 */
export default function GalleryContent({ children, groupId }: { children: ReactChildren; groupId?: string }) {
  const { ref, scope } = useAnimateCard();
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
