import clsx from "clsx";

export const tw = (classes: string[]) => clsx(classes);

export function mergeStyles(...arrays: string[][]) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
