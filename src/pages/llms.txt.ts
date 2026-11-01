import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getEntries } from "@lib/utils";
import { BLOG, HOME, PLAYGROUND, PROJECTS, SITE, SOCIALS } from "@consts";

const url = (path: string) => new URL(path, SITE.URL).href;

type LinkItem = { title: string; href: string; description?: string };

function section(heading: string, items: LinkItem[]) {
  if (items.length === 0) return [];
  return [
    `## ${heading}`,
    "",
    ...items.map(({ title, href, description }) =>
      `- [${title}](${href})${description ? `: ${description}` : ""}`,
    ),
    "",
  ];
}

export const GET: APIRoute = async () => {
  const [posts, projects, playground] = await Promise.all([
    getEntries("blog"),
    getEntries("projects"),
    getEntries("playground"),
  ]);

  const toItem = (entry: CollectionEntry<"projects" | "playground">): LinkItem => ({
    title: entry.data.title,
    href: entry.data.demoURL ?? entry.data.repoURL,
    description: entry.data.description,
  });

  const body = [
    `# ${SITE.NAME}`,
    "",
    `> ${HOME.DESCRIPTION}`,
    "",
    ...section("Pages", [
      { title: "Home", href: url("/") },
      { title: PROJECTS.TITLE, href: url("/projects/"), description: PROJECTS.DESCRIPTION },
      { title: PLAYGROUND.TITLE, href: url("/playground/"), description: PLAYGROUND.DESCRIPTION },
      { title: BLOG.TITLE, href: url("/blog/"), description: BLOG.DESCRIPTION },
    ]),
    ...section("Projects", projects.map(toItem)),
    ...section("Playground", playground.map(toItem)),
    ...section("Blog posts", posts.map((post) => ({
      title: post.data.title,
      href: url(`/blog/${post.id}/`),
      description: post.data.description,
    }))),
    ...section("Elsewhere", SOCIALS.map((social) => ({
      title: social.NAME,
      href: social.HREF,
    }))),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
