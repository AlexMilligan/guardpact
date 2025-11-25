import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: blogCollection,
};