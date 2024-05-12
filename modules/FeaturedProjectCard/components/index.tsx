"use client";

import {cardStyles as styles} from "@/modules/FeaturedProjectCard/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import Link from "next/link";

export function MoreText({children}: {children: ReactChildren}) {
  return <span className={styles.links.span}>{children}</span>;
}

export function ProjectCardTitle({title}: {title: string}) {
  return <h3 className={styles.project.title}>{title}</h3>;
}

export function ProjectCardDescription(props: {description: string}) {
  return <p className={styles.project.description}>{props.description}</p>;
}

export function ProjectCardContent({children}: {children: ReactChildren}) {
  return <div>{children}</div>;
}

export function ProjectCardFooter({children}: {children: ReactChildren}) {
  return <footer>{children}</footer>;
}

export function ProjectCardProvider({
  children,
  url,
}: {
  children: ReactChildren;
  url: string;
}) {
  return (
    <Link className="motion-project-card relative flex" href={url}>
      {children}
    </Link>
  );
}
