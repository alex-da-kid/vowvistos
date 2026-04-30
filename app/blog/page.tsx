import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog | Dicas e Informações sobre Vistos | Vow Vistos',
  description: 'Artigos, guias e dicas sobre vistos americano, canadense, chinês e mais. Saiba como preparar sua documentação, entender as exigências e maximizar suas chances de aprovação.',
  keywords: 'blog vistos, dicas visto americano, como tirar visto, entrevista visto americano, documentação visto',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').trim();
}

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    const data = await getPosts(12, 1);
    posts = data.posts;
  } catch {
    posts = [];
  }

  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-heading font-extrabold mb-4">
            Blog <span className="text-accent">Vow Vistos</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Guias, dicas e atualizações sobre vistos americano, canadense, chinês e muito mais.
          </p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted text-lg">Nenhum artigo encontrado. Volte em breve!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => {
                const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const excerpt = stripHtml(post.excerpt?.rendered ?? '');
                return (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col">
                    {thumb && (
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={thumb}
                          alt={post.title?.rendered ?? ''}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <time className="text-xs text-muted mb-3 block">{formatDate(post.date)}</time>
                      <h2 className="font-heading font-bold text-dark text-lg mb-3 leading-snug">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: post.title?.rendered ?? '' }} />
                        </Link>
                      </h2>
                      {excerpt && (
                        <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{excerpt}</p>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-primary font-heading font-semibold text-sm hover:text-accent transition-colors mt-auto"
                      >
                        Ler artigo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
