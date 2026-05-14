import type { Metadata } from 'next';
import LeadForm from './LeadForm';
import VideoCarousel from '../../(site)/visto-americano/VideoCarousel';
import { getGooglePlacesData } from '@/lib/google-places';

export const metadata: Metadata = {
  title: 'Assessoria de Visto Canadense | TRV, Study Permit e ETA | Vow Vistos',
  description: 'Assessoria completa para o visto canadense: TRV, Study Permit e ETA. Documentação impecável, orientação de biometria e Garantia Vitalícia. Análise de perfil gratuita.',
  robots: 'noindex',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';


function Stars() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  );
}

const denialReasons = [
  {
    code: 'Docs',
    title: 'Documentação incompleta ou fraca',
    desc: 'O IRCC analisa sua aplicação inteiramente pela documentação enviada, sem entrevista. Documentos faltando, desatualizados ou sem tradução certificada resultam em recusa imediata.',
  },
  {
    code: 'Formulário',
    title: 'Inconsistências na aplicação',
    desc: 'Os formulários do IRCC cruzam informações entre si. Uma data errada, uma resposta que contradiz os documentos ou uma tradução imprecisa pode derrubar a aplicação inteira.',
  },
  {
    code: 'Financeiro',
    title: 'Comprovação financeira insuficiente',
    desc: 'O oficial do IRCC avalia se você tem recursos para custear a estadia e o retorno. Extratos inconsistentes ou renda incompatível com a viagem declarada geram recusa.',
  },
  {
    code: 'Histórico',
    title: 'Negativa anterior sem estratégia',
    desc: 'Tentar novamente sem entender o motivo da recusa anterior é o erro mais comum. A Vow Vistos analisa a carta de recusa do IRCC e reposiciona o perfil antes da nova tentativa.',
  },
];

const steps = [
  { num: '01', title: 'Análise de Elegibilidade', desc: 'Identificamos o documento certo para o seu caso: TRV, ETA ou Study Permit. A categoria errada leva à recusa automática.' },
  { num: '02', title: 'Preparação Documental', desc: 'Organizamos e revisamos cada documento conforme os critérios exatos do IRCC. Um documento faltando ou desatualizado pode travar o processo.' },
  { num: '03', title: 'Biometria no VFS', desc: 'Orientamos onde e como coletar sua biometria no VFS (Visa Application Centre) mais próximo. Etapa obrigatória para a maioria dos vistos canadenses.' },
  { num: '04', title: 'Acompanhamento IRCC', desc: 'Monitoramos o andamento do seu processo no portal do IRCC e respondemos qualquer solicitação adicional de documentos até a decisão final.' },
];

const plans = [
  {
    name: 'Visto de Turismo',
    badge: 'TRV',
    subtitle: 'Para visitas, passeios e trânsito pelo Canadá',
    price: 'R$ 847',
    installment: '6x de R$ 141,17 sem juros',
    featured: false,
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Canadense%20TRV',
    cta: 'Contratar TRV',
    features: [
      'Análise completa de perfil',
      'Preparação de todos os formulários IRCC',
      'Carta de apresentação personalizada',
      'Checklist de documentação personalizado',
      'Orientação para coleta de biometria no VFS',
      'Acompanhamento no portal IRCC',
      'Garantia Vitalícia de reaprovação',
    ],
  },
  {
    name: 'Visto de Estudos',
    badge: 'Study Permit',
    subtitle: 'Para programas com duração superior a 6 meses',
    price: 'R$ 897',
    installment: '6x de R$ 149,50 sem juros',
    featured: true,
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Study%20Permit%20Canadense',
    cta: 'Contratar Study Permit',
    features: [
      'Análise completa de perfil',
      'Preparação de todos os formulários IRCC',
      'Carta de apresentação personalizada',
      'Checklist de documentação personalizado',
      'Orientação para coleta de biometria no VFS',
      'Preparação para consulta médica (se necessária)',
      'Acompanhamento no portal IRCC',
      'Garantia Vitalícia de reaprovação',
    ],
  },
  {
    name: 'ETA',
    badge: 'Autorização Eletrônica',
    subtitle: 'Para viagens de curta duração de avião',
    price: 'R$ 257',
    installment: '6x de R$ 42,83 sem juros',
    featured: false,
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20ETA%20Canadense',
    cta: 'Contratar ETA',
    features: [
      'Análise de elegibilidade',
      'Preenchimento do formulário online',
      'Checklist de documentação',
      'Acompanhamento da aprovação',
      'Suporte em caso de recusa',
    ],
  },
];

