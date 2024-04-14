import tsconfigPaths from "vite-tsconfig-paths";
import {vitePlugin as remix} from "@remix-run/dev";
import {remixDevTools} from "remix-development-tools";
import {defineConfig} from "vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import {netlifyPlugin} from "@netlify/remix-edge-adapter/plugin";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter
      ],
    }),
    remixDevTools(),
    remix(),
    netlifyPlugin(),
    tsconfigPaths()
  ],
});
