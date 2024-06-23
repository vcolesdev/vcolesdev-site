"use client";

import { motion } from "framer-motion";

import useHeader from "../hooks/useHeader";
import useHeaderAnimation from "../hooks/useHeaderAnimation";
import headerStyles from "../styles.module";
import type { HeaderProvider } from "../types";

/**
 * HeaderProvider
 * @param id
 * @param children
 */
export default function HeaderProvider({ id, children }: HeaderProvider) {
  const { maxWidth, headerSpring } = useHeaderAnimation();
  const { contentScope, padding, scope } = useHeader();

  return (
    <motion.header className={headerStyles.element} id={id} ref={scope}>
      <motion.div
        className={headerStyles.content}
        ref={contentScope}
        style={{
          maxWidth: maxWidth,
          paddingTop: padding,
          paddingBottom: padding,
        }}
        transition={headerSpring}
      >
        {children}
      </motion.div>
    </motion.header>
  );
}
