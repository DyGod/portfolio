import type { Config } from "@react-router/dev/config";
import { projects } from "./app/data/resume";

export default {
  // Static site: every page is pre-rendered to HTML at build time.
  // Deploy the contents of build/client/ to any static host.
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...projects.map((project) => `/projects/${project.slug}`),
    ];
  },
} satisfies Config;
