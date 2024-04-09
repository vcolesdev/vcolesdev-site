export enum FeaturedProjectCategories {
  nextjs ="nextjs",
  nodejs = "nodejs",
  python = "python",
  remix = "remix",
  storybook = "storybook",
  vite = "vite",
}

export interface FeaturedProject {
  _id: string | number;
  category: string;
  category_slug: FeaturedProjectCategories;
  title: string;
  description?: string;
  tags?: string[];
}
