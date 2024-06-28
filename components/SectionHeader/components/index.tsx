import { ReactChildren } from "@/utils/types/layout";
import classNames from "classnames";

import { SectionHeaderContainerProps } from "../api";
import styles from "../styles.module";

/**
 * Section Header Wrapper
 * @component SectionHeaderWrapper
 * @param children
 */
export function SectionHeaderWrapper({ children }: { children: ReactChildren }) {
  return <header className={styles.header}>{children}</header>;
}

/**
 * Section Header Container
 * @component SectionHeaderContainer
 * @param children
 * @param noMarginBottom
 */
export function SectionHeaderContainer({ children, noMarginBottom }: SectionHeaderContainerProps) {
  const defaultClasses = classNames("mb-12 lg:mb-20");
  const classes = classNames({
    [defaultClasses]: !noMarginBottom,
  });
  return <div className={classes}>{children}</div>;
}

/**
 * Section Header Content
 * @component SectionHeaderContent
 * @param children
 */
export function SectionHeaderContent({ children }: { children: ReactChildren }) {
  return <div className={styles.content}>{children}</div>;
}

/**
 * Section Eyebrow
 * @component SectionEyebrow
 * @param textContent
 */
export function SectionEyebrow({ textContent }: { textContent: string }) {
  return (
    <>
      <span className={styles.eyebrow}>{textContent}</span>
    </>
  );
}

/**
 * Section Title
 * @component SectionTitle
 * @param title
 */
export function SectionTitle({ title }: { title: string }) {
  return <h2 className={styles.title}>{title}</h2>;
}

/**
 * Section Description
 * @component SectionDescription
 * @param size
 * @param textContent
 */
export function SectionDescription({ size, textContent }: { size: "default" | "lg"; textContent: string }) {
  const classes = classNames(styles.description.styles, {
    [styles.description.default]: size === "default",
    [styles.description.large]: size === "lg",
  });

  return <p className={classes}>{textContent}</p>;
}
