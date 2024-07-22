/**
 * hideElement()
 * @param element
 * Hide an element by adding the hidden class.
 */
export function hideElement(element: HTMLElement | null) {
  if (element) {
    element.classList.add("hidden");
  }
}

/**
 * showElement()
 * @param element
 * Show an element by removing the hidden class.
 */
export function showElement(element: HTMLElement | null) {
  if (element) {
    element.classList.remove("hidden");
  }
}

/**
 * toggleVisible()
 * @param element
 * Toggle the visibility of an element by adding or removing the hidden class.
 */
export function toggleVisible(element: HTMLElement | null) {
  if (element) {
    element.classList.toggle("hidden");
  }
}
