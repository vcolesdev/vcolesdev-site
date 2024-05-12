"use client";

import AnimatedLayout from "@/components/Layout/AnimatedLayout";
import {ReactChildren} from "@/utils/types/layout";
import {motion} from "framer-motion";

export const visible = {opacity: 1, y: 0, transition: {duration: 0.5}};

export const itemVariants = {
  hidden: {opacity: 0, y: 10},
  visible,
};

export default function LayoutFadeInUp({children}: {children: ReactChildren}) {
  return (
    <AnimatedLayout layoutGroupOptions={{id: "page-layout"}}>
      <motion.div
        animate="visible"
        exit="hidden"
        initial="hidden"
        variants={itemVariants}
      >
        {children}
      </motion.div>
    </AnimatedLayout>
  );
}
