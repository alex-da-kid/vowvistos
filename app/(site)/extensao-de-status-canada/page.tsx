import type { Metadata } from 'next';
import Image from 'next/image';
import FeeNote from '@/components/FeeNote';
import LeadForm from './LeadForm';
import { getGooglePlacesData } from '@/lib/google-places';

export const metadata: Metadata = {
  // The (site) layout's title template appends "| Vow Vistos".
  title: 'Como Estender sua Estadia no Canadá (Visitor Record e Study Permit)',
  description: 'Precisa ficar mais tempo no Canadá? Extensão de estadia como visitante (visitor record) ou estudante (study permit) para brasileiros. 100% online, em português.',
  alternates: { canonical: '/extensao-de-status-canada' },
  openGraph: {
    title: 'Precisa ficar mais tempo no Canadá?',
    description: 'Extensão de status para brasileiros que já estão no Canadá. 100% online, em português.',
    url: '/extensao-de-status-canada',
    siteName: 'Vow Vistos',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/hero-visto-canadense.jpg', alt: 'Vow Vistos: extensão de status no Canadá' }],
  },
};

const PRICE = 'R$ 2.300';

const wa = '558520186898';
const irccExtend = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html';
const irccFees = 'https://ircc.canada.ca/english/information/fees/fees.asp';
const irccTimes = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html';
const irccApprovals = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/committees/cimm-mar-23-2026/management-expired-cancelled-visas.html';

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

function Check({ className = 'text-green-500' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  );
}

const services = [
  {
    code: 'Visitor Record',
    title: 'Extensão como visitante',
    who: 'Turistas, familiares em visita e alunos de cursos de idiomas de curta duração que entraram como visitantes.',
    when: 'A visita à família se estendeu, o curso de idiomas foi prorrogado, tratamento médico ou uma mudança justificada nos planos.',
    msg: 'Estou%20no%20Canadá%20e%20preciso%20estender%20minha%20estadia%20como%20visitante',
  },
  {
    code: 'Study Permit',
    title: 'Extensão do Study Permit',
    who: 'Estudantes cujo programa vai terminar depois da data de validade do permit atual.',
    when: 'Curso prorrogado, troca de programa ou instituição, reprovação que atrasou a formatura ou continuação dos estudos.',
    msg: 'Estou%20no%20Canadá%20e%20preciso%20estender%20meu%20Study%20Permit',
  },
];

const steps = [
  { num: '01', title: 'Briefing inicial', desc: 'Entendemos sua entrada no Canadá, seu status atual, a data de vencimento, seu histórico e o motivo real do pedido.' },
  { num: '02', title: 'Checklist individual', desc: 'Não existe lista genérica. Você recebe a relação de documentos específica para o seu perfil e objetivo.' },
  { num: '03', title: 'Formulário em português', desc: 'Você responde em português. Suas respostas são organizadas para os formulários oficiais da IRCC, sem erros de interpretação.' },
  { num: '04', title: 'Preparação do caso', desc: 'Definimos a estratégia e revisamos formulários, cartas explicativas e evidências para que tudo fique coerente.' },
  { num: '05', title: 'Submissão', desc: 'O pedido é enviado online pelo portal da IRCC. As taxas do governo são pagas por você.' },
  { num: '06', title: 'Acompanhamento', desc: 'Monitoramos o processo e avisamos cada atualização até a decisão final, em português, pelo WhatsApp.' },
];

const included = [
  'Briefing inicial e análise do caso',
  'Checklist documental individualizado',
  'Formulário rascunho em português',
  'Análise e estratégia do caso',
  'Cartas e declarações explicativas',
  'Organização completa das evidências',
  'Submissão online no portal da IRCC',
  'Acompanhamento até a decisão final',
];

const plans = [
  {
    name: 'Extensão de Status',
    subtitle: 'Para visitantes (visitor record) ou estudantes (study permit) que precisam ficar mais tempo no Canadá',
    price: PRICE,
    featured: true,
    msg: 'Quero%20contratar%20a%20Extensão%20de%20Status%20no%20Canadá',
  },
];

const notIncluded = [
  'Taxas da IRCC (pagas por você direto ao governo)',
  'Biometria, quando exigida',
  'Exame médico, quando exigido',
  'Traduções certificadas, quando exigidas',
  'Novo pedido após uma recusa',
  'Casos de inadmissibilidade ou recursos judiciais',
];

