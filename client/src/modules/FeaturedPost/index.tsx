import {
  FeaturedPostCategory,
  FeaturedPostContainer,
  FeaturedPostContent,
  FeaturedPostExcerpt,
  FeaturedPostTitle,
} from "@/modules/FeaturedPost/components";
import Link from "next/link";

import FeaturedPostMore from "./components/FeaturedPostMore";
import { FeaturedTestPost } from "./types";

/**
 * Featured Post
 * @module FeaturedPost
 * @param props
 */
export default function FeaturedPost(props: { post: FeaturedTestPost }) {
  const { post } = props;

  return (
    <Link href={post.href}>
      <FeaturedPostContainer>
        <FeaturedPostContent>
          <FeaturedPostCategory categoryText="Category" />
          <FeaturedPostTitle title="Title" />
          <FeaturedPostExcerpt excerpt="Excerpt" />
          <FeaturedPostMore moreText="Continue Reading" />
        </FeaturedPostContent>
      </FeaturedPostContainer>
    </Link>
  );
}
