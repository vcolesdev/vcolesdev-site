import styles from "~/modules/FeaturedPost/styles.module";

export default function PostTitle({title}: {title: string}) {
  const titleStyles = styles.title.styles;
  const titleContentStyles = styles.title.content;
  return (
    <h2 className="mt-2">
      <div className={titleStyles}>
        <span className={titleContentStyles}>{title}</span>
      </div>
    </h2>
  );
}