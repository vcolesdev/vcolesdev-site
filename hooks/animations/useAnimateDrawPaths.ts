"use client";

import { animate, AnimationScope } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animate the drawing of paths in an SVG element.
 * @hook useAnimateDrawPaths
 * @param scope
 * @param selector
 */
export default function useAnimateDrawPaths(
  scope: AnimationScope,
  selector: string = "path"
) {
  const [paths, setPaths] = useState<SVGPathElement[]>([]);

  useEffect(() => {
    const paths = scope.current.querySelectorAll(selector);
    setPaths(paths);
  }, []);

  return () => {
    for (let i = 0; i < paths.length; i++) {
      animate(
        paths[i],
        {pathLength: [0, 1]},
        {duration: 1.2, type: "spring", bounce: 0}
      );
    }
  };
}
