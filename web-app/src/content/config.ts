import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const docsCollection = defineCollection({ 
  schema: docsSchema({
    extend: z.object({
      // The following fields are used by the blog index page.
      description: z.string().optional(),
      author: z.string().optional(),
      publishDate: z.date().optional(),
    }),
  }),
});

export const collections = {
  'docs': docsCollection,
};