const weHandle = [
  'Visitantes com status válido: turismo, visita à família ou curso de curta duração',
  'Estudantes com study permit válido que precisam de mais tempo para concluir o curso',
];

const weDontHandle = [
  'Work permits e outras categorias de trabalho',
  'Status já vencido ou restauração de status',
  'Trabalho ou estudo sem autorização no Canadá',
  'Histórico criminal ou possível inadmissibilidade',
  'Pedidos de refúgio',
];

const questions = [
  'Quem é você?',
  'Por que está no Canadá?',
  'Por que precisa ficar mais tempo?',
  'Por quanto tempo?',
  'Como vai se manter durante esse período?',
  'Quais vínculos mantém com o Brasil?',
];

const faqs = [
  { q: 'Dá para prorrogar o visto de turista no Canadá?', a: 'O que se estende não é o visto, e sim o tempo de permanência. O visto (TRV) ou a eTA servem para entrar no país. Como visitante, em geral você pode ficar até 6 meses a partir da entrada, a menos que o oficial de fronteira tenha definido outra data no passaporte. Para ficar mais, o pedido de extensão é feito à IRCC antes do vencimento, e quando aprovado você recebe um visitor record.' },
  { q: 'O que é um visitor record?', a: 'É o documento emitido pela IRCC que autoriza você a permanecer no Canadá como visitante até uma nova data. Ele não é um visto: não permite reentrar no país. Se você sair do Canadá, precisa de um visto ou eTA válido para voltar.' },
  { q: 'Quando devo fazer o pedido?', a: 'Antes do vencimento do seu status, e a IRCC recomenda pelo menos 30 dias de antecedência. Quanto antes, mais tempo há para montar um pedido bem documentado.' },
  { q: 'O que é maintained status?', a: 'Se você pede a extensão antes do vencimento, pode continuar no Canadá nas mesmas condições enquanto a IRCC analisa o pedido, mesmo que a data original passe. Estudantes, em geral, podem continuar estudando nas mesmas condições. Se o pedido for negado, o status termina e é preciso avaliar os próximos passos rapidamente.' },
  { q: 'Meu status já venceu. Vocês podem ajudar?', a: 'Este serviço é para quem ainda está com o status válido. Se o seu já venceu, fale conosco o quanto antes para avaliarmos o caso e indicarmos o caminho possível.' },
  { q: 'Quanto tempo a IRCC leva para decidir?', a: 'Varia bastante conforme o tipo de pedido e o volume da IRCC, e pode levar meses. Os prazos atualizados ficam na página oficial de tempos de processamento da IRCC.' },
  { q: 'Quanto custa a assessoria?', a: `${PRICE} por pedido, incluindo a análise do caso, a preparação completa, o atendimento em português e o acompanhamento até a decisão. As taxas da IRCC são pagas à parte, direto ao governo.` },
  { q: 'Quanto custam as taxas da IRCC?', a: 'As taxas são pagas por você direto à IRCC e mudam periodicamente. Antes de começar, informamos a taxa vigente para o seu caso e todos os custos externos.' },
  { q: 'Todo o processo é online?', a: 'Sim. Atendemos por WhatsApp, Google Meet e e-mail, em qualquer província do Canadá.' },
];

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Extensão de status no Canadá para brasileiros',
  serviceType: 'Extensão de visitor record e study permit',
  url: 'https://www.vowvistos.com.br/extensao-de-status-canada',
  areaServed: { '@type': 'Country', name: 'Canadá' },
  availableLanguage: 'pt-BR',
  provider: { '@type': 'Organization', name: 'Vow Vistos', url: 'https://www.vowvistos.com.br' },
  offers: { '@type': 'Offer', price: PRICE.replace(/[^\d]/g, ''), priceCurrency: 'BRL' },
};

// Content review date shown on the page; bump it whenever facts or fees are rechecked.
const lastReviewed = 'setembro de 2026';

