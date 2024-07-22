import useDrawVariants from "@/hooks/animations/useDrawVariants";
import { useState } from "react";
import { useAnimate } from "framer-motion";
import useAnimateDrawPaths from "@/hooks/animations/useAnimateDrawPaths";

const DEFAULT_ICON_STYLE = "icon-tabler-brand-github";

/**
 * Display a social icon SVG with animations
 * @hook useSocialIconSVG
 */
export function useSocialIconSVG() {
  let drawVariants = useDrawVariants();
  const [iconClassStr, setIconClassStr] = useState<string>(DEFAULT_ICON_STYLE);
  const [scope, animate] = useAnimate();

  return {
    animate: animate,
    drawVariants: drawVariants,
    iconClassStr: iconClassStr,
    scope: scope,
    setIconClassStr: setIconClassStr,
    onHoverStart: useAnimateDrawPaths(scope),
  };
}
