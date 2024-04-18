import {RemixBrowser} from "@remix-run/react";
import {startTransition} from "react";
import {hydrateRoot} from "react-dom/client";

function hydrate() {
  startTransition(() => {
    hydrateRoot(document.getElementById("root")!, <RemixApp />);
  });
}

function RemixApp() {
  return (
    <RemixBrowser />
  );
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
