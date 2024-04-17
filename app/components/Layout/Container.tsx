import React from "react";
import classNames from "classnames";
import styles from "./styles.module";
import {ContainerProps} from "~/types/Layout";

export default function Container({
  children,
  extraClasses,
  noPadding,
}: ContainerProps) {
  const elementClasses = () => {
    const classes = noPadding ? styles.container.noPadding : styles.container.styles;
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
    <Container extraClasses={styles.container.extraClasses}{...props}>
      {children}
    </Container>
  );
};
