import React from "react";
import classNames from "classnames";
import {FeaturedProjectCategories} from "~/types/Projects";
import {
  IconNextJs,
  IconNodeJs,
  IconPython,
  IconRemix,
  IconStorybook,
  IconVite,
  Placeholder,
} from "./BrandIcons";

const styles = {
  wrapper: classNames([
    "relative",
    "inline-block",
    "rounded-xl",
    "border",
    "border-transparent",
    "bg-salmon_pink-800",
    "p-2",
    "text-rosy_brown-300",
    "group-hover:-translate-y-1",
    "group-hover:border-melon-300/20",
    "group-hover:bg-melon-400",
    "group-hover:text-melon-900",
    "group-hover:shadow-md",
    "group-hover:shadow-melon-300/20",
  ])
}

function FeaturedProjectCategoryIconWrapper({children}: {children: React.ReactNode}) {
  return (
    <div>
      <span className={styles.wrapper}>
        {children}
      </span>
    </div>
  );
}

export default function FeaturedProjectCategoryIcon({
  categorySlug,
}: {
  categorySlug: FeaturedProjectCategories;
}) {
  function CategoryIcon() {
    switch (categorySlug) {
      case FeaturedProjectCategories.nextjs:
        return <FeaturedProjectCategoryIcon.IconNextJs />;
      case FeaturedProjectCategories.nodejs:
        return <FeaturedProjectCategoryIcon.IconNodeJs />;
      case FeaturedProjectCategories.python:
        return <FeaturedProjectCategoryIcon.IconPython />;
      case FeaturedProjectCategories.remix:
        return <FeaturedProjectCategoryIcon.IconRemix />;
      case FeaturedProjectCategories.storybook:
        return <FeaturedProjectCategoryIcon.IconStorybook />;
      case FeaturedProjectCategories.vite:
        return <FeaturedProjectCategoryIcon.IconVite />;
      default:
        return <FeaturedProjectCategoryIcon.Placeholder />;
    }
  }
  return (
    <FeaturedProjectCategoryIconWrapper>
      <CategoryIcon />
    </FeaturedProjectCategoryIconWrapper>
  );
}

FeaturedProjectCategoryIcon.Placeholder = Placeholder;
FeaturedProjectCategoryIcon.IconNextJs = IconNextJs;
FeaturedProjectCategoryIcon.IconNodeJs = IconNodeJs;
FeaturedProjectCategoryIcon.IconPython = IconPython;
FeaturedProjectCategoryIcon.IconRemix = IconRemix;
FeaturedProjectCategoryIcon.IconStorybook = IconStorybook;
FeaturedProjectCategoryIcon.IconVite = IconVite;
