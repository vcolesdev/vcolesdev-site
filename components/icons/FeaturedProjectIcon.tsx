"use client";

import { FeaturedProjectCategories } from "@/utils/types/projects";
import React from "react";

import { IconNextJs, IconNodeJs, IconPython, IconRemix, IconStorybook, IconVite, Placeholder } from "./BrandIcons";
import styles from "./styles.module";

function FeaturedProjectCategoryIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className={styles.wrapper}>{children}</span>
    </div>
  );
}

export default function FeaturedProjectCategoryIcon({
  categorySlug,
}: {
  categorySlug?: FeaturedProjectCategories | string;
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