export default async function ExtensaoStatusCanadaPage() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(/hero-visto-canadense.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-primary/70" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Para brasileiros no Canadá
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
              <GoogleStarsFull />
              {placeData.rating} · {placeData.reviewCount} avaliações no
              <GoogleGLogo />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Precisa ficar mais tempo no <span className="text-accent">Canadá?</span>{' '}<br/>
            <span className="text-3xl md:text-4xl">Estenda sua estadia como visitante ou estudante</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Para brasileiros que já estão no Canadá. Atendimento em português e acompanhamento do início até a decisão da IRCC.
          </p>
          <p className="text-sm text-white/50 mb-10">Especialização desde 2017 · 100% online, em qualquer província · Em português</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#avaliacao"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors text-base shadow-lg">
              Avaliação Inicial
            </a>
            <a href="#planos"
              className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors text-base">
              Ver Preços
            </a>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ────────────────────────────────────────────────── */}
      <div className="bg-light border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-start gap-3">
          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p className="text-sm text-dark leading-relaxed">
            A Vow Vistos é uma empresa privada e não tem vínculo com a IRCC ou com o governo do Canadá. Você pode fazer o pedido diretamente em{' '}
            <a href={irccExtend} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">canada.ca</a>. As taxas governamentais são pagas por você à IRCC e não estão incluídas nos honorários.
          </p>
        </div>
      </div>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
          {[['9 Anos','Especialização exclusiva em consultoria consular'],['100% Online','Em qualquer província do Canadá'],['Português','Atendimento pelo WhatsApp, do início ao fim']].map(([v,l])=>(
            <div key={l}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{v}</div>
              <div className="text-xs text-white/60 mt-1 hidden sm:block">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AS SEEN IN ────────────────────────────────────────────────── */}
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

      {/* ── STATUS DEADLINE ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-light rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Prazo</span>
              <h2 className="text-3xl font-heading font-bold text-dark mb-4">A data que manda é a do seu status, não a do visto</h2>
              <p className="text-muted leading-relaxed mb-4">
                O visto canadense pode valer 10 anos, mas o tempo que você pode ficar no país é outro. Como visitante, em geral são até 6 meses a partir da entrada, salvo outra data definida pelo oficial de fronteira. Estudantes seguem a data do próprio study permit.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Se o pedido de extensão for feito antes dessa data, você mantém o seu status (maintained status) e pode aguardar a decisão no Canadá. A IRCC recomenda pedir com pelo menos 30 dias de antecedência.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Não deixe para depois: com o status vencido, as opções ficam muito mais limitadas.
              </p>
              <a href={irccExtend} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold px-6 py-3 rounded-full transition-colors text-sm">
                Ver as regras no site oficial da IRCC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-light scroll-mt-20" id="servicos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Serviços</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Em que situação você está?</h2>
            <p className="text-muted">Cada pedido tem requisitos e evidências próprias. Trabalhamos cada caso de forma individual.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow duration-200">
                <div className="inline-block self-start bg-primary/10 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full mb-4">{s.code}</div>
                <h3 className="font-heading font-bold text-dark text-xl mb-3">{s.title}</h3>
                <p className="text-dark text-sm leading-relaxed mb-2"><strong className="font-heading">Para quem:</strong> {s.who}</p>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1"><strong className="font-heading text-dark">Situações comuns:</strong> {s.when}</p>
                <a href={`https://wa.me/${wa}?text=${s.msg}`} target="_blank" rel="noopener noreferrer"
                  className="self-start font-heading font-bold text-sm text-primary hover:text-accent transition-colors">
                  Quero uma avaliação para este caso →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT JUST A FORM ───────────────────────────────────────────── */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Nossa abordagem</span>
          <h2 className="text-4xl font-heading font-bold mb-6">Uma extensão não é só um formulário</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            O formulário é a parte mais simples. O que a IRCC avalia é se a sua história faz sentido e está bem comprovada. Antes de preencher qualquer campo, respondemos com você a perguntas como:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {questions.map((q) => (
              <li key={q} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-white/85">{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/75 text-lg leading-relaxed">
            Com essas respostas, o seu pedido chega à IRCC claro, coerente e documentado. É isso que separa uma assessoria de um serviço de preenchimento de formulário.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Processo</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Como funciona, do início até a decisão</h2>
            <p className="text-muted">A contratação não termina na submissão. Acompanhamos você até a resposta da IRCC.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.num} className="bg-light rounded-2xl p-6 text-center">
                <div className="text-5xl font-heading font-extrabold text-accent/20 mb-3 leading-none">{s.num}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light scroll-mt-20" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Planos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Preços da extensão de status no Canadá</h2>
            <p className="text-muted">Sem cobranças-surpresa. Antes de começar, você sabe exatamente quais custos externos podem existir no seu caso.</p>
          </div>
          <div className="max-w-md mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white'}`}>
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-4xl font-heading font-extrabold mb-8 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.price}<span className="text-base font-normal">,00</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {included.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={p.featured ? 'text-accent' : 'text-green-500'} />
                      <span className={p.featured ? 'text-white/80' : 'text-muted'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${wa}?text=${p.msg}`} target="_blank" rel="noopener noreferrer"
                  className={`block text-center font-heading font-bold px-6 py-3 rounded-full transition-colors ${p.featured ? 'bg-accent hover:bg-accent-light text-dark' : 'bg-primary hover:bg-primary-light text-white'}`}>
                  Contratar assessoria
                </a>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto mt-8">
            <h3 className="font-heading font-bold text-dark text-lg mb-4">Não incluído nos honorários</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <FeeNote>
            O valor acima é o honorário da Vow Vistos, por pedido. As taxas da IRCC são pagas por você diretamente ao governo do Canadá. Confira os valores atualizados em{' '}
            <a href={irccFees} target="_blank" rel="noopener noreferrer" className="text-primary underline">canada.ca</a>.
          </FeeNote>
        </div>
      </section>

      {/* ── TRANSPARENCY / SCOPE ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Transparência</span>
            <h2 className="text-3xl font-heading font-bold text-dark mb-4">A IRCC decide. Ninguém pode garantir a aprovação.</h2>
            <p className="text-muted leading-relaxed mb-4">
              Extensões feitas de dentro do Canadá não são automáticas. Em 2026, a IRCC aprovou 76% dos pedidos de visitor record, ou seja, cerca de 1 em cada 4 foi recusado (
              <a href={irccApprovals} target="_blank" rel="noopener noreferrer" className="text-primary underline">fonte: IRCC</a>).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              O que fazemos é garantir que o seu pedido chegue organizado, documentado e coerente. E se o seu caso não for defensável, vamos dizer isso antes de você pagar qualquer coisa.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              A Garantia Vitalícia da Vow Vistos vale para os vistos consulares feitos no Brasil e não se aplica às extensões de estadia no Canadá.
            </p>
          </div>
          <div className="bg-light rounded-2xl p-7">
            <h3 className="font-heading font-bold text-dark text-lg mb-2">Para quem é esta assessoria</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Atendemos apenas extensões de estadia como visitante ou estudante, feitas antes do vencimento do status:
            </p>
            <ul className="space-y-2 mb-6">
              {weHandle.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-dark">
                  <Check />
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Não atendemos:
            </p>
            <ul className="space-y-2">
              {weDontHandle.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Avaliações</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">O que nossos clientes dizem</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <GoogleStarsFull />
              <span className="text-muted text-sm">{placeData.rating} · {placeData.reviewCount} avaliações verificadas no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeData.reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0`}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-dark text-sm">{r.name}</div>
                      <div className="text-muted text-xs">{r.date}</div>
                    </div>
                  </div>
                  <GoogleGLogo />
                </div>
                <GoogleStarsFull />
                <p className="text-muted text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          {placeData.mapsUrl && (
            <div className="text-center mt-10">
              <a href={placeData.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold px-8 py-3 rounded-full transition-colors">
                Ver todas as avaliações no Google
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Dúvidas</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre extensão de status no Canadá</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-light rounded-2xl p-6 cursor-pointer [&[open]]:bg-primary [&[open]]:text-white transition-colors duration-200">
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
          <p className="text-center text-xs text-muted mt-10 leading-relaxed">
            Conteúdo revisado em {lastReviewed}. Fontes oficiais:{' '}
            <a href={irccExtend} target="_blank" rel="noopener noreferrer" className="text-primary underline">IRCC (extensão de estadia)</a> e{' '}
            <a href={irccTimes} target="_blank" rel="noopener noreferrer" className="text-primary underline">prazos de processamento da IRCC</a>.
            Regras e taxas mudam com frequência: confirme sempre nos sites oficiais.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-4">Seu status tem data para vencer. Não deixe para a última semana.</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Pedindo antes do vencimento, você mantém o seu status enquanto a IRCC decide. Quanto antes começarmos, mais tempo há para montar um pedido <strong className="text-white">bem documentado e sem pressa</strong>.
          </p>
          <a href="#avaliacao"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar minha avaliação
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light scroll-mt-20" id="avaliacao">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Faça sua avaliação inicial</h2>
          <p className="text-muted">Conte sua situação e receba uma análise honesta: se o seu caso tem base, qual o caminho e quais documentos você vai precisar.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
