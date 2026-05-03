import type { Metadata } from 'next';
import VideoCarousel from '../visto-americano/VideoCarousel';

export const metadata: Metadata = {
  title: 'Visto Canadense | Consultoria Especializada para Brasileiros | Vow Vistos',
  description: 'Consultoria completa para visto canadense: TRV, ETA e Study Permit. Análise de perfil, formulários IRCC, biometria e Garantia Vitalícia. Mais de 7.000 vistos aprovados.',
  keywords: 'visto canadense, consultoria visto canadense, TRV Canada, visto turismo Canada, como tirar visto canadense, visto negado Canada, IRCC, ETA Canada, Study Permit Canada',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';
const GOOGLE_MAPS_URL = 'https://g.page/r/REPLACE_WITH_YOUR_PLACE_ID';

const googleReviews = [
  { name: 'Maria S.',    date: 'março de 2025',    color: 'bg-blue-500',   text: 'Atendimento incrível! Me ajudaram com todo o processo do visto americano, desde a documentação até a simulação da entrevista. Aprovada na primeira tentativa!' },
  { name: 'João P.',     date: 'fevereiro de 2025', color: 'bg-green-500',  text: 'Super profissionais. Já tinha tentado sozinho e levei negativa. Com a Vow Vistos aprovei em menos de 30 dias. A Garantia Vitalícia foi o que me convenceu a contratar.' },
  { name: 'Ana C.',      date: 'janeiro de 2025',   color: 'bg-purple-500', text: 'O suporte foi excelente do início ao fim. Explicaram tudo com clareza, me prepararam muito bem para a entrevista e o visto saiu sem nenhum problema.' },
  { name: 'Carlos M.',   date: 'dezembro de 2024',  color: 'bg-red-500',    text: 'Visto canadense aprovado! A equipe da Vow Vistos é muito atenciosa e competente. Responderam todas as minhas dúvidas rapidamente. Recomendo muito!' },
  { name: 'Fernanda L.', date: 'novembro de 2024',  color: 'bg-yellow-500', text: 'Contratei para o visto americano após duas negativas anteriores. Com o trabalho deles entendi exatamente onde estava errando. Aprovada! Não tenho palavras para agradecer.' },
  { name: 'Ricardo T.',  date: 'outubro de 2024',   color: 'bg-indigo-500', text: 'Processo todo muito bem conduzido. A simulação de entrevista foi decisiva: cheguei ao consulado muito mais confiante. Vale cada centavo investido.' },
];

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

const steps = [
  { num: '01', title: 'Análise de Elegibilidade', desc: 'Identificamos o documento certo para o seu caso: TRV, ETA ou Study Permit. A categoria errada leva à recusa automática.' },
  { num: '02', title: 'Formulários IRCC', desc: 'Cuidamos do preenchimento de todos os formulários online da IRCC com precisão. Cada inconsistência pode resultar em recusa sem direito a reembolso da taxa.' },
  { num: '03', title: 'Biometria e Documentação', desc: 'A maioria dos solicitantes precisa fornecer dados biométricos. Orientamos sobre o agendamento no CVAC e preparamos toda a documentação de suporte.' },
  { num: '04', title: 'Acompanhamento da Aplicação', desc: 'Monitoramos o andamento da sua solicitação na IRCC e mantemos você informado a cada atualização até a decisão final.' },
];

const plans = [
  {
    name: 'Visto de Turismo',
    badge: 'TRV',
    subtitle: 'Para visitas, passeios e trânsito pelo Canadá',
    originalPrice: 'R$ 999,00',
    price: 'R$ 847,00',
    installment: '6x de R$ 141,17 sem juros',
    featured: false,
    cta: 'Contratar TRV',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Canadense%20TRV',
    features: [
      'Orientação passo a passo do começo ao fim',
      'Análise de Perfil',
      'Preparação dos formulários consulares',
      'Elaboração de lista personalizada de documentos',
      'Agendamento e preparação de visita ao VFS',
      'Acompanhamento do seu processo em tempo real',
    ],
  },
  {
    name: 'Visto de Estudos',
    badge: 'Study Permit',
    subtitle: 'Para programas de estudo com duração superior a 6 meses',
    originalPrice: 'R$ 1.049,00',
    price: 'R$ 897,00',
    installment: '6x de R$ 149,50 sem juros',
    featured: true,
    cta: 'Contratar Study Permit',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Study%20Permit%20Canadense',
    features: [
      'Orientação passo a passo do começo ao fim',
      'Análise de Perfil',
      'Preparação dos formulários consulares',
      'Elaboração de lista personalizada de documentos',
      'Agendamento e preparação de visita ao VFS',
      'Preparação para consulta médica (se necessária)',
      'Acompanhamento do seu processo em tempo real',
    ],
  },
  {
    name: 'ETA',
    badge: 'Electronic Travel Authorization',
    subtitle: 'Para passaportes elegíveis à autorização eletrônica',
    originalPrice: 'R$ 349,00',
    price: 'R$ 257,00',
    installment: '6x de R$ 42,83 sem juros',
    featured: false,
    cta: 'Contratar ETA',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20ETA%20Canadense',
    features: [
      'Orientação passo a passo do começo ao fim',
      'Análise de Perfil',
      'Elaboração de lista personalizada de documentos',
      'Preparação dos formulários consulares',
      'Acompanhamento do seu processo em tempo real',
    ],
  },
];

const denialReasons = [
  {
    code: 'Docs',
    title: 'Documentação incompleta ou fraca',
    desc: 'A IRCC analisa sua aplicação inteiramente pela documentação enviada. Documentos financeiros insuficientes, vínculos com o Brasil mal comprovados ou itinerário vago resultam em recusa.',
  },
  {
    code: 'Formulário',
    title: 'Inconsistências na aplicação',
    desc: 'Os formulários da IRCC cruzam informações entre si. Uma data errada, uma resposta que contradiz os documentos ou uma tradução imprecisa pode derrubar a aplicação inteira.',
  },
  {
    code: 'Financeiro',
    title: 'Capacidade financeira insuficiente',
    desc: 'O oficial da IRCC avalia se você tem recursos suficientes para custear a estadia e o retorno. Extratos bancários inconsistentes ou renda incompatível com a viagem declarada geram recusa.',
  },
  {
    code: 'Histórico',
    title: 'Histórico migratório problemático',
    desc: 'Negativas anteriores de visto, permanências além do prazo em outros países ou violações de imigração pesam na análise. A Vow Vistos analisa seu histórico antes de qualquer submissão.',
  },
];

const cvacs = [
  { city: 'São Paulo', state: 'SP', note: 'Principal centro de atendimento do Brasil' },
  { city: 'Rio de Janeiro', state: 'RJ', note: 'Atende o estado do Rio de Janeiro' },
  { city: 'Brasília', state: 'DF', note: 'Atende o Distrito Federal e entorno' },
  { city: 'Curitiba', state: 'PR', note: 'Atende a região Sul' },
  { city: 'Porto Alegre', state: 'RS', note: 'Atende o Rio Grande do Sul' },
];

const visaTypes = [
  { code: 'TRV', desc: 'Temporary Resident Visa, visto de turismo e trânsito para o Canadá' },
  { code: 'ETA', desc: 'Electronic Travel Authorization, para passaportes elegíveis à entrada sem visto' },
  { code: 'Study', desc: 'Study Permit, para programas de estudo com duração superior a 6 meses' },
];

const faqs = [
  { q: 'Brasileiros precisam de visto para entrar no Canadá?', a: 'Sim. Brasileiros precisam do TRV (Temporary Resident Visa) para entrar no Canadá. O ETA é uma autorização eletrônica disponível apenas para cidadãos de países específicos, e o Brasil não está na lista. A Vow Vistos confirma o documento correto para o seu passaporte.' },
  { q: 'O que acontece se meu TRV canadense for recusado?', a: 'A IRCC envia uma carta de recusa informando o artigo da lei citado. Os motivos mais comuns são: perfil de risco de imigração, documentação insuficiente e capacidade financeira não comprovada. Não há prazo de bloqueio para nova tentativa, mas submeter uma aplicação idêntica tende a gerar o mesmo resultado. A Vow Vistos analisa a carta de recusa e reposiciona o perfil antes da próxima submissão.' },
  { q: 'Preciso ir ao consulado para tirar o visto canadense?', a: 'Na maioria dos casos, não há entrevista presencial. A aplicação é feita online pelo portal da IRCC. No entanto, a biometria é obrigatória para a maioria dos solicitantes e é coletada nos CVACs (Canada Visa Application Centres) no Brasil.' },
  { q: 'O que é biometria e quando é necessária?', a: 'A biometria consiste na coleta de impressões digitais e foto, realizada em um CVAC (Canada Visa Application Centre). É obrigatória para a maioria dos solicitantes e tem validade de 10 anos. A Vow Vistos orienta sobre o agendamento e o que levar no dia.' },
  { q: 'Qual a diferença entre TRV e ETA?', a: 'O TRV é um visto adesivado no passaporte, exigido para nacionais de países como o Brasil. O ETA é uma autorização eletrônica vinculada ao passaporte, disponível apenas para cidadãos de países isentos de visto para o Canadá. Brasileiros, em geral, precisam do TRV.' },
  { q: 'Quanto tempo demora a aprovação do visto canadense?', a: 'O tempo varia conforme o tipo de visto e o volume de solicitações da IRCC. Vistos de turismo levam em média de 2 a 8 semanas. Study Permits podem levar mais tempo. A Vow Vistos orienta sobre como preparar uma aplicação robusta para evitar atrasos.' },
  { q: 'Quais documentos preciso para o TRV canadense?', a: 'Os documentos base são: passaporte válido, fotos recentes, comprovante de vínculos com o Brasil (emprego, imóvel, família), documentos financeiros (extratos bancários, declaração de IR, comprovante de renda) e itinerário de viagem. A Vow Vistos entrega um checklist personalizado para o seu perfil.' },
  { q: 'Quanto custam as taxas do governo canadense?', a: 'As taxas pagas diretamente ao governo canadense são: TRV: CAD $100, ETA: CAD $7, Study Permit: CAD $150, Biometria: CAD $85. Essas taxas não são reembolsáveis em caso de recusa e não estão incluídas na consultoria da Vow Vistos.' },
  { q: 'Por quanto tempo o TRV canadense é válido?', a: 'O TRV de turismo costuma ser emitido com validade de até 10 anos ou até o vencimento do passaporte, o que ocorrer primeiro. O prazo de permanência em cada entrada é determinado pelo agente de fronteira canadense, geralmente 6 meses.' },
  { q: 'Posso estudar no Canadá com visto de turismo?', a: 'Apenas em cursos de curta duração (até 6 meses). Para programas mais longos, é necessário o Study Permit. Estudar além do autorizado com TRV configura violação das condições do visto.' },
  { q: 'Quem já teve visto negado pode tentar novamente?', a: 'Sim. Não há limite de tentativas. O importante é entender o motivo da recusa e corrigir os pontos antes de submeter nova aplicação. A Vow Vistos analisa a decisão anterior e reposiciona o perfil para a próxima tentativa.' },
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

export default function VistoCanadensePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533094602577-198d3beab8ea?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-primary/70" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🇨🇦</span>
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Especialistas em Visto Canadense
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Canadense</span><br/>
            Aprovado com Segurança
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Análise de perfil, formulários IRCC sem erros, orientação na biometria e Garantia Vitalícia. A consultoria mais completa do Brasil para o visto canadense.
          </p>
          <p className="text-sm text-white/50 mb-10">Mais de 7.000 vistos aprovados · Especialização exclusiva desde 2017 · 100% remoto, atendemos todo o Brasil</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Canadense`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors text-base shadow-lg">
              Análise de Perfil Gratuita
            </a>
            <a href="#planos"
              className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors text-base">
              Ver Opções
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
          {[['8 Anos','Especialização exclusiva em consultoria consular'],['7.000+','Vistos aprovados para brasileiros'],['100% Remoto','Atendemos clientes em todo o Brasil']].map(([v,l])=>(
            <div key={l}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{v}</div>
              <div className="text-xs text-white/60 mt-1 hidden sm:block">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY VISAS GET DENIED ──────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Negativas</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Por que o visto canadense é recusado?</h2>
            <p className="text-muted">A IRCC analisa sua aplicação inteiramente pela documentação. Identificar e corrigir os pontos fracos antes de submeter é o que fazemos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {denialReasons.map((r) => (
              <div key={r.code} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="inline-block bg-primary/10 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full mb-4">{r.code}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{r.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Quero%20entender%20se%20tenho%20risco%20de%20negativa%20no%20visto%20canadense`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Verificar meu perfil gratuitamente
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Processo</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Como funciona a consultoria de visto canadense</h2>
            <p className="text-muted">Cada etapa foi desenhada para eliminar os riscos de recusa e entregar ao oficial da IRCC a aplicação mais sólida possível.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── TRANSPARENCY ──────────────────────────────────────────────── */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Transparência</span>
            <h2 className="text-4xl font-heading font-bold mb-6">A IRCC decide, não a Vow Vistos. Desconfie de quem promete aprovação garantida.</h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              A decisão final cabe sempre ao oficial de imigração canadense. Nenhuma consultoria no mundo pode mudar isso. Se alguém prometeu aprovação certa ou exibiu taxas extraordinárias como argumento de venda, isso é um sinal de alerta, não de competência.
            </p>
            <p className="text-white/75 text-lg leading-relaxed">
              O que uma consultoria séria pode fazer, e o que a Vow Vistos faz, é garantir que a sua aplicação chegue à IRCC da forma mais sólida possível: documentação completa, formulários sem erros, carta de apresentação consistente com o seu perfil real.
            </p>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-heading font-bold mb-4">O processo canadense é diferente do americano, e isso muda tudo</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Diferente dos Estados Unidos, onde há uma entrevista presencial com o cônsul, o Canadá analisa a sua aplicação inteiramente pela documentação enviada online. O oficial da IRCC não te verá pessoalmente: ele lerá o que você enviou. Por isso, a qualidade, a consistência e a completude do pacote documental são determinantes.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-lg mb-2">Nossa metodologia vem de dentro do consulado</p>
                  <p className="text-white/70 leading-relaxed">
                    A forma como a Vow Vistos prepara cada aplicação foi desenvolvida com base na experiência de um ex-oficial do consulado americano com mais de 10 anos de atuação, aliada ao conhecimento profundo dos critérios da IRCC canadense. Sabemos o que um oficial de imigração procura, o que levanta suspeitas e o que passa despercebido.
                  </p>
                  <p className="text-white/70 leading-relaxed mt-3">
                    Esse conhecimento não está em nenhum guia gratuito na internet. E é exatamente ele que repassamos aos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Planos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Escolha o tipo de serviço</h2>
            <p className="text-muted">Parcelamos em até 6x sem juros no cartão. Clique em qualquer plano para falar com um especialista.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white'}`}>
                {p.featured && (
                  <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais procurado</span>
                )}
                <div className={`text-xs font-heading font-bold uppercase tracking-widest mb-1 ${p.featured ? 'text-accent' : 'text-primary'}`}>{p.badge}</div>
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-xs mb-6 ${p.featured ? 'text-white/50' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-4xl font-heading font-extrabold mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>
                  {p.price}
                </div>
                <p className={`text-xs mb-8 ${p.featured ? 'text-white/50' : 'text-muted'}`}>ou {p.installment}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.featured ? 'text-accent' : 'text-green-500'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className={p.featured ? 'text-white/80' : 'text-muted'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${wa}?text=${p.msg}`} target="_blank" rel="noopener noreferrer"
                  className={`block text-center font-heading font-bold px-6 py-3 rounded-full transition-colors ${p.featured ? 'bg-accent hover:bg-accent-light text-dark' : 'bg-primary hover:bg-primary-light text-white'}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-10 max-w-2xl mx-auto">
            Preparamos seu processo de acordo com os requisitos da IRCC, proporcionando a melhor chance de aprovação. Orientamos do início ao fim. Nosso trabalho só está completo quando você tiver o seu visto canadense em mãos.
          </p>
        </div>
      </section>

      {/* ── CVACs ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Onde Coletar</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">CVACs no Brasil</h2>
            <p className="text-muted">Os Canada Visa Application Centres são onde você entrega documentos e coleta biometria. Você pode ir a qualquer um, independente de onde mora. A Vow Vistos orienta o melhor para o seu caso.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {cvacs.map((c) => (
              <div key={c.city} className="bg-light rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🇨🇦</div>
                <div className="font-heading font-bold text-dark">{c.city}</div>
                <div className="text-xs text-accent font-heading font-semibold mb-1">{c.state}</div>
                <p className="text-muted text-xs leading-snug">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">O tempo de espera para biometria varia por cidade e período. Consulte-nos antes de agendar.</p>
          <div className="mt-6 text-center text-sm text-muted">
            Também assessoramos vistos para{' '}
            <a href="/visto-americano" className="text-accent font-semibold hover:underline">Estados Unidos</a>,{' '}
            <a href="/visto-chines" className="text-accent font-semibold hover:underline">China</a> e{' '}
            <a href="/outros-paises" className="text-accent font-semibold hover:underline">outros países</a>.
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Histórias reais de aprovação</h2>
            <p className="text-muted">Veja o que nossos clientes falam sobre a experiência com a Vow Vistos.</p>
          </div>
          <VideoCarousel />
        </div>
      </section>

      {/* ── SPECIFIC PROFILES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Perfis Específicos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Situações especiais no visto canadense</h2>
            <p className="text-muted">Cada perfil tem desafios próprios. A Vow Vistos tem experiência com as situações mais sensíveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Estudantes',
                body: 'O Study Permit exige comprovação de matrícula em instituição credenciada pela IRCC, capacidade financeira para custear estudos e estadia, e vínculos sólidos com o Brasil. Cursos de até 6 meses podem ser feitos com TRV, mas programas mais longos exigem o Study Permit. A Vow Vistos orienta cada caso e prepara toda a documentação.',
              },
              {
                title: 'MEI, autônomos e informais',
                body: 'Comprovar renda sem holerite tradicional é o principal desafio para trabalhadores por conta própria. Extratos bancários consistentes, declaração do MEI ou DECORE e contratos com clientes são os documentos centrais. A IRCC avalia a capacidade financeira para a viagem, não o tipo de vínculo empregatício.',
              },
              {
                title: 'Aposentados e turistas frequentes',
                body: 'Aposentados têm boas chances de aprovação do TRV quando demonstram renda regular, imóvel no Brasil e vínculos familiares sólidos. A ausência de emprego formal não é obstáculo, mas a comprovação de independência financeira é fundamental. A Vow Vistos orienta como apresentar esse perfil da forma mais favorável.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-light rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-bold text-dark text-lg mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Meu%20caso%20é%20específico,%20quero%20uma%20análise%20para%20o%20visto%20canadense`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Meu caso é específico, quero uma análise
            </a>
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
              <span className="text-muted text-sm">4.9 · 100+ avaliações verificadas no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {googleReviews.map((r) => (
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
          <div className="text-center mt-10">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold px-8 py-3 rounded-full transition-colors">
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Dúvidas</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto canadense</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl p-6 cursor-pointer [&[open]]:bg-primary [&[open]]:text-white transition-colors duration-200">
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
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-4">Garantia Vitalícia</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Se o seu visto canadense for recusado, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a sua aprovação. Você paga apenas as taxas do governo.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Canadense`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar agora
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Fale com um especialista em visto canadense</h2>
          <p className="text-muted">Respondemos em até 24 horas úteis com uma análise honesta do seu perfil.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <p className="text-center text-muted text-sm mb-6">Formulário Gravity Forms: configure o ID em <code className="bg-light px-1 rounded text-xs">.env.local</code>.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Canadense`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-3 rounded-full transition-colors w-full">
            Prefiro falar pelo WhatsApp
          </a>
          <p className="text-center text-xs text-muted mt-4">
            Prefere visitar nossa{' '}
            <a href="/contato" className="text-accent hover:underline">página de contato</a>
            {' '}completa.
          </p>
        </div>
      </section>
    </>
  );
}
