import classNames from "classnames";
import Link from "next/link";
import styles from "./styles.module";
import PostCategory from "./parts/PostCategory";
import PostTitle from "./parts/PostTitle";
import PostMore from "./parts/PostMore";
import {truncateText} from "@/utils";
import {FeaturedTestPost} from "@/types/Posts";

/**
 * FeaturedPost module
 * @param props
 * @constructor
 */
export default function FeaturedPost(props: FeaturedTestPost) {
  const {post} = props;

  const featuredPostClasses = classNames(styles.default, {});
  const featuredPostExcerptClasses = classNames(styles.excerpt);
  const featuredPostContentClasses = classNames("relative", "max-w-2xl", "px-8");

  const getExcerpt = () => truncateText(post.description, 125);

  return (
    <Link href={post.href}>
      <article key={post.id} className={featuredPostClasses}>
        <div data-name="featured-post-content" className={featuredPostContentClasses}>
          <PostCategory categoryText={post.category!.title} />
          <PostTitle title={post.title} />
          <p className={featuredPostExcerptClasses}>
            {getExcerpt()}
          </p>
          <PostMore moreText="Continue Reading" />
        </div>
      </article>
    </Link>
  );
}
