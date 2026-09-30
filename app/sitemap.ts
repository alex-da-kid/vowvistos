import type { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/wordpress';
import { CANADA_EXTENSION_REVIEWED } from '@/lib/content-dates';

const BASE = 'https://www.vowvistos.com.br';

// Only indexable (site) pages. The Google Ads landing pages and the
// formulario-* intake forms are noindex, so they stay out of the sitemap.
const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastModified?: string }[] = [
  { path: '',                        priority: 1.0, changeFrequency: 'weekly' },
  { path: '/visto-americano',        priority: 0.9, changeFrequency: 'monthly' },
  { path: '/assessoria-i-539',       priority: 0.9, changeFrequency: 'monthly' },
  { path: '/visto-canadense',        priority: 0.8, changeFrequency: 'monthly' },
  { path: '/extensao-de-estadia-canada', priority: 0.8, changeFrequency: 'monthly', lastModified: CANADA_EXTENSION_REVIEWED },
  { path: '/visto-chines',           priority: 0.7, changeFrequency: 'monthly' },
  { path: '/outros-paises',          priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog',                   priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contato',                priority: 0.5, changeFrequency: 'yearly' },
  { path: '/politica-de-privacidade', priority: 0.1, changeFrequency: 'yearly' },
  { path: '/termos-de-uso',          priority: 0.1, changeFrequency: 'yearly' },
  { path: '/politica-de-cookies',    priority: 0.1, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.lastModified && { lastModified: p.lastModified }),
  }));

  let posts: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllPostSlugs();
    posts = slugs.map((s) => ({
      url: `${BASE}/blog/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));
  } catch {
    // WordPress unreachable at build time: still ship the static pages.
  }

  return [...pages, ...posts];
}
