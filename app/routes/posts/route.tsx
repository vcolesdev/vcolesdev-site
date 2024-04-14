import PageContainer from "~/components/Page/PageContainer";
import PageTitle from "~/components/Page/PageTitle";
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
