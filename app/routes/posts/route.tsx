import PageContainer from "~/components/PageContainer";
import PageTitle from "~/components/PageTitle";
import {Outlet} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/router";

export async function loader({params}: LoaderFunctionArgs) {
  console.log(params);
  return params;
}

export default function PostsRoute() {
  return (
    <PageContainer>
      <PageTitle title="Writings" />
      <Outlet />
    </PageContainer>
  );
}
