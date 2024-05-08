import fs from "fs";

export default async function fetchLocalPosts() {
  const query = fs.readdirSync("app/posts", {
    recursive: true,
  });

  return (
    query &&
    query.filter((file) => {
      if (file.includes(".mdx") || file.includes(".md")) {
        return file;
      }
    })
  );
}
