import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import {flatRoutes} from "remix-flat-routes";
import {vitePlugin as remix} from "@remix-run/dev";
import {remixDevTools} from "remix-development-tools";
import {defineConfig} from "vite";
import {netlifyPlugin} from "@netlify/remix-edge-adapter/plugin";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter
      ],
    }),
    remixDevTools(),
    remix({
      routes: async defineRoutes => {
        return flatRoutes("routes", defineRoutes, {})
      }
    }),
    netlifyPlugin(),
    tsconfigPaths()
  ],
});
