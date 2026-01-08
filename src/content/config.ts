import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    blurb: z.string(), // Short description for table of contents (1-2 lines max)
    prepTime: z.string(),
    cookTime: z.string(),
    totalTime: z.string().optional(),
    servings: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
    images: z.array(z.string()).optional(),
    ingredients: z.array(z.string()),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
