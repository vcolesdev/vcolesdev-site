import PageContainer from "@/components/Page/PageContainer";
import PageTitle from "@/components/Page/PageTitle";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <PageContainer>
          <PageTitle description="This is the photos page." title="Snapshots" />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
