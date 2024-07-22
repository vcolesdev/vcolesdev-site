/**
 * API
 * @module api
 * @description Global App API
 * @todo Refactor this, we can probably use a different approach.
 */

import clsx from "clsx";

/**
 * ClassNames generic type
 */
export type ClassNames = Record<string, any>;

/**
 * Disable element scroll with overflow: hidden
 */
export function disableScroll(element: HTMLElement) {
  return (element.style.overflow = "hidden");
}

/**
 * Enable element scroll with overflow: unset
 */
export function enableScroll(element: HTMLElement) {
  return (element.style.overflow = "unset");
}

/**
 * Tailwind CSS classnames generator
 * @param classes
 */
export const tw = (classes: string[]) => clsx(classes);

/**
 * Merge Tailwind CSS classnames
 * @param arrays
 */
export function mergeStyles(...arrays: string[][]) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
