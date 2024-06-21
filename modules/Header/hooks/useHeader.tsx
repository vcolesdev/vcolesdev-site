"use client";

import {useAnimate, useScroll, useTransform} from "framer-motion";
import {useEffect, useState} from "react";

export default function useHeader() {
  const [scope] = useAnimate();
  const [contentScope] = useAnimate();
  const {scrollY} = useScroll();
  const [padding, setPadding] = useState(["", ""]);

  const paddingTransform = useTransform(scrollY, [0, 100], padding);

  useEffect(() => {
    // Set the value for our header padding transform.
    setPadding(["2rem", "1rem"]);
  }, [setPadding]);

  return {
    contentScope: contentScope,
    padding: paddingTransform,
    scope: scope,
  };
}
