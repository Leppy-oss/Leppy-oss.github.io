import { getCollection, type CollectionKey } from "astro:content";
import type { ImageMetadata } from "astro";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(text: string) {
  const wordCount = text.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return `${Math.round(wordCount / 200 + 1)} min read`;
}

export async function getEntries<C extends CollectionKey>(collection: C) {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const headshots = import.meta.glob<ImageMetadata>("../assets/headshot.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

export const headshot: ImageMetadata | undefined = Object.values(headshots)[0];
