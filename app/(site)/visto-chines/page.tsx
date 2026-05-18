import type { Metadata } from 'next';
import Image from 'next/image';
import VideoCarousel from '@/components/VideoCarousel';

export const metadata: Metadata = {
  title: 'Visto Chinês | Consultoria Especializada para Brasileiros | Vow Vistos',
  description: 'Consultoria completa para o visto chinês: análise de perfil, documentação sem erros, orientação no CVASC e Garantia Vitalícia. Mais de 7.000 vistos aprovados.',
  keywords: 'visto chinês, visto para China, consultoria visto chinês, como tirar visto da China, CVASC, visto China brasileiro, visto L China, visto M China',
};

import { getGooglePlacesData } from '@/lib/google-places';

const wa = '558520186898';

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
  { num: '01', title: 'Análise de Perfil e Categoria', desc: 'Identificamos a categoria correta para o seu objetivo: turismo (L) ou negócios (M). A categoria errada resulta em recusa automática.' },
  { num: '02', title: 'Preparação da Documentação', desc: 'Cuidamos de toda a documentação exigida pelo consulado chinês, incluindo formulário, carta de apresentação, comprovantes financeiros e fotos no padrão exigido.' },
  { num: '03', title: 'Orientação no CVASC', desc: 'O visto chinês é solicitado presencialmente no CVASC. Orientamos sobre o agendamento, o que levar e o procedimento completo para a entrega dos documentos.' },
  { num: '04', title: 'Acompanhamento até a Aprovação', desc: 'Monitoramos o andamento da solicitação e mantemos você informado. Se houver qualquer solicitação adicional do consulado, respondemos juntos.' },
];

const features = [
  'Análise completa de perfil antes de iniciar',
  'Identificação da categoria correta de visto',
  'Checklist de documentação personalizado',
  'Preparação e revisão dos formulários consulares',
  'Orientação sobre carta de apresentação',
  'Orientação para agendamento no CVASC',
  'Acompanhamento em tempo real do processo',
  'Garantia Vitalícia de reaprovação',
];

const plans = [
  {
    name: 'Visto de Turismo',
    subtitle: 'Visto L para visitas turísticas e lazer na China',
    price: 'R$ 480',
    installment: '6x de R$ 80,00 sem juros',
    featured: false,
    cta: 'Contratar Visto L',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Chin%C3%AAs%20de%20Turismo',
  },
  {
    name: 'Visto de Negócios',
    subtitle: 'Visto M para missões comerciais e feiras na China',
    price: 'R$ 480',
    installment: '6x de R$ 80,00 sem juros',
    featured: true,
    cta: 'Contratar Visto M',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Chin%C3%AAs%20de%20Neg%C3%B3cios',
  },
];

const denialReasons = [
  {
    code: 'Documentação',
    title: 'Documentação incompleta ou incorreta',
    desc: 'O consulado chinês tem uma lista de documentos obrigatórios muito específica. Um documento faltando, mal traduzido ou fora do padrão resulta em recusa sem possibilidade de complementação posterior.',
  },
  {
    code: 'Foto',
    title: 'Foto fora do padrão exigido',
    desc: 'O consulado chinês tem um dos padrões de foto mais rígidos do mundo: dimensões exatas, fundo branco puro, expressão neutra, sem óculos. Fotos fora do padrão são rejeitadas na hora no CVASC.',
  },
  {
    code: 'Formulário',
    title: 'Inconsistências no formulário',
    desc: 'O formulário consular chinês cruza dados com passaporte, comprovantes e itinerário. Uma data divergente, um endereço incorreto ou uma resposta ambígua pode derrubar toda a solicitação.',
  },
  {
    code: 'Histórico',
    title: 'Histórico migratório problemático',
    desc: 'Negativas anteriores de visto para China ou outros países, permanências além do prazo ou violações de imigração pesam na análise. A Vow Vistos avalia o histórico antes de qualquer submissão.',
  },
];

const cvacs = [
  { city: 'São Paulo', state: 'SP', note: 'Principal unidade do Brasil, maior volume de atendimentos' },
  { city: 'Rio de Janeiro', state: 'RJ', note: 'Atende o estado do Rio de Janeiro e entorno' },
];

const visaTypes = [
  { code: 'L', name: 'Turismo', desc: 'Para visitas turísticas, lazer e visitas a familiares na China. O visto mais solicitado por brasileiros.' },
  { code: 'M', name: 'Negócios', desc: 'Para viagens de negócios, feiras comerciais, missões empresariais e atividades comerciais na China.' },
];

