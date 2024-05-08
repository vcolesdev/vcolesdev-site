import Container from "@/components/Layout/Container";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({children, ...props}: PageContainerProps) => (
  <Container.Page {...props}>{children}</Container.Page>
);

export default PageContainer;
