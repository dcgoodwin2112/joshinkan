import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const instructors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/instructors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      rank: z.string(),
      rankNote: z.string(),
      role: z.string(),
      order: z.number(),
      teaches: z.string().optional(),
      photo: image().optional(),
    }),
});

export const collections = { instructors };
