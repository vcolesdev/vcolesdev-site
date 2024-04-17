import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData, useOutletContext} from "@remix-run/react";
import {FeaturedProject} from "~/types/Projects";
import {IconTags, IconBrandGithub} from "@tabler/icons-react";

export async function loader({params}: LoaderFunctionArgs) {
  const slug = params.slug;
  console.log(`Current Page: ${slug}`);
  return params.slug;
}

function ProjectTags({tags}: {tags: string[]}) {
  return (
    <ul className="flex gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            block
            rounded-xl
            border-2
            border-melon-300/20
            px-2.5
            py-1.5
            text-sm
            font-semibold
            tracking-tight
            text-melon-300
            hover:border-melon-400"
        >
          {tag}
        </span>
      ))}
    </ul>
  );
}

function ProjectTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
}

function ProjectLink({href, linkText}: {href: string; linkText: string}) {
  return (
    <p>
      <a
        href={href}
        className="cursor-pointer font-semibold text-melon-300 hover:text-melon-400"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </p>
  );
}

function Project({href, title, description, tags}: FeaturedProject) {
  return (
    <>
      <ProjectTitle title={title} description={description} />
      <div className="mb-6 flex items-center gap-4">
        <div className="text-2xl text-rosy_brown-300">
          <IconBrandGithub height={32} stroke={2} width={32} />
        </div>
        <ProjectLink href={href!} linkText="View Code on Github" />
      </div>
      <div className="flex items-center gap-4">
        <div className="text-2xl text-rosy_brown-300">
          <IconTags height={32} stroke={2} width={32} />
        </div>
        <ProjectTags tags={tags!} />
      </div>
    </>
  );
}

export default function SingleProjectRoute() {
  const projects: unknown[] = useOutletContext();
  const slug = useLoaderData<typeof loader>();
  const currentProject = (projects as FeaturedProject[]).find(
    (project) => project.slug === slug
  );

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Project {...currentProject} />
    </div>
  );
}
