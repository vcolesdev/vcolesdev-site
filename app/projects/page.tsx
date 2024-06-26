"use client";

import featuredProjects from "@/assets/data/featured-projects.json";
import LayoutFadeIn from "@/components/Layout/LayoutFadeIn";
import PageTitle from "@/components/Page/components/PageTitle";
import PageWrapper from "@/components/Page/components/PageWrapper";

import Projects from "./Projects";

export default function Page() {
  return (
    <LayoutFadeIn>
      <PageWrapper headerId="siteHeaderProjects">
        <PageTitle title="Projects" />
        <Projects projects={featuredProjects} />
      </PageWrapper>
    </LayoutFadeIn>
  );
}
