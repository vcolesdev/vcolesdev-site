import React from "react";
import Container from "@/components/Layout/Container";

interface SectionContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}

export default function SectionContainer({children, extraClasses, noPadding}: SectionContainerProps) {
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
