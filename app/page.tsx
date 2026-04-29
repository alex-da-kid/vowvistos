import Link from 'next/link';

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const visaCards = [
  { flag: '🇺🇸', label: 'Visto Americano',  href: '/visto-americano' },
  { flag: '🇨🇦', label: 'Visto Canadense',  href: '/visto-canadense' },
  { flag: '🇨🇳', label: 'Visto Chinês',     href: '/visto-chines' },
  { flag: '🌍',   label: 'Outros Países',    href: '/outros-paises' },
];

const stats = [
  { value: 'Líder 4 Anos', label: 'Referência no mercado desde 2017' },
  { value: '11.700+',      label: 'Vistos aprovados' },
  { value: '99,4%',        label: 'Taxa de aprovação em 2024' },
];

const scenarios = [
  { title: 'Turismo',  desc: 'Realize o sonho de conhecer novos países com tranquilidade. Cuidamos de toda a documentação para que você se preocupe apenas com a viagem.', msg: 'Quero%20saber%20sobre%20visto%20de%20turismo',  featured: false },
  { title: 'Estudo',   desc: 'Intercâmbio ou pós-graduação no exterior? Acompanhamos você do pedido à aprovação, garantindo que nenhum detalhe passe despercebido.',      msg: 'Quero%20saber%20sobre%20visto%20de%20estudo',   featured: true  },
  { title: 'Trabalho', desc: 'Seja para uma transferência corporativa ou para começar uma nova carreira no exterior, temos experiência nos vistos de trabalho mais exigidos.', msg: 'Quero%20saber%20sobre%20visto%20de%20trabalho', featured: false },
];

const videos = ['YOUTUBE_ID_1', 'YOUTUBE_ID_2', 'YOUTUBE_ID_3'];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-36 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"/>
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-primary-light blur-3xl"/>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Líder em consultoria de vistos no Brasil
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
            Escolha Seu <span className="text-accent">Visto</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Aumentamos suas chances de aprovação com consultoria personalizada, documentação completa e suporte em cada etapa do processo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {visaCards.map((c) => (
              <Link key={c.href} href={c.href}
                className="bg-white/10 hover:bg-accent border border-white/20 hover:border-accent rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-200 hover:-translate-y-1 font-heading font-semibold text-sm text-white hover:text-dark no-underline">
                <span className="text-3xl">{c.flag}</span>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ───────────────────────────────────────────────── */}
      <section className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-heading font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-xs text-white/70 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE SCENARIOS ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold text-dark mb-3">Para qual motivo você precisa do visto?</h2>
            <p className="text-muted">Seja qual for o objetivo, a Vow Vistos tem a consultoria certa para você.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((s) => (
              <div key={s.title}
                className={`rounded-2xl p-8 flex flex-col items-center text-center transition-shadow duration-200 hover:shadow-xl bg-light ${s.featured ? 'ring-2 ring-accent' : ''}`}>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <a href={`https://wa.me/${wa}?text=${s.msg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-heading font-bold px-5 py-2.5 rounded-full transition-colors">
                  Falar pelo WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold text-dark mb-3">Ouça quem já realizou o sonho</h2>
            <p className="text-muted">Mais de 11.700 histórias de aprovação. Veja algumas delas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((id, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-dark">
                <iframe className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Depoimento ${i + 1}`} frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen loading="lazy"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-4">Garantia Vitalícia</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Se o seu visto for negado, oferecemos reconsulta gratuita e ilimitada até a aprovação. Você paga apenas as taxas consulares — nossa garantia é para sempre.
          </p>
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Falar com um especialista
          </a>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Fale Conosco</h2>
          <p className="text-muted">Respondemos em até 24 horas úteis.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-center text-muted text-sm">
            Formulário Gravity Forms — adicione o ID do formulário ao <code>.env.local</code> quando estiver pronto.
          </p>
        </div>
      </section>
    </>
  );
}
