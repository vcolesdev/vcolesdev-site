"use client";

import { cardStyles as styles } from "@/modules/FeaturedProjectCard/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectCardProviderProps {
  children: ReactChildren;
  url: string;
}

interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

interface TitleProps {
  title: string;
}

interface DescProps {
  description: string;
}

export function MoreText({ children }: ChildrenProps) {
  return <span className={styles.links.span}>{children}</span>;
}

export function ProjectCardTitle({ title }: TitleProps) {
  return <h3 className={styles.project.title}>{title}</h3>;
}

export function ProjectCardDescription(props: DescProps) {
  return <p className={styles.project.description}>{props.description}</p>;
}

export function ProjectCardContent({ children }: ChildrenProps) {
  return <div>{children}</div>;
}

export function ProjectCardFooter({ children }: ChildrenProps) {
  return <footer>{children}</footer>;
}

export function ProjectCardProvider({ children, url }: ProjectCardProviderProps) {
  return (
    <Link className={styles.project.linkContainer} href={url}>
      {children}
    </Link>
  );
}
