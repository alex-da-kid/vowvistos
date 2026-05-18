import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/wordpress';
import { getGooglePlacesData } from '@/lib/google-places';
import ContactForm from '@/components/ContactForm';
import VideoCarousel from '@/components/VideoCarousel';

export const metadata: Metadata = {
  title: 'Consultoria de Vistos para Brasileiros | EUA, Canadá, China e mais | Vow Vistos',
  description: 'A Vow Vistos analisa seu perfil com base nas práticas reais dos consulados. Mais de 7.000 vistos aprovados para brasileiros. Garantia Vitalícia. Fale agora.',
  keywords: 'consultoria de vistos, visto americano, visto canadense, visto chinês, análise de perfil visto, assessoria de vistos, como tirar visto, visto negado',
  openGraph: {
    title: 'Consultoria de Vistos para Brasileiros | EUA, Canadá, China e mais | Vow Vistos',
    description: 'A Vow Vistos analisa seu perfil com honestidade, com base nas práticas reais dos consulados. Mais de 7.000 vistos aprovados e Garantia Vitalícia.',
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
        ratingValue: '5.0',
        reviewCount: '151',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vale a pena contratar uma consultoria de vistos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, e a diferença está no que você não sabe. A maioria das negativas não ocorre por falta de dinheiro ou documentos, mas por inconsistências que só aparecem quando alguém experiente avalia seu perfil. A Vow Vistos analisou mais de 7.000 casos de brasileiros em diferentes destinos: reconhecemos os padrões que os consulados usam para aprovar e os sinais que usam para negar.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é a análise de perfil gratuita da Vow Vistos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'É uma avaliação inicial do seu perfil com base nos critérios reais dos consulados. Analisamos seus vínculos com o Brasil, histórico de viagens, situação financeira e objetivo da viagem. Te damos uma perspectiva honesta das suas reais chances antes de você tomar qualquer decisão.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais são os principais motivos para a negativa de um visto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Os motivos mais comuns são: vínculos insuficientes com o Brasil (emprego, família, patrimônio), inconsistências entre o que você declara e o que a documentação mostra, histórico de permanências longas ou irregulares e perfil incompatível com o tipo de visto solicitado. O que diferencia a Vow Vistos é que identificamos esses pontos antes do seu agendamento. Não depois de uma negativa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Meu visto foi negado antes. Posso tentar novamente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Uma negativa anterior não impede a aprovação, mas deixa um registro no sistema consular que exige uma abordagem específica para ser contornado. Não é incomum que clientes cheguem até nós após uma negativa anterior, e com a estratégia certa, a aprovação é possível.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é a Garantia Vitalícia da Vow Vistos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Se o seu visto for negado após a nossa consultoria, oferecemos reconsultoria gratuita e ilimitada até que você seja aprovado. Você paga apenas as taxas consulares obrigatórias, sem custo adicional com a Vow Vistos, para sempre. É o nosso compromisso de não te abandonar.',
          },
        },
      ],
    },
  ],
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '558520186898';

const visaCards = [
  { flag: '🇺🇸', label: 'Visto Americano',  href: '/visto-americano' },
  { flag: '🇨🇦', label: 'Visto Canadense',  href: '/visto-canadense' },
  { flag: '🇨🇳', label: 'Visto Chinês',     href: '/visto-chines' },
  { flag: '🌍',   label: 'Outros Países',    href: '/outros-paises' },
];

const stats = [
  { value: '8 Anos', label: 'Especialização exclusiva em consultoria consular' },
  { value: '7.000+', label: 'Vistos aprovados para brasileiros desde 2017' },
];

const scenarios = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Turismo',
    desc: 'O turismo é a categoria com mais negativas nos consulados. Sabemos exatamente quais vínculos os consulados querem ver e como apresentá-los para que sua viagem de lazer não levante suspeitas.',
    img: 'https://images.unsplash.com/photo-1765570811507-7b9acf02eb7e?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Destino turístico no exterior — Photo by Elijah Cobb on Unsplash',
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
    desc: 'Visto de estudo exige demonstrar intenção real de retornar ao Brasil após o programa. A análise para estudantes é fundamentalmente diferente da de turistas. A Vow Vistos entende essa diferença de cor.',
    img: 'https://images.unsplash.com/photo-1587580105302-16ec548c145f?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Estudante no exterior — Photo by VENUS MAJOR on Unsplash',
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
    desc: 'Work permits, vistos de trabalho especializado e transferências corporativas: cada categoria tem critérios próprios e um nível de escrutínio diferente. São os processos mais complexos do portfólio consular, e os que mais exigem especialização real. Não chute.',
    img: 'https://images.unsplash.com/photo-1568004614241-cc28447dc0f0?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Profissional em viagem de negócios — Photo by David Veksler on Unsplash',
    msg: 'Quero%20informações%20sobre%20visto%20de%20trabalho',
    featured: false,
  },
];

