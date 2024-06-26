"use client";

import LayoutFadeIn from "@/components/Layout/LayoutFadeIn";
import PageTitle from "@/components/Page/components/PageTitle";
import PageWrapper from "@/components/Page/components/PageWrapper";

export default function Page() {
  return (
    <LayoutFadeIn>
      <PageWrapper headerId="siteHeaderPhotos">
        <PageTitle description="This is the photos page." title="Snapshots" />
      </PageWrapper>
    </LayoutFadeIn>
  );
}
