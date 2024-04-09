import featuredProjects from "~/data/featured-projects.json";
import {Outlet} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/router";

export async function loader({params}: LoaderFunctionArgs) {
  console.log(params)
  return params;
}

export default function ProjectsRoute() {
  return (
    <div className="container mx-auto max-w-7xl px-8 w-full">
      <h1>Projects</h1>
      <hr />
      <Outlet context={featuredProjects} />
    </div>
  )
}