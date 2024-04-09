import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData, useOutletContext} from "@remix-run/react";
import {FeaturedProject} from "~/types/Projects";

export async function loader({params}: LoaderFunctionArgs) {
  const slug = params.slug;
  console.log(`Current Page: ${slug}`);
  return params.slug;
}

const Project = ({title, description, tags}: FeaturedProject) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {tags?.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SingleProjectRoute() {
  const projects: unknown[] = useOutletContext();
  const slug = useLoaderData<typeof loader>();
  const currentProject = (projects as FeaturedProject[]).find(project => project.slug === slug);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Project {...currentProject} />
    </div>
  );
}