import "@fontsource/satisfy";
import "@fontsource/ibm-plex-sans";
import Header from "~/modules/Header";
import Footer from "~/modules/Footer";
import UnderConstruction from "~/modules/UnderConstruction";
import stylesheet from "~/assets/styles/main.css?url";
import {cssBundleHref} from "@remix-run/css-bundle";
import type {LinksFunction, MetaFunction} from "@remix-run/node";
import {useInView} from "@react-spring/web";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteError,
  useOutlet,
} from "@remix-run/react";

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
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap"
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
  const outlet = useOutlet();

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        scale: 0.9
      },
      to: {
        opacity: 1,
        scale: 1
      },
      config: { duration: 1000 },
    }),
    {
      once: true,
    }
  );

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
        <UnderConstruction />
        <Header />
        {outlet}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {/* add the UI you want your users to see */}
        <h1>Oh no!</h1>
        <p>Something went wrong.</p>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
