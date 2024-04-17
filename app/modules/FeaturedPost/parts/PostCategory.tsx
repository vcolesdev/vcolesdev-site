import styles from "~/modules/FeaturedPost/styles.module";

export default function PostCategory({categoryText}: {categoryText: string}) {
  const categoryStyles = styles.category.styles;
  const categoryContentStyles = styles.category.content;
  return (
    <div className={categoryStyles}>
      <span className={categoryContentStyles}>
        {categoryText}
      </span>
    </div>
  );
}