import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData} from "@remix-run/react";

export async function loader({params}: LoaderFunctionArgs) {
  const title = params.title;
  console.log(`Current Page: ${title}`);
  return params.title;
}

export default function SinglePostRoute() {
  const routeData = useLoaderData<typeof loader>();

  return (
    <div>
      Single Post Route
      <p>{routeData}</p>
    </div>
  );
}
