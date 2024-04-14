import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkFrontmatter from 'remark-frontmatter'
import { readFile } from 'node:fs/promises'
import { compile } from '@mdx-js/mdx'

export default async function convertMdxFile(filePath: string) {
  const { value } = await compile(await readFile(filePath), {
    jsx: true,
    remarkPlugins: [
      remarkFrontmatter,
      // @ts-ignore
      remarkMdxFrontmatter
    ]
  });
  console.log(value);
  return value;
}
