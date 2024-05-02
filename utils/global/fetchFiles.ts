import path from "path";
import fs from "fs";

const fetchFiles = (dir: string) => {
  if (!dir) throw new Error("fetchFiles: Directory path is required.");
  const fullpath = path.join(process.cwd(), dir);
  const files = fs.readdirSync(fullpath);
  return files;
};

export default fetchFiles;