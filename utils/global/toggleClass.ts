/**
 * toggleHtmlClass
 * @description Toggle class on html element
 * @param selector
 */
export function toggleHtmlClass(selector: string) {
  const html = document.documentElement;
  if (!html) return;
  html.classList.toggle(selector);
}

/**
 * toggleClass
 * @description Toggle class on element
 * @param element
 * @param selector
 */
export function toggleClass(element: HTMLElement, selector: string) {
  if (!element) return;
  element.classList.toggle(selector);
}
