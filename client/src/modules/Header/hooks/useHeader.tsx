"use client";

import { useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * useHeader()
 * @description Hook that returns values for the
 */
export default function useHeader() {
  const { scrollY } = useScroll();

  const [scope] = useAnimate();
  const [contentScope] = useAnimate();
  const [padding, setPadding] = useState(["", ""]);

  const paddingTransform = useTransform(scrollY, [0, 100], padding);

  useEffect(() => {
    setPadding(["2rem", "1rem"]); // Set the value for our header padding transform.
  }, [setPadding]);

  return {
    contentScope: contentScope,
    padding: paddingTransform,
    scope: scope,
  };
}
