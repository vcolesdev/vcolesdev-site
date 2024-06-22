import ProjectLink from "@/app/projects/[slug]/ProjectLink";
import ProjectTags from "@/app/projects/[slug]/ProjectTags";
import ProjectTitle from "@/app/projects/[slug]/ProjectTitle";
import {FeaturedProject} from "@/utils/types/projects";
import {IconBrandGithub, IconTags} from "@tabler/icons-react";
import {ReactNode} from "react";
import classNames from "classnames";

const projectStyles = {
  content: classNames([
    "flex",
    "items-center",
    "gap-4",
  ])
}

const iconStyles = {
  container: classNames([
    "text-2xl",
    "text-rosy_brown-300",
    "dark:text-charcoal-500",
  ])
}

function IconContainer({children}: {children: ReactNode | ReactNode[]}) {
  return (
    <div className={iconStyles.container}>
      {children}
    </div>
  );
}

export default function Project({
  href,
  title,
  description,
  tags,
}: FeaturedProject) {
  return (
    <>
      <ProjectTitle title={title} description={description} />
      <div className={`${projectStyles.content} mb-6`}>
        <IconContainer>
          <IconBrandGithub height={32} stroke={2} width={32} />
        </IconContainer>
        <ProjectLink href={href!} linkText="View Code on Github" />
      </div>
      <div className={projectStyles.content}>
        <IconContainer>
          <IconTags height={32} stroke={2} width={32} />
        </IconContainer>
        <ProjectTags tags={tags!} />
      </div>
    </>
  );
}
