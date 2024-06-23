import styles from "../styles.module";
import type { FeaturedPostProvider, PostCategory, PostContent, PostExcerpt, PostTitle } from "../types";

/**
 * FeaturedPostProvider
 * @param children
 */
export function FeaturedPostProvider({ children }: FeaturedPostProvider) {
  return <article className={styles.default}>{children}</article>;
}

/**
 * PostCategory
 * @param categoryText
 */
export function PostCategory({ categoryText }: PostCategory) {
  return (
    <div className={styles.category.styles}>
      <span className={styles.category.content}>{categoryText}</span>
    </div>
  );
}

/**
 * PostContent
 * @param children
 */
export function PostContent({ children }: PostContent) {
  return <div className={styles.content}>{children}</div>;
}

/**
 * PostTitle
 * @param title
 */
export function PostTitle({ title }: PostTitle) {
  return (
    <h2 className="mt-2">
      <div className={styles.title.styles}>
        <span className={styles.title.content}>{title}</span>
      </div>
    </h2>
  );
}

/**
 * PostExcerpt
 * @param excerpt
 */
export function PostExcerpt({ excerpt }: PostExcerpt) {
  return <p className={styles.excerpt}>{excerpt}</p>;
}
