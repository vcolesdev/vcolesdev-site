"use client";

import useHeader from "@/modules/Header/hooks/useHeader";
import useHeaderAnimation from "@/modules/Header/hooks/useHeaderAnimation";
import headerStyles from "@/modules/Header/styles.module";
import {motion} from "framer-motion";
import {ReactNode} from "react";

export default function HeaderProvider({
  id,
  children,
}: {
  id: string;
  children: ReactNode | ReactNode[];
}) {
  const {maxWidth, headerSpring} = useHeaderAnimation();
  const {contentScope, padding, scope} = useHeader();

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
