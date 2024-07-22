import React from "react";

import styles from "../styles.module";
import type {
  FeaturedPostCategory,
  FeaturedPostContainer,
  FeaturedPostContent,
  FeaturedPostExcerpt,
  FeaturedPostTitle,
} from "../types";

/**
 * Featured Post Container
 * @component FeaturedPostContainer
 * @param children
 */
export function FeaturedPostContainer({ children }: FeaturedPostContainer) {
  return <article className={styles.default}>{children}</article>;
}

/**
 * Featured Post Category
 * @component FeaturedPostCategory
 * @param categoryText
 */
export function FeaturedPostCategory({ categoryText }: FeaturedPostCategory) {
  return (
    <div className={styles.category.styles}>
      <span className={styles.category.content}>{categoryText}</span>
    </div>
  );
}

/**
 * Featured Post Content
 * @component FeaturedPostContent
 * @param children
 */
export function FeaturedPostContent({ children }: FeaturedPostContent) {
  return <div className={styles.content}>{children}</div>;
}

/**
 * Featured Post Title
 * @component FeaturedPostTitle
 * @param title
 */
export function FeaturedPostTitle({ title }: FeaturedPostTitle) {
  return (
    <h2 className="mt-2">
      <div className={styles.title.styles}>
        <span className={styles.title.content}>{title}</span>
      </div>
    </h2>
  );
}

/**
 * Featured Post Excerpt
 * @component FeaturedPostExcerpt
 * @param excerpt
 */
export function FeaturedPostExcerpt({ excerpt }: FeaturedPostExcerpt) {
  return <p className={styles.excerpt}>{excerpt}</p>;
}
