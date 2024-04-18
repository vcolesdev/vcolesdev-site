import React from "react";
import {IconSettings} from "~/types/Settings";

export enum FeaturedProjectCategories {
  nextjs = "nextjs",
  nodejs = "nodejs",
  python = "python",
  remix = "remix",
  storybook = "storybook",
  vite = "vite",
}

export interface FeaturedProjectCardProps {
  categorySlug: FeaturedProjectCategories;
  description: string;
  title: string;
  url: string;
}

export interface FeaturedProjectIconProps {
  children: React.ReactNode;
  iconStyles: string;
  iconSettings: IconSettings;
}

export interface FeaturedProject {
  _id: string | number;
  category: string;
  category_slug: FeaturedProjectCategories;
  slug: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
}

export type FeaturedProjectType = FeaturedProject;
export type FeaturedProjects = FeaturedProject | FeaturedProject[];
