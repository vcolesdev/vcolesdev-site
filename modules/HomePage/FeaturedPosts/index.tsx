"use client";

import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionContainer from "@/components/SectionContainer";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import { SectionHeaderContainer } from "@/components/SectionHeader/components";

import styles from "./styles.module";

const CONTENT = {
  ctaText: "View All Posts",
  ctaLink: "/posts",
  description:
    "Coming Soon. Having experienced a majority of my adolescence in the early 2000's, writing for the web has always come naturally. Below are a few of my favorite posts.",
  eyebrowText: "Featured Posts",
  title: "Writings",
};

const FeaturedPostsContainer = SectionContainer;
const FeaturedPostsHeaderContainer = SectionHeaderContainer;
const FeaturedPostsHeader = SectionHeaderEyebrow;
const FeaturedPostsCta = FeaturedCta;

/**
 * Featured Posts
 * @module Homepage/FeaturedPosts
 * @param posts
 * @constructor
 */
export default function FeaturedPosts({ posts }: { posts: any[] }) {
  const { ctaText, ctaLink, description, eyebrowText, title } = CONTENT;

  return (
    <FeaturedPostsContainer extraClasses={styles.container}>
      <FeaturedPostsHeaderContainer>
        <FeaturedPostsHeader eyebrowText={eyebrowText} title={title} description={description} />
        <FeaturedPostsCta hasIcon ctaText={ctaText} href={ctaLink} />
      </FeaturedPostsHeaderContainer>
    </FeaturedPostsContainer>
  );
}