const faqs = [
  { q: 'Brasileiros precisam de visto para visitar a China?', a: 'Sim. Brasileiros precisam de visto para entrar na China. A única exceção é o trânsito sem visto (TWOV) em aeroportos específicos por até 24 horas, mediante certas condições. Para qualquer outro objetivo, o visto é obrigatório.' },
  { q: 'O que é o CVASC e como funciona?', a: 'O CVASC (Centro de Solicitação de Visto da China) é o local onde você entrega a documentação e retira o passaporte com o visto aprovado. Diferente dos consulados americano e canadense, o processo chinês exige presença física para entrega dos documentos. No Brasil, o CVASC tem unidades em São Paulo e Rio de Janeiro. A Vow Vistos orienta sobre o que levar, como agendar e o que esperar no atendimento.' },
  { q: 'O visto chinês tem entrevista presencial?', a: 'Não. Para a maioria das categorias de visto, o consulado chinês não realiza entrevista. A decisão é tomada exclusivamente com base na documentação apresentada, o que torna a qualidade e a completude do pacote documental ainda mais importante.' },
  { q: 'Quanto tempo demora o visto chinês?', a: 'Em condições normais, o processamento leva de 4 a 7 dias úteis após a entrega no CVASC. Há opções de processamento expresso (2 a 3 dias) e urgente (1 dia), com taxas adicionais. A Vow Vistos orienta sobre a melhor opção para o seu prazo.' },
  { q: 'Quais documentos são necessários para o visto chinês?', a: 'Os documentos base variam por categoria, mas incluem: formulário de solicitação preenchido, passaporte com validade mínima de 6 meses além da estadia planejada, foto no padrão exigido, comprovantes financeiros (extratos bancários e declaração de IR), comprovante de reserva de hospedagem e passagens, e carta de apresentação. Para vistos M (negócios), é necessário convite de empresa chinesa. A Vow Vistos entrega um checklist personalizado para cada caso.' },
  { q: 'Preciso de carta convite para o visto de turismo?', a: 'Para o visto L (turismo), a carta convite de empresa ou indivíduo chinês não é obrigatória, mas uma carta de apresentação bem redigida explicando o objetivo e o itinerário da viagem fortalece significativamente a solicitação. Para o visto M (negócios), o convite de empresa chinesa é geralmente exigido.' },
  { q: 'Qual é o padrão de foto exigido pelo consulado chinês?', a: 'O consulado chinês exige foto colorida, fundo branco puro, tamanho 33mm × 48mm, rosto centralizado ocupando de 60% a 70% da foto, expressão neutra, boca fechada, sem óculos. Fotos que não atendem ao padrão são recusadas no balcão do CVASC, o que invalida o agendamento.' },
  { q: 'Por quanto tempo o visto chinês é válido?', a: 'A validade varia por categoria e pelo histórico do solicitante. Vistos L (turismo) podem ser emitidos com validade de 3 meses (entrada única), 6 meses ou 1 ano (entradas múltiplas). Vistos X1 têm validade normalmente atrelada à duração do curso. A decisão sobre a validade é do consulado.' },
  { q: 'Quanto custam as taxas do governo chinês?', a: 'As taxas consulares variam por tipo de processamento: normal (4-7 dias úteis) custa aproximadamente R$ 205, expresso (2-3 dias) R$ 291 e urgente (1 dia) R$ 377. Esses valores são pagos diretamente no CVASC e não estão incluídos na consultoria da Vow Vistos.' },
  { q: 'Qual a diferença entre o visto L e o visto M?', a: 'O visto L é para turismo, lazer e visitas a familiares. O visto M é para viagens de negócios, feiras comerciais e atividades empresariais. A documentação exigida é diferente: o visto M geralmente requer convite de empresa chinesa e comprovação da relação comercial. A Vow Vistos identifica a categoria correta para o seu objetivo antes de iniciar o processo.' },
  { q: 'Quem já teve visto negado pode tentar novamente?', a: 'Sim. Não há período de bloqueio obrigatório. O importante é entender o motivo da recusa e corrigir os pontos antes de uma nova tentativa. A Vow Vistos analisa a negativa anterior e reposiciona a documentação para a próxima solicitação.' },
  { q: 'O visto chinês funciona para Hong Kong e Macau?', a: 'Não. Hong Kong e Macau têm sistemas de imigração próprios e separados da China continental. Brasileiros podem entrar em Hong Kong sem visto por até 90 dias e em Macau por até 30 dias. O visto chinês emitido para a China continental não é válido nessas regiões.' },
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

export default async function VistoChinesPage() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1716929955956-7b43cde37153?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-primary/70" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🇨🇳</span>
              <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Especialistas em Visto Chinês
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
              <GoogleStarsFull />
              {placeData.rating} · {placeData.reviewCount} avaliações no
              <GoogleGLogo />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Chinês</span><br/>
            Aprovado sem Burocracia
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Documentação completa, orientação no CVASC e Garantia Vitalícia. A consultoria mais confiável do Brasil para o visto chinês.
          </p>
          <p className="text-sm text-white/50 mb-10">Mais de 7.000 vistos aprovados · Especialização exclusiva desde 2017 · 100% remoto, atendemos todo o Brasil</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Chinês`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors text-base shadow-lg">
              Análise de Perfil Gratuita
            </a>
            <a href="#planos"
              className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors text-base">
              Ver Preços
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

      {/* ── WHY VISAS GET DENIED ──────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Negativas</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Por que o visto chinês é recusado?</h2>
            <p className="text-muted">O consulado chinês não realiza entrevista — a decisão depende inteiramente da documentação. Por isso, cada detalhe conta.</p>
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
            <a href={`https://wa.me/${wa}?text=Quero%20entender%20se%20tenho%20risco%20de%20negativa%20no%20visto%20chinês`}
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Como funciona a consultoria de visto chinês</h2>
            <p className="text-muted">Cada etapa foi desenhada para entregar ao CVASC uma solicitação sem erros e sem documentos faltando.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-6">O consulado chinês decide, não a Vow Vistos. Desconfie de quem promete aprovação garantida.</h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              A decisão final cabe sempre ao consulado. Nenhuma consultoria no mundo pode mudar isso. O que fazemos é garantir que a sua solicitação chegue ao CVASC da forma mais sólida possível: documentação completa, fotos no padrão, formulário sem inconsistências.
            </p>
            <p className="text-white/75 text-lg leading-relaxed">
              O visto chinês tem particularidades que a maioria das pessoas desconhece, desde o padrão rigoroso de foto até a forma correta de redigir a carta de apresentação. São esses detalhes que separam a aprovação da recusa.
            </p>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-heading font-bold mb-4">O processo chinês é diferente: tudo depende da documentação</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Diferente do processo americano, onde há uma entrevista presencial, o consulado chinês analisa a solicitação exclusivamente pelos documentos entregues no CVASC. Não há oportunidade de explicar pessoalmente. O que está no papel é o que o oficial vai ler. Por isso, cada documento precisa ser impecável.
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
                    A forma como a Vow Vistos prepara cada solicitação foi desenvolvida com base na experiência de um ex-oficial do consulado americano com mais de 10 anos de atuação, aliada ao conhecimento profundo dos critérios do consulado chinês. Sabemos o que um oficial de imigração procura, o que levanta suspeitas e o que fortalece a solicitação.
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

      {/* ── CVASC PREP ────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">CVASC</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">O que esperar no dia do CVASC</h2>
            <p className="text-muted">O atendimento no CVASC é presencial e rápido. Estar preparado evita surpresas e retrabalho.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="font-heading font-bold text-dark text-lg mb-4">O que levar no dia</h3>
              <ul className="space-y-3">
                {[
                  'Passaporte original com validade mínima de 6 meses além da viagem',
                  'Formulário de solicitação preenchido e assinado',
                  'Foto no padrão exigido pelo consulado chinês (33×48mm, fundo branco)',
                  'Comprovante de pagamento da taxa consular',
                  'Todos os documentos de suporte organizados',
                  'Confirmação do agendamento no CVASC',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="font-heading font-bold text-dark text-lg mb-4">Dicas para o dia do atendimento</h3>
              <ul className="space-y-3">
                {[
                  'Chegue com 15 a 20 minutos de antecedência',
                  'Leve documentos originais e cópias de todos os comprovantes',
                  'Confira a foto antes de sair: o padrão é verificado no balcão',
                  'Não leve documentos desnecessários: o CVASC não aceita complementações',
                  'O atendimento costuma durar entre 10 e 20 minutos',
                  'O passaporte fica retido até a decisão: planeje a viagem com antecedência',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Quero%20me%20preparar%20para%20o%20CVASC%20do%20visto%20chinês`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Quero orientação para o CVASC
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Planos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Preços da consultoria de visto chinês</h2>
            <p className="text-muted">Parcelamos em até 6x sem juros. Escolha o plano ideal para o seu caso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white'}`}>
                {p.featured && (
                  <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais procurado</span>
                )}
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-4xl font-heading font-extrabold mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.price}<span className="text-base font-normal">,00</span></div>
                <p className={`text-xs mb-8 ${p.featured ? 'text-white/50' : 'text-muted'}`}>ou {p.installment}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
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

      {/* ── CVASCs ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Onde Solicitar</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">CVASCs no Brasil</h2>
            <p className="text-muted">Os Centros de Solicitação de Visto da China no Brasil são onde você entrega os documentos e retira o passaporte. A Vow Vistos orienta sobre o melhor para o seu caso.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {cvacs.map((c) => (
              <div key={c.city} className="bg-white rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🇨🇳</div>
                <div className="font-heading font-bold text-dark">{c.city}</div>
                <div className="text-xs text-accent font-heading font-semibold mb-1">{c.state}</div>
                <p className="text-muted text-xs leading-snug">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">A Vow Vistos prepara toda a documentação remotamente. Você só precisa comparecer ao CVASC para entrega e retirada.</p>
          <div className="mt-6 text-center text-sm text-muted">
            Também assessoramos vistos para{' '}
            <a href="/visto-americano" className="text-accent font-semibold hover:underline">Estados Unidos</a>,{' '}
            <a href="/visto-canadense" className="text-accent font-semibold hover:underline">Canadá</a> e{' '}
            <a href="/outros-paises" className="text-accent font-semibold hover:underline">outros países</a>.
          </div>
        </div>
      </section>

      {/* ── VISA TYPES ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Categorias</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Os vistos que oferecemos para a China</h2>
            <p className="text-muted">Trabalhamos com turismo e negócios. A Vow Vistos identifica a categoria certa e prepara tudo antes de qualquer submissão.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {visaTypes.map((v) => (
              <div key={v.code} className="bg-light rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-extrabold text-primary text-sm">{v.code}</span>
                </div>
                <div className="pt-1">
                  <div className="font-heading font-bold text-dark text-sm mb-1">Visto {v.name}</div>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-10">Não sabe qual categoria se aplica ao seu caso? <a href={`https://wa.me/${wa}?text=Quero%20saber%20qual%20tipo%20de%20visto%20chinês%20preciso`} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Fale conosco.</a></p>
        </div>
      </section>

      {/* ── SPECIFIC PROFILES ─────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Perfis Específicos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Situações especiais no visto chinês</h2>
            <p className="text-muted">Cada perfil tem documentação e estratégia próprias. A Vow Vistos tem experiência com os casos mais sensíveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Viajantes de negócios',
                body: 'O visto M exige convite de empresa chinesa parceira, carta da empresa brasileira autorizando a viagem e documentos que comprovem a relação comercial. A Vow Vistos orienta sobre como estruturar a documentação para que o objetivo da viagem fique claro ao consulado.',
              },
              {
                title: 'MEI e autônomos',
                body: 'Trabalhadores por conta própria precisam comprovar renda e capacidade financeira sem um holerite tradicional. Extratos bancários consistentes, declaração do MEI e comprovantes de receita são os documentos centrais. A Vow Vistos monta um pacote documental adaptado para o seu perfil.',
              },
              {
                title: 'Aposentados e turistas frequentes',
                body: 'Aposentados têm boas chances de aprovação do visto L quando demonstram renda regular e vínculos com o Brasil. A ausência de emprego formal não é obstáculo, mas a comprovação de independência financeira e a apresentação de um itinerário claro são fundamentais.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-bold text-dark text-lg mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Meu%20caso%20é%20específico,%20quero%20uma%20análise%20para%20o%20visto%20chinês`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Meu caso é específico, quero uma análise
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Histórias reais de aprovação</h2>
            <p className="text-muted">Veja o que nossos clientes falam sobre a experiência com a Vow Vistos.</p>
          </div>
          <VideoCarousel />
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto chinês</h2>
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
            Se o seu visto chinês for recusado, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a sua aprovação. Você paga apenas as taxas do consulado.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Chinês`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar agora
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Fale com um especialista em visto chinês</h2>
          <p className="text-muted">Respondemos em até 24 horas úteis com uma análise honesta do seu perfil.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <p className="text-center text-muted text-sm mb-6">Formulário Gravity Forms: configure o ID em <code className="bg-light px-1 rounded text-xs">.env.local</code>.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Chinês`}
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
