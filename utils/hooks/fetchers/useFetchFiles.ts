import fetchFiles from "@/utils/global/fetchFiles";

export default function useFetchFiles(dir: string) {
  return fetchFiles(dir);
}