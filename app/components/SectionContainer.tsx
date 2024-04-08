import React from "react";
import Container from "./Container";

export default function SectionContainer({
  children,
  extraClasses,
  noPadding,
}: {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}) {
  const renderContainer = () => {
    if (extraClasses) {
      return (
        <Container noPadding={noPadding} extraClasses={extraClasses}>
          {children}
        </Container>
      );
    } else {
      return <Container>{children}</Container>;
    }
  };
  return renderContainer();
}
