import { ReactNode } from "react";
import { FeaturedProjectIconProps } from "@/utils/types/projects";

export interface FeaturedPostContainer {
  children: ReactNode | ReactNode[];
}

export interface FeaturedPostContent {
  children: ReactNode | ReactNode[];
}

export interface FeaturedPostExcerpt {
  excerpt: string;
}

export interface FeaturedPostCategory {
  categoryText: string;
}

export interface FeaturedPostTitle {
  title: string;
}

export interface FeaturedPostMore {
  moreText: string;
}

export interface FeaturedTestPost {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category?: {
    title: string;
    href: string;
  };
  author?: {
    name: string;
    href: string;
    imageUrl: string;
  };
}

export interface FeaturedPostIconProps extends FeaturedProjectIconProps {}
