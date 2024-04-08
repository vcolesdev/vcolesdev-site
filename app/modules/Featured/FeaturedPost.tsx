import {FeaturedPostProps} from "../../../types/Posts";
import {truncateText} from "~/utils/content";
import {Link} from "@remix-run/react";

function FeaturedPostCategory({categoryText}: {categoryText: string}) {
  return (
    <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-melon-700 px-3 py-1.5 group-hover:bg-melon-900 group-hover:text-rosy_brown-200">
      <span className="text-sm font-medium tracking-tight text-melon-300 group-hover:font-medium group-hover:text-melon-300">
        {categoryText}
      </span>
    </div>
  );
}

function FeaturedPostTitle({title}: {title: string}) {
  return (
    <h2 className="mt-2">
      <div className="tracking-tight group-hover:text-white">
        <span className="text-xl font-medium">{title}</span>
      </div>
    </h2>
  );
}

function FeaturedPostMore({moreText}: {moreText: string}) {
  return (
    <div className="mt-6 inline-flex items-center gap-x-1">
      <span className="font-medium tracking-tight group-hover:text-white">
        {moreText}
      </span>
      <svg
        className="mt-[3px] size-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1 group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
  );
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const {post} = props;
  const getExcerpt = () => truncateText(post.description, 125);

  return (
    <Link to={post.href}>
      <article
        key={post.id}
        className="
          cursor
          group
          rounded-[28px]
          border-2
          border-transparent
          bg-none
          py-8
          hover:bg-melon-400
          hover:bg-cover
          hover:shadow-xl
          hover:shadow-melon-300/20
          active:border-melon-300/15
          active:shadow-sm
          active:shadow-melon-300/30
        "
      >
        <div className="relative max-w-2xl px-8">
          <FeaturedPostCategory categoryText={post.category.title} />
          <FeaturedPostTitle title={post.title} />
          <p className="mt-4 leading-6 text-rosy_brown-200/60 group-hover:text-melon-900 lg:pr-16">
            {getExcerpt()}
          </p>
          <FeaturedPostMore moreText="Continue Reading" />
        </div>
      </article>
    </Link>
  );
}
