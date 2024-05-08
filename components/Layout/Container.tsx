import {ContainerProps} from "@/utils/types/layout";
import classNames from "classnames";
import React from "react";
import styles from "./styles.module";

export default function Container({
  children,
  extraClasses,
  noPadding,
}: ContainerProps) {
  const elementClasses = () => {
    const classes = noPadding
      ? styles.container.noPadding
      : styles.container.styles;
    return classNames(classes, extraClasses && extraClasses);
  };
  return <div className={elementClasses()}>{children}</div>;
}

Container.Page = function PageContainer({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <Container extraClasses={styles.container.extraClasses} {...props}>
      {children}
    </Container>
  );
};
