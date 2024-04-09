import tsconfigPaths from "vite-tsconfig-paths";
import {vitePlugin as remix} from "@remix-run/dev";
import {remixDevTools} from "remix-development-tools";
import {defineConfig} from "vite";
import {netlifyPlugin} from "@netlify/remix-edge-adapter/plugin";

export default defineConfig({
  plugins: [remixDevTools(), remix(), netlifyPlugin(), tsconfigPaths()],
});
