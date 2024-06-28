"use client";

import { pageStyles } from "@/app/styles.module";
import LayoutFadeIn from "@/components/Layout/LayoutFadeIn";
import PageTitle from "@/components/Page/components/PageTitle";
import PageWrapper from "@/components/Page/components/PageWrapper";

export default function Page() {
  const pageTitle = "Recent Posts";
  const pageDesc = "A list of recent posts will be displayed here.";

  return (
    <LayoutFadeIn>
      <PageWrapper headerId="siteHeaderPosts">
        <PageTitle title="Writings" />
        <div>
          <div className="mb-8">
            <h2 className={pageStyles.page.subheader}>{pageTitle}</h2>
            <p className={pageStyles.page.description}>{pageDesc}</p>
          </div>
          <div>
            {/* This is where the list of posts will go. */}
            <p className="dark:text-charcoal-800">Coming Soon...</p>
          </div>
        </div>
      </PageWrapper>
    </LayoutFadeIn>
  );
}
