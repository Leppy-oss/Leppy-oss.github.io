import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getEntries } from "@lib/utils";
import { HOME, SITE } from "@consts";

export async function GET(context: APIContext) {
  const posts = await getEntries("blog");

  return rss({
    title: SITE.NAME,
    description: HOME.DESCRIPTION,
    site: context.site ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
