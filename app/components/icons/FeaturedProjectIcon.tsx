import React from "react";
import {FeaturedProjectCategories} from "~/types/Projects";
import {
  IconNextJs,
  IconNodeJs,
  IconPython,
  IconRemix,
  IconStorybook,
  IconVite,
  Placeholder
} from "./BrandIcons";

function FeaturedProjectIconWrapper({children}: {children: React.ReactNode}) {
  return (
    <span className="
      relative
      inline-block
      rounded-xl
      border
      border-transparent
      bg-salmon_pink-800
      p-2
      text-rosy_brown-300
      group-hover:shadow-md
      group-hover:shadow-melon-300/20
      group-hover:border-melon-300/20
      group-hover:bg-melon-400
      group-hover:text-melon-900
      group-hover:-translate-y-1
      "
    >
      {children}
    </span>
  )
}

export default function FeaturedProjectIcon({categorySlug}: {categorySlug: FeaturedProjectCategories}) {
  function CategoryIcon() {
    switch (categorySlug) {
      case FeaturedProjectCategories.nextjs:
        return <FeaturedProjectIcon.IconNextJs />
      case FeaturedProjectCategories.nodejs:
        return <FeaturedProjectIcon.IconNodeJs />
      case FeaturedProjectCategories.python:
        return <FeaturedProjectIcon.IconPython />
      case FeaturedProjectCategories.remix:
        return <FeaturedProjectIcon.IconRemix />
      case FeaturedProjectCategories.storybook:
        return <FeaturedProjectIcon.IconStorybook />
      case FeaturedProjectCategories.vite:
        return <FeaturedProjectIcon.IconVite />
      default:
        return <FeaturedProjectIcon.Placeholder />
    }
  }
  return (
    <FeaturedProjectIconWrapper>
      <CategoryIcon />
    </FeaturedProjectIconWrapper>
  )
}

FeaturedProjectIcon.Placeholder = Placeholder;
FeaturedProjectIcon.IconNextJs = IconNextJs;
FeaturedProjectIcon.IconNodeJs = IconNodeJs;
FeaturedProjectIcon.IconPython = IconPython;
FeaturedProjectIcon.IconRemix = IconRemix;
FeaturedProjectIcon.IconStorybook = IconStorybook;
FeaturedProjectIcon.IconVite = IconVite;