import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import { defineHastPlugin } from "satteri";
import { SITE } from "./src/consts";
import { isExternal } from "./src/lib/links";

const externalLinks = defineHastPlugin({
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      if (isExternal(String(node.properties.href ?? ""), SITE.URL)) {
        ctx.setProperty(node, "target", "_blank");
      }
    },
  },
});

export default defineConfig({
  site: SITE.URL,
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks] }),
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret", optional: true }),
      WEB3FORMS_ACCESS_KEY: envField.string({ context: "client", access: "public", optional: true }),
    },
  },
  image: {
    domains: ["raw.githubusercontent.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
