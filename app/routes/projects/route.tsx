import PageContainer from "~/components/Page/PageContainer";
import PageTitle from "~/components/Page/PageTitle";
import featuredProjects from "~/assets/data/featured-projects.json";
import {Outlet} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/router";

export async function loader({params}: LoaderFunctionArgs) {
  console.log(params);
  return params;
}

export default function ProjectsRoute() {
  return (
    <PageContainer>
      <PageTitle title="Projects" />
      <Outlet context={featuredProjects} />
    </PageContainer>
  );
}
