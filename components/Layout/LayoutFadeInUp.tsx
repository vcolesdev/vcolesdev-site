"use client";

import AnimatedLayout from "@/components/Layout/AnimatedLayout";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

/**
 * Layout Fade In Up
 * @component LayoutFadeInUp
 * @param children
 */
export default function LayoutFadeInUp({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <AnimatedLayout layoutGroupOptions={{ id: "page-layout" }}>
      <motion.div animate="visible" exit="hidden" initial="hidden" variants={itemVariants}>
        {children}
      </motion.div>
    </AnimatedLayout>
  );
}
