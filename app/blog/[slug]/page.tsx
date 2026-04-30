import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getAllPostSlugs } from '@/lib/wordpress';

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    if (!post) return {};
    const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    return {
      title: `${post.title?.rendered?.replace(/<[^>]+>/g, '') ?? ''} | Vow Vistos`,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '').slice(0, 160) ?? '',
      openGraph: thumb ? { images: [thumb] } : undefined,
    };
  } catch {
    return {};
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);
  if (!post) notFound();

  const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name ?? 'Vow Vistos';
  const categories = post._embedded?.['wp:term']?.[0] ?? [];

  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-20 text-white">
        <div className="max-w-3xl mx-auto px-4">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat: any) => (
                <span key={cat.id} className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {cat.name}
                </span>
              ))}
            </div>
          )}
          <h1
            className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: post.title?.rendered ?? '' }}
          />
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span>{authorName}</span>
            <span>·</span>
            <time>{formatDate(post.date)}</time>
          </div>
        </div>
      </section>

      {thumb && (
        <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
          <img src={thumb} alt={post.title?.rendered?.replace(/<[^>]+>/g, '') ?? ''} className="w-full rounded-2xl shadow-xl object-cover max-h-96" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div
          className="prose prose-lg max-w-none text-dark leading-relaxed
            [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-dark [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-dark [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-muted [&_p]:mb-5
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted [&_ul]:mb-5
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted [&_ol]:mb-5
            [&_a]:text-primary [&_a]:font-semibold hover:[&_a]:text-accent
            [&_strong]:text-dark
            [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? '' }}
        />

        <div className="mt-16 pt-8 border-t border-light">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:text-accent transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            Voltar para o blog
          </Link>
        </div>
      </article>

      <section className="bg-dark py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Precisa de ajuda com seu visto?</h2>
          <p className="text-white/70 mb-8">Fale com um especialista da Vow Vistos e faça sua análise de perfil gratuita.</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999'}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </>
  );
}
