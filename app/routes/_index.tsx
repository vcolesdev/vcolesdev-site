import type { MetaFunction } from "@remix-run/deno";
import Home from "~/routes/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Vanessa Coles" },
    { name: "description", content: "Fullstack Developer | @vcolesdev" },
  ];
};

export default function Index() {
  return <Home />;
}
