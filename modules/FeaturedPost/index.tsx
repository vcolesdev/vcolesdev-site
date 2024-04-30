import Link from "next/link";
import styles from "./styles.module";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMore from "./PostMore";
import {truncateText} from "@/utils/global/truncateText";
import {FeaturedTestPost} from "@/utils/types/posts";

/**
 * FeaturedPost module
 * @param props
 * @constructor
 */
export default function FeaturedPost(props: FeaturedTestPost) {
  const {post} = props;

  const getExcerpt = () => truncateText(post.description, 125);

  return (
    <Link href={post.href}>
      <article key={post.id} className={styles.default}>
        <div className={styles.content}>
          <PostCategory categoryText={post.category!.title} />
          <PostTitle title={post.title} />
          <p className={styles.excerpt}>
            {getExcerpt()}
          </p>
          <PostMore moreText="Continue Reading" />
        </div>
      </article>
    </Link>
  );
}
