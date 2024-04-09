import FeaturedProjectCard from "~/modules/Featured/FeaturedProjectCard";
import {useOutletContext} from "@remix-run/react";
import {FeaturedProject} from "~/types/Projects";

export default function ProjectsIndexRoute() {
  const projects: FeaturedProject[] = useOutletContext();

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-kanit mb-6 tracking-tight text-4xl font-semibold">
          Personal Projects
        </h2>
        <p className="text-lg">A list of featured, past, and present works.</p>
      </div>
      <div
        className="container mx-auto mb-12 lg:mb-24 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-8">
        {projects &&
          projects.map((project) => (
            <FeaturedProjectCard
              key={project._id}
              categorySlug={project["category_slug"]}
              description={project.description || ""}
              title={project.title}
              url={`/projects/${project.slug}`}
            />
          ))}
      </div>
      <div className="mb-8">
        <h2 className="font-kanit mb-6 tracking-tight text-4xl font-semibold">
          Oldies but Goodies
        </h2>
        <p className="text-lg">
          A list of past projects I enjoyed making but are no longer maintained.
        </p>
      </div>
    </div>
  )
}