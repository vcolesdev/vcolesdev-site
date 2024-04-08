import {Link} from "@remix-run/react";

function PlaceholderProjectCardIcon() {
  return (
    <span
      className={`inline-block rounded-xl bg-salmon_pink-800 p-2 text-rosy_brown-300 group-hover:bg-melon-400 group-hover:text-melon-900`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    </span>
  );
}

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
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Link to="/">
      <article
        className="
          group
          rounded-2xl
          bg-melon-900
          p-4
          transition
          hover:scale-105
          hover:shadow-lg
          hover:shadow-melon-300/10
          active:scale-100
          active:shadow-sm
          active:shadow-melon-300/20
          sm:p-6
        "
      >
        <PlaceholderProjectCardIcon />
        <ProjectCardTitle title={title} />
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-rosy_brown-200/70">
          {description}
        </p>
        <ProjectCardLink moreText="View Project" />
      </article>
    </Link>
  );
}
