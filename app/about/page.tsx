import LayoutFadeIn from "@/components/Layout/LayoutFadeIn";
import PageTitle from "@/components/Page/components/PageTitle";
import PageWrapper from "@/components/Page/components/PageWrapper";

export default function Page() {
  return (
    <LayoutFadeIn>
      <PageWrapper headerId="siteHeaderAbout">
        <PageTitle description="This is the about page." title="About Me" />
      </PageWrapper>
    </LayoutFadeIn>
  );
}
