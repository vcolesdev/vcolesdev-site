import ProjectTitle from "@/app/projects/[slug]/ProjectTitle";
import ProjectLink from "@/app/projects/[slug]/ProjectLink";
import ProjectTags from "@/app/projects/[slug]/ProjectTags";
import {FeaturedProject} from "@/utils/types/projects";
import {IconTags, IconBrandGithub} from "@tabler/icons-react";

export default function Project({
  href,
  title,
  description,
  tags,
}: FeaturedProject) {
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
