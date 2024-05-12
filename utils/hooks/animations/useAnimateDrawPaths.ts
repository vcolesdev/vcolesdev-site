import {animate, AnimationScope} from "framer-motion";

export default function useAnimateDrawPaths(
  scope: AnimationScope,
  selector: string = "path"
) {
  const paths = scope.current.querySelectorAll(selector);

  for (let i = 0; i < paths.length; i++) {
    animate(
      paths[i],
      {pathLength: [0, 1]},
      {duration: 0.5, type: "spring", bounce: 0}
    );
  }
}
