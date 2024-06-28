import React from "react";

import { ProviderElement } from "./types";

/**
 * Element
 * @component Element
 * @param el
 */
function Element(el: ProviderElement) {
  return React.createElement(
    el.element,
    {
      className: el.className,
      id: el.id,
      ...el,
    },
    el.children
  );
}

/**
 * Provider
 * @component Provider
 * @param el
 */
export default function Provider(el: ProviderElement) {
  return <Element {...el}>{el.children}</Element>;
}
