import type { MetadataRoute } from 'next';

// Landing pages and forms opt out with their own noindex tag; blocking them
// here would stop Google from ever seeing that tag, so only the API is disallowed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://www.vowvistos.com.br/sitemap.xml',
  };
}
