import FeaturedProjectCard from "~/modules/FeaturedProjectCard";
import FeaturedCta from "~/modules/FeaturedCta/FeaturedCta";
import SectionContainer from "~/components/Section/_Container";
import SectionHeader from "~/components/Section/_Header";
import SectionHeaderContainer from "~/components/Section/_HeaderContainer";
import {FeaturedProjectType, FeaturedProjects} from "~/types/Projects";

export default function SectionFeaturedProjects({
  projects,
}: {
  projects: FeaturedProjects;
}) {
  return (
    <SectionContainer extraClasses="mb-12 lg:mb-24">
      <SectionHeaderContainer>
        <SectionHeader
          hasEyebrow
          eyebrowText="Featured Projects"
          title="Handpicked Favorites"
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />
        <FeaturedCta hasIcon ctaText="View All Projects" href="/projects" />
      </SectionHeaderContainer>
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-8">
        {projects &&
          projects.map((project: FeaturedProjectType) => (
            <FeaturedProjectCard
              key={project._id}
              categorySlug={project["category_slug"]}
              description={project.description || ""}
              title={project.title}
              url={`/projects/${project.slug}`}
            />
          ))}
      </div>
    </SectionContainer>
  );
}
