import React from "react";
import classNames from "classnames";

export default function Container({
  children,
  extraClasses,
  noPadding,
}: {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}) {
  const defaultClasses = "container mx-auto px-4 sm:px-6 lg:px-8";
  const defaultClassesNoPadding = "container mx-auto";

  const elementClasses = () => {
    const classes = noPadding ? defaultClassesNoPadding : defaultClasses;
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
    <Container
      extraClasses="max-w-7xl pt-12 pb:24 md:py-24 lg:py-32"
      {...props}
    >
      {children}
    </Container>
  );
};
