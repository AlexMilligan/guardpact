
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight Docs Collection
const docsCollection = defineCollection({ 
  schema: docsSchema(),
});

// Blog Collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'docs': docsCollection,
  'blog': blogCollection,
};
