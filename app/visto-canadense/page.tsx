import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visto Canadense | Consultoria Especializada para Brasileiros | Vow Vistos',
  description: 'Consultoria completa para visto canadense: TRV, ETA e Study Permit. Análise de perfil, formulários IRCC, biometria e Garantia Vitalícia. Mais de 7.000 vistos aprovados.',
  keywords: 'visto canadense, consultoria visto canadense, TRV Canada, visto turismo Canada, como tirar visto canadense, visto negado Canada, IRCC, ETA Canada, Study Permit Canada',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

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
    cta: 'Iniciar Conversa',
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
    cta: 'Iniciar Conversa',
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
    cta: 'Iniciar Conversa',
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
  { q: 'O que é o código 214(b) e como evitá-lo?', a: 'O código 214(b) é específico dos Estados Unidos. Para o Canadá, as recusas da IRCC geralmente citam artigos da Lei de Imigração e Proteção de Refugiados (IRPA), sendo os mais comuns: perfil de risco de imigração, documentação insuficiente ou capacidade financeira não comprovada.' },
  { q: 'Preciso ir ao consulado para tirar o visto canadense?', a: 'Na maioria dos casos, não há entrevista presencial. A aplicação é feita online pelo portal da IRCC. No entanto, a biometria é obrigatória para a maioria dos solicitantes e é coletada nos CVACs (Canada Visa Application Centres) no Brasil.' },
  { q: 'O que é biometria e quando é necessária?', a: 'A biometria consiste na coleta de impressões digitais e foto, realizada em um CVAC (Canada Visa Application Centre). É obrigatória para a maioria dos solicitantes e tem validade de 10 anos. A Vow Vistos orienta sobre o agendamento e o que levar no dia.' },
  { q: 'Qual a diferença entre TRV e ETA?', a: 'O TRV é um visto adesivado no passaporte, exigido para nacionais de países como o Brasil. O ETA é uma autorização eletrônica vinculada ao passaporte, disponível apenas para cidadãos de países isentos de visto para o Canadá. Brasileiros, em geral, precisam do TRV.' },
  { q: 'Quanto tempo demora a aprovação do visto canadense?', a: 'O tempo varia conforme o tipo de visto e o volume de solicitações da IRCC. Vistos de turismo levam em média de 2 a 8 semanas. Study Permits e Work Permits podem levar mais. A Vow Vistos orienta sobre como preparar uma aplicação robusta para evitar atrasos.' },
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
          <p className="text-sm text-white/50 mb-10">Mais de 7.000 vistos aprovados · Especialização exclusiva desde 2017</p>
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
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-2 gap-4 text-center divide-x divide-white/10">
          {[['8 Anos','Especialização exclusiva em consultoria consular'],['7.000+','Vistos aprovados para brasileiros']].map(([v,l])=>(
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
                <div className="mb-1">
                  <span className={`text-sm line-through ${p.featured ? 'text-white/40' : 'text-muted'}`}>DE {p.originalPrice} POR</span>
                </div>
                <div className={`text-3xl font-heading font-extrabold mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>
                  APENAS {p.price}
                </div>
                <p className={`text-xs mb-8 ${p.featured ? 'text-white/50' : 'text-muted'}`}>ou {p.installment}</p>
                <a href={`https://wa.me/${wa}?text=${p.msg}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-colors mb-8">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {p.cta}
                </a>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      <span className={p.featured ? 'text-white/80' : 'text-muted'}>{f}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-sm font-heading font-bold">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <span className={p.featured ? 'text-accent' : 'text-primary'}>Assessoria parcelada em até 6x sem juros no cartão</span>
                  </li>
                </ul>
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

      {/* ── VISA TYPES ────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Categorias</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Tipos de visto e autorização canadense</h2>
            <p className="text-muted">O TRV cobre turismo e trânsito, mas existem categorias específicas para outros objetivos. Cada uma tem critérios e etapas próprias.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {visaTypes.map((v) => (
              <div key={v.code} className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-extrabold text-primary text-sm">{v.code}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed pt-1">{v.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-10">Não sabe qual categoria se aplica ao seu caso? <a href={`https://wa.me/${wa}?text=Quero%20saber%20qual%20tipo%20de%20visto%20canadense%20preciso`} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Fale conosco.</a></p>
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
