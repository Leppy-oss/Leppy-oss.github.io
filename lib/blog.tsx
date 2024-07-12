import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import normalize from 'normalize-path';
import path from 'path';

export interface PostMeta {
    excerpt: string;
    slug: string;
    title: string;
    tags: string[];
    date: string;
    category: string;
    image?: string;
    author: {
        name: string;
        image: string;
    };
}

interface Post {
    content: string;
    meta: PostMeta;
}

const BLOG_PATH = path.join(process.cwd(), 'blog');

export const getSlugs = (): string[] => {
    const paths = sync(normalize(`${BLOG_PATH}/*.mdx`));

    return paths.map((filePath) => {
        const parts = filePath.split(/[/\\]/);
        const fileName = parts[parts.length - 1];
        const [slug] = fileName.split('.');
        return slug;
    });
};

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(BLOG_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? '',
            title: data.title ?? slug,
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date()).toUTCString().slice(0, 16),
            image: data.image ?? undefined,
            author: data.author ?? undefined,
            category: data.category ?? undefined,
        },
    };
};

export const getAllPosts = () => {
    const posts = getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
    return posts;
};