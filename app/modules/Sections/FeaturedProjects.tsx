import {useEffect, useState} from "react";
import FeaturedProjectCard from "~/modules/Featured/FeaturedProjectCard";
import FeaturedCta from "~/modules/Featured/FeaturedCta";
import SectionContainer from "~/components/SectionContainer";
import SectionHeader from "~/components/SectionHeader";
import SectionHeaderContainer from "~/components/SectionHeaderContainer";
import {FeaturedProject} from "../../../types/Projects";
import {generateRandomKey} from "~/utils/content";

export default function SectionFeaturedProjects() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);

  const fetchProjects = async () => {
    const res = await fetch("/featured-projects.json");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects().then(() =>
      console.log("Featured projects loaded successfully.")
    );
  }, []);

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
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {projects &&
          projects.map((project: FeaturedProject) => (
            <FeaturedProjectCard
              key={generateRandomKey()}
              title={project.title}
              description={project.description || ""}
            />
          ))}
      </div>
    </SectionContainer>
  );
}
