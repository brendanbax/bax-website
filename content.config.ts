import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    insights: defineCollection({
      type: 'page',
      source: 'insights/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string()
      })
    })
  }
})
