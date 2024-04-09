import FeaturedProjectIcon from "~/components/icons/FeaturedProjectIcon";
import {Link} from "@remix-run/react";
import {FeaturedProjectCategories} from "~/types/Projects";

function ProjectCardTitle({title}: {title: string}) {
  return <h3 className="mt-0.5 text-lg font-medium">{title}</h3>;
}

function ProjectCardLink({moreText}: {moreText: string}) {
  return (
    <div className="mt-6 inline-flex items-center gap-x-1">
      <span className="text-sm font-medium tracking-tight">{moreText}</span>
      <svg
        className="mt-[1px] size-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
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

export default function FeaturedProjectCard({
  categorySlug,
  description,
  title,
  url
}: {
  categorySlug: FeaturedProjectCategories;
  description: string;
  title: string;
  url: string;
}) {
  return (
    <Link className="relative flex" to={url}>
      <article
        className="
          group
          rounded-2xl
          bg-melon-900
          p-4
          transition
          w-full
          hover:scale-105
          hover:shadow-lg
          hover:shadow-melon-300/10
          active:scale-100
          active:shadow-sm
          active:shadow-melon-300/20
          sm:p-6
        "
      >
        <FeaturedProjectIcon categorySlug={categorySlug} />
        <ProjectCardTitle title={title} />
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-rosy_brown-200/70">
          {description}
        </p>
        <ProjectCardLink moreText="View Project" />
      </article>
    </Link>
  );
}
