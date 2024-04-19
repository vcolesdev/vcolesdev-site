import FeaturedProjectCard from "@/modules/FeaturedProjectCard";
import {FeaturedProject} from "@/types/Projects";

export default function Projects({projects}: {projects: FeaturedProject[]}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
          Personal Projects
        </h2>
        <p className="text-lg">A list of featured, past, and present works.</p>
      </div>
      <div className="container mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-4 lg:mb-24 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-8">
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
        <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
          Oldies but Goodies
        </h2>
        <p className="text-lg">
          A list of past projects I enjoyed making but are no longer maintained.
        </p>
      </div>
    </div>
  );
}