const steps = [
  { num: '01', title: 'Análise de Perfil', desc: 'Não é uma triagem genérica. Mapeamos vínculos com o Brasil, histórico de viagens, consistência financeira e relações familiares internacionais. É aqui que a maioria das negativas poderia ter sido evitada.' },
  { num: '02', title: 'Dossiê Estratégico', desc: 'Cada documento é selecionado com um propósito. Não enviamos pilhas de papel: enviamos evidências organizadas para responder às dúvidas do consulado antes de qualquer entrevista.' },
  { num: '03', title: 'Simulação de Entrevista', desc: 'Reproduzimos a dinâmica real do consulado: as perguntas difíceis, os silêncios, as inconsistências que derrubam candidatos bem-documentados. Você entra na sala sem surpresas.' },
  { num: '04', title: 'Aprovação com Garantia', desc: 'Acompanhamos em tempo real até a concessão. Se o visto for negado, a Garantia Vitalícia entra em ação: reconsultoria gratuita e ilimitada até a aprovação.' },
];

const differentials = [
  {
    title: '7.000 Casos. Um Padrão.',
    desc: 'Você não aprende o que o cônsul realmente avalia em um livro. Aprende vendo 7.000 perfis de brasileiros: o que funcionou, o que falhou e por quê. Esse padrão é o que aplicamos no seu caso.',
  },
  {
    title: 'Sabemos o que Cada Processo Exige',
    desc: 'Cada país tem critérios, formulários e etapas diferentes. O que não muda é o que os consulados avaliam: consistência, vínculos e intenção. Conhecemos esse processo por dentro, para cada destino que atendemos.',
  },
  {
    title: 'Documentação que Convence',
    desc: 'Não basta apresentar documentos: eles precisam contar uma história coerente. Identificamos inconsistências que causam negativas "invisíveis" e montamos cada dossiê para responder às dúvidas antes que sejam levantadas.',
  },
  {
    title: 'Garantia Vitalícia',
    desc: 'Se o visto for negado, reconsultoria gratuita ilimitada, para sempre. Nenhuma outra consultoria no Brasil faz isso porque nenhuma outra tem nossa confiança na própria análise.',
  },
];

const faqs = [
  {
    q: 'Vale a pena contratar uma consultoria de vistos?',
    a: 'Sim, e a diferença está no que você não sabe. A maioria das negativas não ocorre por falta de dinheiro ou documentos, mas por inconsistências que só aparecem quando alguém experiente avalia seu perfil. A Vow Vistos analisou mais de 7.000 casos de brasileiros em diferentes destinos: reconhecemos os padrões que os consulados usam para aprovar e os sinais que usam para negar. Isso não está em nenhum guia gratuito na internet.',
  },
  {
    q: 'O que é a análise de perfil gratuita da Vow Vistos?',
    a: 'É uma avaliação inicial do seu perfil com base nos critérios reais dos consulados. Analisamos seus vínculos com o Brasil, histórico de viagens, situação financeira e objetivo da viagem. Te damos uma perspectiva honesta das suas reais chances antes de você tomar qualquer decisão.',
  },
  {
    q: 'Quais são os principais motivos para a negativa de um visto?',
    a: 'Os motivos mais comuns são: vínculos insuficientes com o Brasil (emprego, família, patrimônio), inconsistências entre o que você declara e o que a documentação mostra, histórico de permanências longas ou irregulares e perfil incompatível com o tipo de visto solicitado. O que diferencia a Vow Vistos é que identificamos esses pontos antes do seu agendamento. Não depois de uma negativa.',
  },
  {
    q: 'O que é a Garantia Vitalícia da Vow Vistos?',
    a: 'Se o seu visto for negado após a nossa consultoria, oferecemos reconsultoria gratuita e ilimitada até que você seja aprovado. Você paga apenas as taxas consulares obrigatórias, sem custo adicional com a Vow Vistos, para sempre. Oferecemos essa garantia porque confiamos na nossa análise. Nenhuma outra consultoria no Brasil faz isso.',
  },
  {
    q: 'Meu visto foi negado antes. Ainda posso ser aprovado?',
    a: 'Sim. Uma negativa anterior não impede a aprovação, mas deixa um registro no sistema consular que exige uma abordagem específica para ser contornada. Não é incomum que clientes cheguem até nós após uma ou mais negativas anteriores. O que fazemos é diferente de simplesmente tentar de novo: analisamos o motivo real da negativa, construímos uma estratégia personalizada para o seu caso, reforçamos a documentação ponto a ponto e acompanhamos o processo com a Garantia Vitalícia inclusa. É exatamente nisso que a Vow Vistos é especialista.',
  },
];


