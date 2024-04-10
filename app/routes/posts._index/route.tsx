import {useOutletContext} from "@remix-run/react";

export default function PostsIndexRoute() {
  const posts: any[] = useOutletContext();

  return (
    <>
      <div className="mb-8">
        <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
          Things I`&apos;`ve Written
        </h2>
        <p className="text-lg">A list of articles I`&apos;`ve written.</p>
      </div>
    </>
  );
}