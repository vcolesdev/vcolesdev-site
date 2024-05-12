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
          <PageTitle title="Writings" />
          <div>
            <div className="mb-8">
              <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
                Recent Posts
              </h2>
              <p className="text-lg">
                A list of recent posts will be displayed here.
              </p>
            </div>
            <div>
              {/* This is where the list of posts will go. */}
              Coming Soon...
            </div>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
