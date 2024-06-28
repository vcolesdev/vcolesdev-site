"use client";

import Content from "@/app/content";
import PageContent from "@/components/Page/components/PageContent";

import type { PageWrapper } from "../types";

/**
 * Page Wrapper
 * @component PageWrapper
 * @param headerId
 * @param children
 */
export default function PageWrapper({ headerId, children }: PageWrapper) {
  return (
    <Content>
      <PageContent>{children}</PageContent>
    </Content>
  );
}
