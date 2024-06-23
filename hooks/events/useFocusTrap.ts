"use client";

import {useEffect, useRef} from "react";

type FocusTrapElement = HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function useFocusTrap(element: FocusTrapElement | null) {
  const elementRef = useRef(element);
  const elements = elementRef.current ? elementRef.current.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])") : [];

  // Get all focusable elements from the element specified in the ref
  const focusable = (elements);

  // Get the first and last focusable elements
  const firstEl = focusable[0];
  const lastEl = focusable[focusable.length - 1];

  // Add event listeners for keydown
  useEffect(() => {
    if (!element) return;

    function onKeyPress(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          (lastEl as HTMLElement).focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          (firstEl as HTMLElement).focus();
        }
      }
    }

    // Add event listeners for keydown event
    // @todo We need to properly type these events
    element.addEventListener("keydown",  function(e: any) {
      onKeyPress(e);
    });
    return () => {
      element.removeEventListener("keydown", function(e: any) {
        onKeyPress(e);
      });
    }
  }, [element, elementRef, firstEl, lastEl]);
}

export {useFocusTrap};
export type {FocusTrapElement};
