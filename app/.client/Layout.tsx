import React from "react";
import UnderConstruction from "~/modules/UnderConstruction";
import Header from "~/modules/Header";
import Footer from "~/modules/Footer";
import {ClientOnly} from "remix-utils/client-only"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export default function Layout(props: LayoutProps) {
  return (
    <ClientOnly>
      {() => (
        <div>
          <UnderConstruction />
          <Header />
          {props.children}
          <Footer />
        </div>
      )}
    </ClientOnly>
  );
}