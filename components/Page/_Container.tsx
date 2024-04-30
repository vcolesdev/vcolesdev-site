import React from "react";
import Container from "@/components/Layout/Container";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({children, ...props}: PageContainerProps) => (
  <Container.Page {...props}>{children}</Container.Page>
);

export default PageContainer;
