import {FeaturedProjectIconProps} from "@/utils/types/projects";

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

// export type FeaturedTestPosts = FeaturedTestPostInterface[];

export interface FeaturedPostIconProps extends FeaturedProjectIconProps {}
