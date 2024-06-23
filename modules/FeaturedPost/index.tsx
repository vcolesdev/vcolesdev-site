import { truncateText } from "@/utils/global/truncateText";
import { FeaturedTestPost } from "@/utils/types/posts";
import Link from "next/link";

import PostArticle from "./components/PostArticle";

/**
 * FeaturedPost
 * @module FeaturedPost
 * @param props
 */
export default function FeaturedPost(props: FeaturedTestPost) {
  const { post } = props;
  const getExcerpt = () => truncateText(post.description, 125);

  return (
    <Link href={post.href}>
      <PostArticle />
    </Link>
  );
}
