import LayoutFadeInUp from "@/components/Layout/LayoutFadeInUp";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Home from "@/modules/HomePage/Home";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Vanessa Coles - FullStack Engineer",
  description: "",
};

export default function Page() {
  return (
    <LayoutFadeInUp>
      <Header />
      <main className="pt-24">
        <Home />
      </main>
      <Footer />
    </LayoutFadeInUp>
  );
}
