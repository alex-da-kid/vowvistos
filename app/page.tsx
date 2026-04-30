import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultoria de Vistos Americano, Canadense e Chinês | Vow Vistos',
  description: 'A Vow Vistos é líder em consultoria de visto americano, canadense e chinês no Brasil. 11.700+ vistos aprovados, 99,4% de aprovação em 2024 e Garantia Vitalícia. Fale agora.',
  keywords: 'consultoria visto americano, visto americano, como tirar visto americano, visto canadense, visto chinês, assessoria de vistos, visto americano negado, entrevista visto americano',
  openGraph: {
    title: 'Consultoria de Vistos Americano, Canadense e Chinês | Vow Vistos',
    description: 'Líder em consultoria de vistos no Brasil. 11.700+ aprovações, 99,4% de taxa de sucesso e Garantia Vitalícia. Seu visto aprovado ou reconsultoria gratuita para sempre.',
    url: 'https://vowvistos.com.br',
    siteName: 'Vow Vistos',
    locale: 'pt_BR',
    type: 'website',
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://vowvistos.com.br/#business',
      name: 'Vow Vistos Consultoria Consular e Agência de Viagens',
      url: 'https://vowvistos.com.br',
      description: 'Consultoria especializada em vistos americano, canadense, chinês e outros destinos para brasileiros.',
      foundingDate: '2017',
      areaServed: 'BR',
      serviceType: 'Consultoria de Vistos',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '11700',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vale a pena contratar uma consultoria de visto americano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Uma consultoria especializada reduz drasticamente o risco de negativa ao identificar pontos fracos no seu perfil antes da entrevista, preparar a documentação corretamente e simular as perguntas do consulado. A Vow Vistos tem 99,4% de aprovação em 2024 e mais de 11.700 vistos aprovados.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais são os principais motivos para a negativa do visto americano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Os motivos mais comuns são: falta de comprovação de vínculos com o Brasil (emprego, família, imóveis), documentação incompleta ou inconsistente, respostas inseguras na entrevista consular e histórico de viagens inadequado. A Vow Vistos analisa todos esses pontos antes do seu agendamento.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é perguntado na entrevista para visto americano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O cônsul geralmente pergunta sobre o motivo da viagem, tempo de permanência, comprovação de renda e emprego, vínculos com o Brasil, histórico de viagens anteriores e se você tem parentes nos Estados Unidos. A Vow Vistos realiza uma simulação completa de entrevista antes do seu agendamento.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo demora para tirar o visto americano com a Vow Vistos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O prazo varia conforme a disponibilidade do consulado na sua cidade. A Vow Vistos cuida do agendamento e de toda a preparação para que você chegue pronto no dia da entrevista. Consultores experientes também orientam sobre estratégias para agilizar o processo quando possível.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é a Garantia Vitalícia da Vow Vistos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Se o seu visto for negado após a nossa consultoria, oferecemos reconsultoria gratuita e ilimitada até que você seja aprovado. Você paga apenas as taxas consulares obrigatórias. É o nosso compromisso com a sua aprovação — para sempre.',
          },
        },
      ],
    },
  ],
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const visaCards = [
  { flag: '🇺🇸', label: 'Visto Americano',  href: '/visto-americano' },
  { flag: '🇨🇦', label: 'Visto Canadense',  href: '/visto-canadense' },
  { flag: '🇨🇳', label: 'Visto Chinês',     href: '/visto-chines' },
  { flag: '🌍',   label: 'Outros Países',    href: '/outros-paises' },
];

const stats = [
  { value: '4 Anos', label: 'Líder em consultoria de vistos no Brasil' },
  { value: '11.700+', label: 'Vistos aprovados para brasileiros' },
  { value: '99,4%', label: 'Taxa de aprovação em 2024' },
];

const scenarios = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Turismo',
    desc: 'Aquela viagem dos sonhos — Nova York, Toronto, Shanghai — não pode esperar mais. Cuidamos de cada detalhe da documentação para você embarcar com tranquilidade e sem surpresas no consulado.',
    msg: 'Quero%20informações%20sobre%20visto%20de%20turismo',
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: 'Estudo',
    desc: 'Intercâmbio, MBA ou pós-graduação no exterior exigem uma análise de perfil precisa. Acompanhamos você do início ao fim para que você possa focar no que importa: a sua evolução acadêmica.',
    msg: 'Quero%20informações%20sobre%20visto%20de%20estudo',
    featured: true,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Trabalho',
    desc: 'Transferência corporativa, visto TN, O-1 ou Green Card — os vistos de trabalho são os mais complexos e exigem orientação especializada. A Vow Vistos domina cada modalidade.',
    msg: 'Quero%20informações%20sobre%20visto%20de%20trabalho',
    featured: false,
  },
];