const faqs = [
  { q: 'Qual a diferença entre TRV, Study Permit e ETA?', a: 'O TRV (Temporary Resident Visa) é o visto de turismo padrão, emitido fisicamente no passaporte, necessário para a maioria dos brasileiros que visitam o Canadá. O Study Permit é para quem vai estudar por mais de 6 meses e exige carta de aceitação de uma instituição designada (DLI). A ETA (Electronic Travel Authorization) é uma autorização eletrônica para entradas por via aérea em viagens curtas, mais rápida e barata, mas com limitações de uso. A Vow Vistos identifica qual é o certo para o seu caso.' },
  { q: 'Por que contratar uma consultoria para o visto canadense?', a: 'O processo canadense é 100% documental, sem entrevista. O IRCC decide exclusivamente com base no que você enviou. Um documento desatualizado, uma carta de apresentação mal estruturada ou uma inconsistência financeira resulta em recusa sem chance de explicação. A Vow Vistos garante que tudo chega ao IRCC na forma e ordem corretas, desde o primeiro envio.' },
  { q: 'Preciso fazer entrevista para o visto canadense?', a: 'Na grande maioria dos casos, não. O processo canadense é totalmente online: você submete a documentação e o IRCC decide. A exceção é quando o IRCC solicita uma entrevista adicional, o que é raro. O que determina a aprovação é a qualidade da documentação, não uma entrevista presencial.' },
  { q: 'O que é biometria e onde faço?', a: 'A biometria (impressões digitais e foto) é obrigatória para a maioria dos solicitantes brasileiros. Ela é coletada presencialmente em um VFS (Visa Application Centre). No Brasil, os VFS ficam em São Paulo, Rio de Janeiro, Brasília e Curitiba. A Vow Vistos orienta sobre quando e como agendar conforme o andamento da sua aplicação.' },
  { q: 'Quanto tempo demora a aprovação do visto canadense?', a: 'O tempo médio de processamento do TRV é de 15 a 45 dias úteis, dependendo do volume e da época do ano. O Study Permit pode levar até 8 semanas. A ETA é aprovada geralmente em minutos, mas pode levar até 72 horas. Esses prazos não incluem o tempo de coleta de biometria, por isso o planejamento antecipado é fundamental.' },
  { q: 'Meu visto foi negado. Posso tentar novamente?', a: 'Sim. Não há limite de tentativas para o visto canadense. O importante é entender o motivo da recusa (que aparece na carta do IRCC) e corrigir antes de tentar novamente. Tentar de novo sem corrigir os mesmos pontos resulta em nova recusa. A Vow Vistos analisa a carta de recusa e reposiciona o perfil.' },
  { q: 'Como comprovar renda sendo MEI ou autônomo?', a: 'Para MEI e autônomos, a comprovação de renda exige mais atenção: extratos bancários dos últimos 6 meses, DECORE ou declaração do contador, comprovante de faturamento e, se possível, contratos com clientes. O IRCC busca consistência. Renda que oscila abruptamente levanta suspeita. A Vow Vistos orienta exatamente o que usar para o seu perfil.' },
  { q: 'Quanto custa a taxa do governo canadense?', a: 'A taxa de processamento do TRV é CAD 100 por pessoa. O Study Permit custa CAD 150. A ETA custa CAD 7. Além disso, a biometria tem taxa separada: CAD 85 por pessoa ou CAD 170 para grupo familiar. Esses valores são pagos diretamente ao governo canadense e não estão incluídos na consultoria da Vow Vistos.' },
  { q: 'Por quanto tempo o visto canadense é válido?', a: 'O TRV é geralmente emitido com validade de 10 anos ou até o vencimento do passaporte (o que vier primeiro), com múltiplas entradas. Cada entrada permite estadia de até 6 meses, determinada pelo agente de fronteira na chegada. O Study Permit tem validade correspondente à duração do programa de estudos mais um período de graça.' },
  { q: 'Posso incluir minha família na solicitação?', a: 'Cada membro da família precisa de sua própria solicitação individual. No entanto, as aplicações podem ser vinculadas ao mesmo grupo familiar no sistema do IRCC, o que facilita o processo. A Vow Vistos orienta famílias completas em cada etapa, garantindo consistência entre todas as aplicações do grupo.' },
];

