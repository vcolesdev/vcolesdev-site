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
