import PostMore from "@/modules/FeaturedPost/components/PostMore";
import {
  FeaturedPostProvider,
  PostCategory,
  PostContent,
  PostExcerpt,
  PostTitle,
} from "@/modules/FeaturedPost/components/index";

/**
 * PostArticle
 */
export default function PostArticle() {
  return (
    <FeaturedPostProvider>
      <PostContent>
        <PostCategory categoryText="Category" />
        <PostTitle title="Title" />
        <PostExcerpt excerpt="Excerpt" />
        <PostMore moreText="Continue Reading" />
      </PostContent>
    </FeaturedPostProvider>
  );
}
