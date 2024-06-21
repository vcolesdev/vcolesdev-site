"use client";

import {motion, useAnimate} from "framer-motion";

interface HeaderBoxShadowInterface {
  id?: string;
}

export default function HeaderBoxShadow({id}: HeaderBoxShadowInterface) {
  const [scope] = useAnimate();

  return (
    <motion.div
      className="fixed left-0 top-0 z-10 w-full bg-transparent"
      id={id}
      ref={scope}
    />
  );
}
