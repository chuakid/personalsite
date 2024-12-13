// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define your collection(s)
const experiences = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/experiences" }),
    schema: z.object({
        jobTitle: z.string(),
        company: z.string(),
        description: z.string(),
        date: z.string(),
        link: z.string().url().optional(),
        tags: z.array(z.string())
    })
});
const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        source: z.string().url().optional(),
        link: z.string().url().optional()
    })
});

const posts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        pubDate: z.date(),
        description: z.string()
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    experiences,
    projects,
    posts
};