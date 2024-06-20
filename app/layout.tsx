import * as React from "react";

import "@/assets/styles/main.css";

import {Providers} from "./providers";

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
