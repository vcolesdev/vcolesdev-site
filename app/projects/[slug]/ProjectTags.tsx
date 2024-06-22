"use client";

import classNames from "classnames";
import {motion} from "framer-motion";

const tagStyles = {
  container: classNames(["flex", "gap-3"]),
  element: classNames([
    "block",
    "rounded-xl",
    "border-2",
    "border-melon-300/20",
    "px-2.5",
    "py-1.5",
    "text-base",
    "font-semibold",
    "tracking-tight",
    "text-melon-300",
    "hover:border-melon-400",
    "dark:border-charcoal-400/80",
    "dark:text-rose-400",
    "dark:hover:border-rose-400",
 ])
};

export default function ProjectTags({tags}: {tags: string[]}) {
  return (
    <div className={tagStyles.container}>
      {tags.map((tag) => (
        <motion.span key={tag} className={tagStyles.element}>
          {tag}
        </motion.span>
      ))}
    </div>
  );
}
