import { FeaturedProjectIconProps } from "@/utils/types/projects";

// @todo Move these to the correct location, we want these to be local to their component directory.
export interface FeaturedTestPostInterface {
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

export type FeaturedTestPost = {
  post: FeaturedTestPostInterface;
};

export interface FeaturedPostIconProps extends FeaturedProjectIconProps {}
