import Content from "@/app/content";
import LayoutFadeInUp from "@/components/Layout/LayoutFadeInUp";
import Home from "@/modules/HomePage/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanessa Coles - FullStack Engineer",
  description: "",
};

export default function Page() {
  return (
    <LayoutFadeInUp>
      <Content>
        <Home />
      </Content>
    </LayoutFadeInUp>
  );
}
