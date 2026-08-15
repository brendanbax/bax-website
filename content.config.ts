import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    insights: defineCollection({
      type: 'page',
      source: 'insights/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false)
      })
    })
  }
})
