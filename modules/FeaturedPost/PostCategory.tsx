import styles from "@/modules/FeaturedPost/styles.module";

const PostCategory = ({categoryText}: {categoryText: string}) => (
  <div className={styles.category.styles}>
    <span className={styles.category.content}>{categoryText}</span>
  </div>
);

export default PostCategory;