function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').trim();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default async function HomePage() {
  let blogPosts: any[] = [];
  try {
    const { posts } = await getPosts(3, 1);
    blogPosts = posts;
  } catch {
    blogPosts = [];
  }
  const placeData = await getGooglePlacesData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 text-center text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1704303767413-2120d98bf2b2?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/75 to-primary/65" aria-hidden />
        <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"/>
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-primary-light blur-3xl"/>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Líder em consultoria de vistos no Brasil há 4 anos
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
              <GoogleStars />
              {placeData.rating} · {placeData.reviewCount} avaliações no
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Seu Visto Aprovado. <br className="hidden md:block"/>
            <span className="text-accent">Não por acaso. Por conhecimento.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            A maioria das consultorias preenche formulários. A Vow Vistos analisa o que o cônsul <em>realmente</em> avalia: vínculos, consistência e postura, com base em <strong className="text-white">mais de 7.000 aprovações reais de brasileiros</strong>. Expertise que não está em nenhum manual.
          </p>
          <p className="text-sm text-white/50 mb-10">Especialização exclusiva em consultoria consular desde 2017.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
            {visaCards.map((c) => (
              <Link key={c.href} href={c.href}
                className="bg-white/10 hover:bg-accent border border-white/20 hover:border-accent rounded-2xl p-4 md:p-5 flex flex-col items-center gap-2 transition-all duration-200 hover:-translate-y-1 font-heading font-semibold text-sm text-white hover:text-dark no-underline group">
                <span className="text-3xl group-hover:text-4xl transition-all duration-200">{c.flag}</span>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Olá,%20quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-all text-base shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105">
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
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-4 sm:py-0">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-white/70 leading-snug max-w-[180px] mx-auto">{s.label}</div>
            </div>
          ))}
          <div className="py-4 sm:py-0">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">{placeData.rating} ★</div>
            <div className="mt-2 text-sm text-white/70 leading-snug max-w-[180px] mx-auto">Nota média no Google — {placeData.reviewCount} avaliações verificadas</div>
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN ────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-light">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted whitespace-nowrap">Como visto em</span>
          <div className="h-px sm:h-8 w-px bg-light hidden sm:block" aria-hidden />
          <a href="https://diariodonordeste.verdesmares.com.br/negocios/suspensao-de-vistos-por-trump-e-copa-geram-corrida-que-ate-triplica-procura-em-fortaleza-1.3733229"
            target="_blank" rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/diario-do-nordeste.svg" alt="Diário do Nordeste" width={180} height={48} />
          </a>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Por que a Vow Vistos?</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              A diferença entre aprovado e negado é saber o que o consulado realmente avalia no seu perfil
            </h2>
            <p className="text-muted leading-relaxed">
              Qualquer empresa preenche formulários. O que a Vow Vistos faz é diferente: antecipamos cada motivo de negativa com base em padrões reais, para cada destino, não em suposições.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d, i) => {
              const iconBgs = ['bg-primary/10', 'bg-accent/15', 'bg-green-500/10', 'bg-purple-500/10'];
              const iconColors = ['text-primary', 'text-accent', 'text-green-600', 'text-purple-600'];
              return (
                <div key={d.title} className="bg-light rounded-2xl p-6 border border-transparent hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(26,58,107,0.12)] transition-all duration-200">
                  <div className={`w-10 h-10 rounded-full ${iconBgs[i % 4]} flex items-center justify-center mb-4`}>
                    <svg className={`w-5 h-5 ${iconColors[i % 4]}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-dark mb-2">{d.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT CONSULATES REALLY EVALUATE ──────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Conhecimento de Causa</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              O que os consulados realmente avaliam
            </h2>
            <p className="text-muted leading-relaxed">
              Não é o que você imagina. Aqui está o que 7.000 processos, e as negativas que os antecederam, nos ensinaram.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Vínculos com o Brasil',
                desc: 'O consulado parte do princípio de que qualquer solicitante pode ter intenção de imigrar. Você precisa provar o contrário: emprego formal, família, patrimônio, obrigações financeiras no Brasil. Sabemos quais vínculos têm mais peso para cada tipo de perfil e como apresentá-los.',
              },
              {
                num: '02',
                title: 'Consistência entre perfil e documentação',
                desc: 'Uma renda declarada que não bate com o extrato bancário. Uma carta de emprego com dados divergentes do CNPJ. Inconsistências assim passam despercebidas por quem não sabe o que procurar e derrubam pedidos bem-intencionados sem explicação aparente.',
              },
              {
                num: '03',
                title: 'Coerência entre perfil e intenção declarada',
                desc: 'Os consulados analisam se o seu perfil, sua documentação e o motivo declarado contam a mesma história. Inconsistências sutis entre renda, objetivo da viagem e histórico de saídas são suficientes para uma negativa. Para os destinos que incluem entrevista, preparamos você para esse momento também.',
              },
              {
                num: '04',
                title: 'Histórico de viagens e vistos anteriores',
                desc: 'Vistos negados em outros países, permanências longas nos EUA, entradas irregulares: tudo consta no sistema consular. Analisamos seu histórico completo antes de qualquer agendamento e definimos a estratégia correta de apresentação para o seu caso.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 flex gap-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl font-heading font-extrabold text-accent/25 leading-none flex-shrink-0 pt-1">{item.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Quero que a Vow Vistos analise meu perfil
            </a>
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
                className={`rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl bg-white ${s.featured ? 'ring-2 ring-accent shadow-lg' : ''}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <h3 className="text-xl font-heading font-bold text-dark mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <a href={`https://wa.me/${wa}?text=${s.msg}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-heading font-bold px-5 py-3 rounded-full transition-colors w-full justify-center">
                    <WaIcon /> Falar com Especialista
                  </a>
                </div>
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

      {/* ── GOOGLE REVIEWS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Avaliações</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-3">
              O que nossos clientes dizem
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <GoogleStarsFull />
              <span className="font-heading font-bold text-dark text-lg">{placeData.rating}</span>
              <span className="text-muted text-sm">· {placeData.reviewCount} avaliações verificadas no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeData.reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden">
                <span className="absolute top-2 right-4 text-7xl font-serif text-accent/10 leading-none select-none pointer-events-none" aria-hidden>"</span>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0 ${r.color}`}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-dark text-sm">{r.name}</div>
                      <div className="text-xs text-muted">{r.date}</div>
                    </div>
                  </div>
                  <GoogleGLogo />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          {placeData.mapsUrl && (
            <div className="text-center mt-10">
              <a href={placeData.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary/20 hover:border-primary text-primary font-heading font-semibold px-6 py-3 rounded-full transition-colors text-sm">
                Ver todas as avaliações no Google
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos em Vídeo</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              Mais de 7.000 sonhos realizados. <br className="hidden md:block"/>Ouça quem já passou por isso.
            </h2>
            <p className="text-muted leading-relaxed">
              Cada aprovação é uma história real. Veja o que nossos clientes dizem sobre a experiência com a Vow Vistos, do medo da entrevista à passagem na mão.
            </p>
          </div>
          <VideoCarousel />
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
            Se o seu visto for negado após a nossa consultoria, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até que você seja aprovado. Sem prazo. Sem letras miúdas.
          </p>
          <p className="text-white/50 text-base mb-10">
            Você paga apenas as taxas consulares obrigatórias, nada mais à Vow Vistos, para sempre. Oferecemos essa garantia porque confiamos na nossa análise. Simples assim.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20saber%20mais%20sobre%20a%20Garantia%20Vitalícia`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg shadow-lg">
            Começar agora
          </a>
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
                <div className="faq-body mt-4">
                  <p className="text-sm leading-relaxed text-muted group-open:text-white/80">{faq.a}</p>
                </div>
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

      {/* ── BLOG PREVIEW ──────────────────────────────────────────────────── */}
      {blogPosts.length > 0 && (
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Blog</span>
              <h2 className="text-3xl font-heading font-bold text-dark mb-3">Dicas e guias sobre vistos</h2>
              <p className="text-muted text-sm">Artigos escritos pelos nossos especialistas para ajudar você a se preparar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post: any) => {
                const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const excerpt = stripHtml(post.excerpt?.rendered ?? '').slice(0, 100);
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col group no-underline">
                    {thumb && (
                      <img src={thumb} alt={post.title?.rendered ?? ''} className="w-full h-40 object-cover" loading="lazy"/>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <time className="text-xs text-muted mb-2 block">{formatDate(post.date)}</time>
                      <h3 className="font-heading font-bold text-dark text-sm leading-snug mb-2 group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title?.rendered ?? '' }} />
                      {excerpt && <p className="text-muted text-xs leading-relaxed flex-1">{excerpt}…</p>}
                      <span className="mt-3 text-xs text-primary font-heading font-semibold group-hover:text-accent transition-colors">Ler artigo →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog"
                className="inline-block border-2 border-primary/20 hover:border-primary text-primary font-heading font-semibold px-6 py-3 rounded-full transition-colors text-sm">
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Contato</span>
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">
            Comece sua análise de perfil gratuita
          </h2>
          <p className="text-muted leading-relaxed">
            Preencha o formulário ou fale pelo WhatsApp. Respondemos em até 24 horas úteis com uma análise honesta do seu perfil.
          </p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-light">
          <ContactForm />
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

function GoogleStars() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleStarsFull() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleGLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
