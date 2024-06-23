import { styles } from "@/components/SectionHeader/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import classNames from "classnames";

import { SectionHeaderContainerProps } from "../api";

export function SectionHeaderWrapper({ children }: { children: ReactChildren }) {
  return <header className={styles.header}>{children}</header>;
}

export function SectionHeaderContainer({ children, noMarginBottom }: SectionHeaderContainerProps) {
  const defaultClasses = classNames("mb-12 lg:mb-20");
  const classes = classNames({
    [defaultClasses]: !noMarginBottom,
  });
  return <div className={classes}>{children}</div>;
}

export function SectionHeaderContent({ children }: { children: ReactChildren }) {
  return <div className={styles.content}>{children}</div>;
}

export function SectionEyebrow({ textContent }: { textContent: string }) {
  return (
    <>
      <span className={styles.eyebrow}>{textContent}</span>
    </>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return <h2 className={styles.title}>{title}</h2>;
}

export function SectionDescription({ size, textContent }: { size: "default" | "lg"; textContent: string }) {
  const classes = classNames(styles.description.styles, {
    [styles.description.default]: size === "default",
    [styles.description.large]: size === "lg",
  });

  return <p className={classes}>{textContent}</p>;
}
