import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { githubLoader } from "./lib/github";
import { SITE } from "./consts";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  thumbnail: z.url().optional(),
  demoURL: z.url().optional(),
  repoURL: z.url(),
});

const projects = defineCollection({
  loader: githubLoader({ owner: SITE.GITHUB_USERNAME, kind: "project" }),
  schema: portfolioSchema,
});

const playground = defineCollection({
  loader: githubLoader({ owner: SITE.GITHUB_USERNAME, kind: "playground" }),
  schema: portfolioSchema,
});

export const collections = { blog, projects, playground };
