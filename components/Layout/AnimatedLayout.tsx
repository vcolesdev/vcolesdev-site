"use client";

import { ReactChildren } from "@/utils/types/layout";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { ComponentPropsWithRef } from "react";

interface AnimatePresenceProps {
  /**
   * By passing `initial={false}`, `AnimatePresence` will disable any initial animations on children
   * that are present when the component is first rendered.
   *
   * ```jsx
   * <AnimatePresence initial={false}>
   *   {isVisible && (
   *     <motion.div
   *       key="modal"
   *       initial={{ opacity: 0 }}
   *       animate={{ opacity: 1 }}
   *       exit={{ opacity: 0 }}
   *     />
   *   )}
   * </AnimatePresence>
   * ```
   *
   * @public
   */
  initial?: boolean;
  /**
   * When a component is removed, there's no longer a chance to update its props. So if a component's `exit`
   * prop is defined as a dynamic variant and you want to pass a new `custom` prop, you can do so via `AnimatePresence`.
   * This will ensure all leaving components animate using the latest data.
   *
   * @public
   */
  custom?: any;
  /**
   * Fires when all exiting nodes have completed animating out.
   *
   * @public
   */
  onExitComplete?: () => void;
  /**
   * Replace with `mode="wait"`
   *
   * @deprecated
   *
   * Replace with `mode="wait"`
   */
  exitBeforeEnter?: boolean;
  /**
   * Determines how to handle entering and exiting elements.
   *
   * - `"sync"`: Default. Elements animate in and out as soon as they're added/removed.
   * - `"popLayout"`: Exiting elements are "popped" from the page layout, allowing sibling
   *      elements to immediately occupy their new layouts.
   * - `"wait"`: Only renders one component at a time. Wait for the exiting component to animate out
   *      before animating the next component in.
   *
   * @public
   */
  mode?: "sync" | "popLayout" | "wait";
  /**
   * Internal. Used in Framer to flag that sibling children *shouldn't* re-render as a result of a
   * child being removed.
   */
  presenceAffectsLayout?: boolean;
}

export default function AnimatedLayout({
  children,
  layoutGroupOptions,
  animatePresenceOptions,
}: {
  children: ReactChildren;
  layoutGroupOptions?: ComponentPropsWithRef<typeof LayoutGroup>;
  animatePresenceOptions?: AnimatePresenceProps;
}) {
  return (
    <LayoutGroup {...layoutGroupOptions}>
      <AnimatePresence {...animatePresenceOptions}>{children}</AnimatePresence>
    </LayoutGroup>
  );
}