export default async function LandingPage() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      {/* ── NAV BAR ───────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-heading font-extrabold text-xl text-primary tracking-tight">
            Vow <span className="text-accent">Vistos</span>
          </a>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Canadense`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-4 py-2 rounded-full transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline">Falar pelo WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-dark to-primary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-3xl">🇨🇦</span>
                <span className="bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Especialistas em Visto Canadense
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
                Assessoria de Visto Canadense:{' '}
                <span className="text-accent">Aprovado na Primeira Tentativa</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                TRV, Study Permit e ETA: documentação impecável, biometria orientada e Garantia Vitalícia. Atendemos brasileiros em todo o país.
              </p>
              <div className="flex flex-wrap gap-3">
                {['8 anos de experiência', '100% remoto', 'Garantia Vitalícia'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 text-white/90 text-sm px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="font-heading font-extrabold text-dark text-2xl mb-1 text-center">Análise de Perfil Gratuita</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
          {[
            ['8 Anos', 'Especialização exclusiva'],
            ['TRV · ETA', 'Study Permit'],
            ['Garantia', 'Vitalícia de reaprovação'],
            ['100%', 'Remoto, todo o Brasil'],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{v}</div>
              <div className="text-xs text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── REVIEWS ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Avaliações</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">O que nossos clientes dizem</h2>
            <div className="flex items-center justify-center gap-2">
              <Stars />
              <span className="font-heading font-bold text-dark">{placeData.rating}</span>
              <span className="text-muted text-sm">· {placeData.reviewCount} avaliações verificadas no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeData.reviews.map((r) => (
              <div key={r.name} className="bg-light rounded-2xl p-6 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0`}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-dark text-sm">{r.name}</div>
                    <div className="text-muted text-xs">{r.date}</div>
                  </div>
                </div>
                <Stars />
                <p className="text-muted text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VISAS GET DENIED ──────────────────────────────────────── */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Negativas</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Por que o visto canadense é negado?</h2>
            <p className="text-muted text-sm">Sem entrevista, o IRCC decide tudo pela documentação. Identificar e corrigir esses pontos antes do envio é exatamente o que fazemos.</p>
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

      {/* ── SPECIFIC PROFILES ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Perfis Específicos</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">O seu caso tem solução</h2>
            <p className="text-muted text-sm">Cada perfil tem desafios próprios. A Vow Vistos tem experiência com as situações mais sensíveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Estudantes',
                body: 'Para o Study Permit, a carta de aceitação da instituição canadense é obrigatória, mas não suficiente. É preciso comprovar capacidade financeira, vínculos com o Brasil e intenção de retorno. A Vow Vistos prepara toda a documentação complementar para que o perfil chegue completo ao IRCC.',
              },
              {
                title: 'MEI e autônomos',
                body: 'Comprovar renda estável sem holerite exige atenção especial no processo canadense. Extratos bancários consistentes, DECORE ou declaração do contador e contratos com clientes são os documentos centrais. A Vow Vistos orienta exatamente o que usar para o seu caso.',
              },
              {
                title: 'Quem teve visto negado',
                body: 'Negativas do IRCC geralmente têm motivos documentais ou financeiros identificáveis na carta de recusa. Tentar novamente sem corrigir os mesmos pontos resulta em nova negativa. A Vow Vistos analisa o histórico e reposiciona o perfil antes da próxima tentativa.',
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

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Processo</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Como funciona a consultoria</h2>
            <p className="text-muted text-sm">Da análise ao acompanhamento no IRCC, cada etapa desenhada para eliminar o risco de negativa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 text-center">
                <div className="text-5xl font-heading font-extrabold text-accent/20 mb-3 leading-none">{s.num}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Depoimentos</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Histórias reais de aprovação</h2>
            <p className="text-muted text-sm">Veja o que nossos clientes falam sobre a experiência com a Vow Vistos.</p>
          </div>
          <VideoCarousel />
        </div>
      </section>

      {/* ── CREDIBILITY ───────────────────────────────────────────────── */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Transparência</span>
          <h2 className="text-3xl font-heading font-bold mb-6">Nenhuma consultoria pode garantir a aprovação do seu visto. Desconfie de quem diz o contrário.</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-6">
            A decisão final é sempre do IRCC. Isso não muda, independente de quem te atende. Se alguém te prometeu aprovação garantida ou exibiu uma taxa de aprovação extraordinária como argumento de venda, isso é um sinal de alerta, não de competência.
          </p>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            O que uma consultoria séria pode fazer, e o que a Vow Vistos faz, é garantir que o seu perfil chegue ao IRCC da forma mais sólida possível. Documentação completa, carta de apresentação bem construída, sem improvisação.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-heading font-bold text-lg mb-2">Nossa metodologia vem de anos de imersão no sistema canadense</p>
                <p className="text-white/70 leading-relaxed">
                  A forma como a Vow Vistos orienta a preparação documental e a construção da carta de apresentação foi desenvolvida com base no estudo aprofundado dos critérios reais do IRCC, análise de centenas de processos aprovados e negados, e colaboração com especialistas em imigração canadense.
                </p>
                <p className="text-white/70 leading-relaxed mt-3">
                  Sabemos exatamente o que o IRCC analisa, o que levanta suspeitas e o que passa direto. Esse conhecimento é o que repassamos aos nossos clientes em cada processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Planos</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Preços da consultoria</h2>
            <p className="text-muted text-sm">Parcelamos em até 6x sem juros no cartão.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white border border-light'}`}>
                {p.featured && (
                  <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais popular</span>
                )}
                <div className={`text-xs font-heading font-bold uppercase tracking-widest mb-1 ${p.featured ? 'text-accent' : 'text-primary'}`}>{p.badge}</div>
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-4xl font-heading font-extrabold mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>
                  {p.price}<span className="text-base font-normal">,00</span>
                </div>
                <p className={`text-xs mb-8 ${p.featured ? 'text-white/50' : 'text-muted'}`}>ou {p.installment}</p>
                <ul className="space-y-3 mb-8 flex-1">
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
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Dúvidas</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2">Perguntas frequentes</h2>
          </div>
          <div className="space-y-3">
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
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
                Pronto para tirar o visto canadense?
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Análise de perfil gratuita, sem compromisso. Respondemos em minutos.
              </p>
              <div className="flex flex-col gap-2">
                {['TRV, Study Permit e ETA: todos os vistos canadenses', 'Garantia Vitalícia: sem custo extra se negar', '100% remoto, atendemos todo o Brasil'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/80 text-sm">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="font-heading font-extrabold text-dark text-xl mb-4 text-center">Fale com um especialista agora</h3>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-dark border-t border-white/10 py-6 text-center">
        <p className="text-white/40 text-xs">
          © 2025 Vow Vistos · Todos os direitos reservados ·{' '}
          <a href="/contato" className="hover:text-white/70 transition-colors">Contato</a>
        </p>
      </footer>
    </>
  );
}
