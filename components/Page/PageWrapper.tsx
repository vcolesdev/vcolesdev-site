"use client";

import Content from "@/app/content";
import PageContent from "@/components/Page/PageContent";
import {ReactNode} from "react";

export default function PageWrapper({
  headerId,
  children,
}: {
  headerId?: string;
  children: ReactNode | ReactNode[];
}) {
  return (
    <Content>
      <PageContent>{children}</PageContent>
    </Content>
  );
}
