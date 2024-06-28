/**
 * Animate the Mobile Menu depending on the active state.
 * @hook useAnimateVariants
 * @param isActive
 */
export default function useAnimateVariants(isActive: boolean) {
  return isActive ? "visible" : "hidden";
}
