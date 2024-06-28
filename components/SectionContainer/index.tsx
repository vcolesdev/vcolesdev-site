"use client";

import Container from "@/components/Layout/Container";

import { SectionContainerProps } from "./api";

/**
 * Section Container
 * @component SectionContainer
 * @param children
 * @param extraClasses
 * @param noPadding
 */
export default function SectionContainer({ children, extraClasses, noPadding }: SectionContainerProps) {
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