const steps = [
  { num: '01', title: 'Análise de Perfil', desc: 'Identificamos pontos fortes e vulnerabilidades do seu perfil antes mesmo de iniciar o processo — eliminando riscos de negativa.' },
  { num: '02', title: 'Documentação Completa', desc: 'Preparamos e revisamos cada documento exigido pelo consulado. Nada é deixado ao acaso.' },
  { num: '03', title: 'Simulação de Entrevista', desc: 'Você chega ao consulado preparado. Simulamos as perguntas reais com foco nas suas respostas e postura.' },
  { num: '04', title: 'Aprovação', desc: 'Acompanhamos o processo em tempo real até a concessão do visto. E se houver negativa, nossa Garantia Vitalícia entra em ação.' },
];

const differentials = [
  { title: 'Experiência Comprovada', desc: 'Mais de 11.700 vistos aprovados desde 2017. Não somos uma agência de turismo que faz vistos — somos especialistas 100% focados em consultoria consular.' },
  { title: 'Preparo para Entrevista', desc: 'A entrevista consular é o ponto mais crítico do processo. Nossa simulação exclusiva prepara você para responder com segurança e convicção.' },
  { title: 'Documentação Blindada', desc: 'Documentação errada ou incompleta é um dos maiores motivos de negativa. Revisamos cada detalhe antes do seu agendamento.' },
  { title: 'Garantia Vitalícia', desc: 'Se o visto for negado, oferecemos reconsultoria gratuita ilimitada — para sempre. Nenhuma outra consultoria no Brasil oferece isso.' },
];

const faqs = [
  {
    q: 'Vale a pena contratar uma consultoria de visto americano?',
    a: 'Sim. Uma consultoria especializada reduz drasticamente o risco de negativa ao identificar pontos fracos no seu perfil antes da entrevista, preparar a documentação corretamente e simular as perguntas do consulado. A Vow Vistos tem 99,4% de aprovação em 2024 e mais de 11.700 vistos aprovados.',
  },
  {
    q: 'Quais são os principais motivos para a negativa do visto americano?',
    a: 'Os motivos mais comuns são: falta de comprovação de vínculos com o Brasil (emprego, família, imóveis), documentação incompleta ou inconsistente, respostas inseguras na entrevista consular e histórico de viagens inadequado. A Vow Vistos analisa todos esses pontos antes do seu agendamento.',
  },
  {
    q: 'O que é perguntado na entrevista para visto americano?',
    a: 'O cônsul geralmente pergunta sobre o motivo da viagem, tempo de permanência, comprovação de renda e emprego, vínculos com o Brasil, histórico de viagens anteriores e se você tem parentes nos Estados Unidos. A Vow Vistos realiza uma simulação completa de entrevista antes do seu agendamento.',
  },
  {
    q: 'O que é a Garantia Vitalícia da Vow Vistos?',
    a: 'Se o seu visto for negado após a nossa consultoria, oferecemos reconsultoria gratuita e ilimitada até que você seja aprovado. Você paga apenas as taxas consulares obrigatórias. É o nosso compromisso com a sua aprovação — para sempre.',
  },
];

