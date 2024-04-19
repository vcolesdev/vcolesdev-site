/**
 * -----------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------
 * - truncateText
 * - generateRandomKey
 * - getPageTitle
 * -----------------------------------------------------------------------------
 */

import React from "react";

/**
 * Truncate text
 * @param text
 * @param length
 * @description Truncate text to a specific length.
 */
export function truncateText(text: string, length: number) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}

/**
 * Generate a random key
 * @description Generate a random key for React components.
 */
export function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}

/**
 * Get page title
 * @param defaultTitle
 * @param custom
 * @description Get the page title.
 */
export function getPageTitle(defaultTitle: string, custom?: string) {
  return custom || defaultTitle;
}

/**
 * Get mouse cursor position
 * @param event
 * @description Get the mouse cursor position.
 */
export function getCursorPosition(event: React.MouseEvent<HTMLElement>) {
  const posX = event.clientX;
  const posY = event.clientY
  console.log(posX, posY);
  return {
    x: posX,
    y: posY,
  };
}