const WP_URL = process.env.NEXT_PUBLIC_WP_URL!;

const fetchOpts = (revalidate = 3600) => ({
  next: { revalidate },
  signal: AbortSignal.timeout(8000),
});

export async function getPage(slug: string) {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages?slug=${slug}&_fields=id,slug,title,content,acf`, fetchOpts());
  const pages = await res.json();
  return pages[0] ?? null;
}

export async function getPosts(perPage = 9, page = 1) {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed&_fields=id,slug,title,excerpt,date,_links,_embedded`,
    fetchOpts(),
  );
  const posts = await res.json();
  const total = Number(res.headers.get('X-WP-Total') ?? 0);
  const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? 1);
  return { posts, total, totalPages };
}

export async function getPost(slug: string) {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    fetchOpts(),
  );
  const posts = await res.json();
  return posts[0] ?? null;
}

export async function getAllPostSlugs() {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?per_page=100&_fields=slug`, fetchOpts());
  return res.json() as Promise<{ slug: string }[]>;
}
