import * as React from "react";
import { useHydrated } from "~/hooks/useHydrated";
/**
 * Render the children only after the JS has loaded client-side. Use an optional
 * fallback component if the JS is not yet loaded.
 *
 * Example: Render a Chart component if JS loads, renders a simple FakeChart
 * component server-side or if there is no JS. The FakeChart can have only the
 * UI without the behavior or be a loading spinner or skeleton.
 * ```tsx
 * return (
 *   <ClientOnly fallback={<FakeChart />}>
 *     {() => <Chart />}
 *   </ClientOnly>
 * );
 * ```
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: () => React.ReactNode | React.ReactNode[];
  fallback: null;
}) {
  return useHydrated()
    ? React.createElement(React.Fragment, null, children())
    : React.createElement(React.Fragment, null, fallback);
}
