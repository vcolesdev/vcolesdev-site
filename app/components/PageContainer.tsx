import React from "react";
import Container from "./Container";

export default function PageContainer({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <Container.Page {...props}>
      {children}
    </Container.Page>
  )
}
