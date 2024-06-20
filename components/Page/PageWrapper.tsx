"use client";

import PageContent from "@/components/Page/PageContent";
import useOnToggleTheme from "@/hooks/theme/useOnToggleTheme";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import {ReactNode} from "react";

export default function PageWrapper({
  headerId,
  children,
}: {
  headerId: string;
  children: ReactNode | ReactNode[];
}) {
  const {onToggleDarkTheme, onToggleLightTheme, onToggleSystemTheme} =
    useOnToggleTheme();

  return (
    <>
      <Header
        id={headerId}
        onToggleLightTheme={() => onToggleLightTheme()}
        onToggleDarkTheme={() => onToggleDarkTheme()}
        onToggleSystemTheme={() => onToggleSystemTheme()}
      />
      <main className="pt-24">
        <PageContent>{children}</PageContent>
      </main>
      <Footer />
    </>
  );
}
