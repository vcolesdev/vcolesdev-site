export default function PostsIndexRoute() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
          Recent Posts
        </h2>
        <p className="text-lg">
          A list of recent posts will be displayed here.
        </p>
      </div>
      <div>
        {/* This is where the list of posts will go. */}
        Posts
      </div>
    </div>
  );
}