import PageContainer from "~/components/Page/_Container";
import PageTitle from "~/components/Page/_Title";
import {Outlet} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/router";

export async function loader({params}: LoaderFunctionArgs) {
  return {
    ...params
  };
}

export default function PostsRoute() {
  return (
    <PageContainer>
      <PageTitle title="Writings" />
      <Outlet />
    </PageContainer>
  );
}
