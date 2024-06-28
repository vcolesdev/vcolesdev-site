/**
 * The animation variants for a drawing animation.
 * @hook useDrawVariants
 */
export default function useDrawVariants() {
  return {
    rest: {pathLength: 0, opacity: 0},
    animate: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
          opacity: {delay, duration: 0.01},
        },
      };
    },
  };
}
