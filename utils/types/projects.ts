import React, { ReactNode } from "react";

import { IconSettings } from "./settings";

export enum FeaturedProjectCategories {
  nextjs = "nextjs",
  nodejs = "nodejs",
  python = "python",
  remix = "remix",
  storybook = "storybook",
  vite = "vite",
}

export interface FeaturedProjectCardProps {
  categorySlug?: FeaturedProjectCategories | string;
  description: string;
  title: string;
  url: string;
}

export interface FeaturedProjectIconProps {
  children: ReactNode | ReactNode[];
  settings: IconSettings;
  styles: string;
}

export interface FeaturedProject {
  category: string;
  category_slug?: FeaturedProjectCategories | string;
  description: string;
  href: string;
  id: string | number;
  slug: string;
  tags: string[];
  title: string;
}

export type FeaturedProjectType = FeaturedProject;
