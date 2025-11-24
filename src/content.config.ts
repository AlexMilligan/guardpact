import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date().optional(),
  layout: z.string().optional(),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
};
