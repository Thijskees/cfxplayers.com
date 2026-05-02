import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cfxplayers.com/sitemap.xml',
    host: 'https://cfxplayers.com',
  }
}