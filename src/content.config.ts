import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    category: z.enum(['personal', 'work']),
    status: z.enum(['active', 'paused']).optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const adventures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/adventures' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['climbing', 'motorcycle', 'mountains']),
    date: z.coerce.date(),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, adventures };
