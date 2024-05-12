import Container from "@/components/Layout/Container";
import styles from "@/components/Layout/styles.module";
import React from "react";

export default function PageContainer({
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
}
