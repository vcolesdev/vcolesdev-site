import { ReactNode } from "react";

export interface FeaturedPostProvider {
  children: ReactNode | ReactNode[];
}

export interface PostContent {
  children: ReactNode | ReactNode[];
}

export interface PostExcerpt {
  excerpt: string;
}

export interface PostCategory {
  categoryText: string;
}

export interface PostTitle {
  title: string;
}

export interface PostMore {
  moreText: string;
}
