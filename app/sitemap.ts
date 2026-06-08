import type { MetadataRoute } from 'next'
import { BASE_URL } from '../lib/seo/site'
import { getIndexableRegistry } from '../lib/seo/page-registry'

export default function sitemap(): MetadataRoute.Sitemap {
  const registry = getIndexableRegistry()

  return registry.map((item) => ({
    url: `${BASE_URL}${item.path}`,
    lastModified: item.lastModified ? new Date(item.lastModified) : new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))
}
