"use client";

import Link from "next/link";
import { ReactNode } from "react";

import styles from "../styles.module";

interface ProjectCardProviderProps {
  children: ReactNode | ReactNode[];
  url: string;
}

/**
 * Project Card Link
 * @component ProjectCardLink
 * @param children
 */
export function MoreText({ children }: { children: ReactNode | ReactNode[] }) {
  return <span className={styles.links.span}>{children}</span>;
}

/**
 * Project Card Title
 * @component ProjectCardTitle
 * @param title
 */
export function ProjectCardTitle({ title }: { title: string }) {
  return <h3 className={styles.project.title}>{title}</h3>;
}

/**
 * Project Card Description
 * @component ProjectCardDescription
 * @param props
 */
export function ProjectCardDescription(props: { description: string }) {
  return <p className={styles.project.description}>{props.description}</p>;
}

/**
 * Project Card Content
 * @component ProjectCardContent
 * @param children
 */
export function ProjectCardContent({ children }: { children: ReactNode | ReactNode[] }) {
  return <div>{children}</div>;
}

/**
 * Project Card Footer
 * @component ProjectCardFooter
 * @param children
 */
export function ProjectCardFooter({ children }: { children: ReactNode | ReactNode[] }) {
  return <footer>{children}</footer>;
}

/**
 * Project Card Provider
 * @component ProjectCardProvider
 * @param children
 * @param url
 */
export function ProjectCardProvider({ children, url }: ProjectCardProviderProps) {
  return (
    <Link className={styles.project.linkContainer} href={url}>
      {children}
    </Link>
  );
}
