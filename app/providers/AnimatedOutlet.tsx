/** https://www.jacobparis.com/content/remix-animated-page-transitions */
import { useState } from "react";
import { useOutlet } from "@remix-run/react";

/**
 * AnimatedOutlet
 */
export default function AnimatedOutlet() {
  const [outlet] = useState(useOutlet());

  return outlet;
}
