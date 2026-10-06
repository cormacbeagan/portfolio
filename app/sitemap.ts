import type { MetadataRoute } from 'next';
import { profile } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.url, lastModified: new Date() }];
}