const videos = ['YOUTUBE_ID_1', 'YOUTUBE_ID_2', 'YOUTUBE_ID_3'];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-36 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"/>
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-primary-light blur-3xl"/>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Líder em consultoria de vistos no Brasil há 4 anos
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Seu Visto Aprovado <br className="hidden md:block"/>
            <span className="text-accent">ou a Gente Não Para.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Consultoria especializada em visto americano, canadense, chinês e muito mais. Preparação completa, documentação blindada e a única <strong className="text-white">Garantia Vitalícia</strong> do mercado.
          </p>
          <p className="text-sm text-white/50 mb-10">Mais de 11.700 brasileiros aprovados desde 2017. Taxa de 99,4% em 2024.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
            {visaCards.map((c) => (
              <Link key={c.href} href={c.href}
                className="bg-white/10 hover:bg-accent border border-white/20 hover:border-accent rounded-2xl p-4 md:p-5 flex flex-col items-center gap-2 transition-all duration-200 hover:-translate-y-1 font-heading font-semibold text-sm text-white hover:text-dark no-underline">
                <span className="text-3xl">{c.flag}</span>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Olá,%20quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors text-base shadow-lg">
              <WaIcon /> Análise de Perfil Gratuita
            </a>
            <a href="#como-funciona"
              className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors text-base">
              Como Funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ───────────────────────────────────────────────────── */}
      <section className="bg-primary py-12" aria-label="Números da Vow Vistos">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-4 sm:py-0">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-white/70 leading-snug max-w-[180px] mx-auto">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Por que a Vow Vistos?</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              A diferença entre aprovado e negado está nos detalhes
            </h2>
            <p className="text-muted leading-relaxed">
              Qualquer pessoa pode preencher um formulário. O que a Vow Vistos faz é antecipar cada motivo de negativa e eliminar o risco antes da sua entrevista.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d) => (
              <div key={d.title} className="bg-light rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-dark mb-2">{d.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHICH PURPOSE ─────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Turismo, Estudo ou Trabalho</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Qual é o seu objetivo?</h2>
            <p className="text-muted leading-relaxed">Cada tipo de visto tem exigências e estratégias diferentes. A Vow Vistos conhece cada modalidade e personaliza a consultoria para o seu caso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((s) => (
              <div key={s.title}
                className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 hover:shadow-xl bg-white ${s.featured ? 'ring-2 ring-accent shadow-lg' : ''}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${s.featured ? 'bg-accent/15 text-accent' : 'bg-primary/10 text-primary'}`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <a href={`https://wa.me/${wa}?text=${s.msg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-heading font-bold px-5 py-3 rounded-full transition-colors w-full justify-center">
                  <WaIcon /> Falar com Especialista
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Processo</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Da contratação à aprovação</h2>
            <p className="text-muted leading-relaxed">Um processo claro, sem surpresas e com suporte em cada etapa. É assim que a Vow Vistos trabalha.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-light rounded-2xl p-6 text-center relative">
                <div className="text-5xl font-heading font-extrabold text-accent/20 mb-3 leading-none">{s.num}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              Mais de 11.700 sonhos realizados. <br className="hidden md:block"/>Ouça quem já passou por isso.
            </h2>
            <p className="text-muted leading-relaxed">
              Cada aprovação é uma história real. Veja o que nossos clientes dizem sobre a experiência com a Vow Vistos — do medo da entrevista à passagem na mão.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((id, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-dark">
                <iframe className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Depoimento de cliente Vow Vistos ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen loading="lazy"/>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">
            Veja mais histórias no nosso{' '}
            <a href="https://youtube.com/@vowvistos" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold transition-colors underline">
              canal do YouTube
            </a>
          </p>
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────────────────────────── */}
      <section className="bg-dark py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Exclusivo Vow Vistos
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Garantia Vitalícia</h2>
          <p className="text-white/75 text-lg md:text-xl mb-4 leading-relaxed">
            Se o seu visto for negado após a nossa consultoria, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até que você seja aprovado.
          </p>
          <p className="text-white/50 text-base mb-10">
            Você paga apenas as taxas consulares obrigatórias — sem custo adicional com a Vow Vistos, para sempre.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Quero%20saber%20mais%20sobre%20a%20Garantia%20Vitalícia`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg shadow-lg">
              Começar agora
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Dúvidas Frequentes</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre consultoria de vistos</h2>
            <p className="text-muted">Tire suas principais dúvidas antes de falar com um especialista.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i}
                className="group bg-light rounded-2xl p-6 cursor-pointer [&[open]]:bg-primary [&[open]]:text-white transition-colors duration-200">
                <summary className="font-heading font-bold text-dark group-open:text-white flex justify-between items-center gap-4 list-none cursor-pointer">
                  {faq.q}
                  <svg className="w-5 h-5 flex-shrink-0 text-accent group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted group-open:text-white/80">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="text-primary hover:text-accent font-heading font-semibold transition-colors underline text-sm">
              Ver mais respostas no nosso blog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Contato</span>
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">
            Comece sua análise de perfil gratuita
          </h2>
          <p className="text-muted leading-relaxed">
            Preencha o formulário abaixo ou fale diretamente pelo WhatsApp. Respondemos em até 24 horas úteis com uma análise honesta do seu perfil e as melhores chances de aprovação.
          </p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-center text-muted text-sm">
            Formulário Gravity Forms — configure o ID em <code className="bg-light px-1 py-0.5 rounded text-xs">.env.local</code> quando estiver pronto.
          </p>
          <div className="mt-6 text-center">
            <a href={`https://wa.me/${wa}?text=Olá,%20quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-3 rounded-full transition-colors">
              <WaIcon /> Prefiro falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
