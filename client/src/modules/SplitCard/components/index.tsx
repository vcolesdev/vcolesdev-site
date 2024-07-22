"use client";

import { ReactNode } from "react";

import styles from "../styles.module";

/**
 * Split Card Wrapper
 * @coomponent SplitCardWrapper
 * @param children
 */
export function SplitCardWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  return <section className={styles.section.styles}>{children}</section>;
}

/**
 * Split Card Header Wrapper
 * @component SplitCardHeaderWrapper
 * @param children
 */
export function SplitCardHeaderWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className="py-0 sm:py-8 md:py-16 lg:py-24 xl:py-32">{children}</div>;
}

/**
 * Split Card Header
 * @component SplitCardHeader
 * @param children
 */
export function SplitCardContent({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className={styles.section.content}>{children}</div>;
}

/**
 * Split Card Image
 * @component SplitCardImage
 * @param children
 */
export function SplitCardImage({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className={styles.image.wrapper}>{children}</div>;
}

/**
 * Split Card Header Content
 * @component SplitCardHeaderContent
 * @param children
 */
export function SplitCardHeaderContent({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className={styles.section.header.content}>{children}</div>;
}

/**
 * Split Card Text
 * @component SplitCardText
 * @param children
 */
export function SplitCardText({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className={styles.section.textContent}>{children}</div>;
}
