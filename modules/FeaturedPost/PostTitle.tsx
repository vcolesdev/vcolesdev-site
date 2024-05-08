import styles from "@/modules/FeaturedPost/styles.module";

const PostTitle = ({title}: {title: string}) => (
  <h2 className="mt-2">
    <div className={styles.title.styles}>
      <span className={styles.title.content}>{title}</span>
    </div>
  </h2>
);

export default PostTitle;
