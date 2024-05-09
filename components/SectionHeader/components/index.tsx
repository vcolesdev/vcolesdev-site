import classNames from "classnames";
import {ReactChildren} from "@/utils/types/layout";
import {styles} from "@/components/SectionHeader/styles.module";
import {SectionHeaderContainerProps} from "../api";

export function SectionHeaderWrapper({children}: {children: ReactChildren}) {
  return (
    <header className={styles.header}>{children}</header>
  );
}

export function SectionHeaderContainer({
   children,
   noMarginBottom,
 }: SectionHeaderContainerProps) {
  const classes = classNames({
    ["mb-12 lg:mb-20"]: !noMarginBottom,
  });
  return <div className={classes}>{children}</div>;
}

export function SectionHeaderContent({children}: {children: ReactChildren}) {
  return (
    <div className={styles.content}>{children}</div>
  );
}

export function SectionEyebrow({textContent}: {textContent: string}) {
  return (
    <span className={styles.eyebrow}>{textContent}</span>
  );
}

export function SectionTitle({title}: {title: string}) {
  return (
    <h2 className={styles.title}>{title}</h2>
  );
}

export function SectionDescription({
  size,
  textContent,
}: {
  size: "default" | "lg";
  textContent: string;
}) {
  const classes = classNames(
    styles.description, {
    [styles.description.large]: size === "lg",
    [styles.description.default]: size === "default",
  })
  return <p className={classes}>{textContent}</p>
}