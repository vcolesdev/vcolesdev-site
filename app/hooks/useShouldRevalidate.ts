import type {ShouldRevalidateFunction} from "@remix-run/react";

export const shouldRevalidate: ShouldRevalidateFunction = () => {
  return true;
};
