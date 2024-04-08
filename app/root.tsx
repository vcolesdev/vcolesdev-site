import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {cssBundleHref} from "@remix-run/css-bundle";
import Header from "~/modules/Header";
import Footer from "~/modules/Footer/Footer";

import type {LinksFunction, MetaFunction} from "@remix-run/node";

// Stylesheets
import stylesheet from "~/assets/styles/main.css?url";

// Fontsource fonts
import "@fontsource/satisfy";
import "@fontsource/ibm-plex-sans";

// CSS bundle by Remix
const cssBundleStyles = cssBundleHref
  ? [{rel: "stylesheet", href: cssBundleHref}]
  : [];

// Links to inject into the head of the document
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesheet,
  },
  ...cssBundleStyles,
];

// Meta tags to inject into the head of the document
export const meta: MetaFunction = () => {
  return [
    {
      name: "charset",
      content: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      {/* eslint-disable-next-line react/jsx-no-undef */}
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
