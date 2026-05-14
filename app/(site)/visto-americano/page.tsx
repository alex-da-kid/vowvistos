import type { Metadata } from 'next';
import Image from 'next/image';
import VideoCarousel from '@/components/VideoCarousel';

export const metadata: Metadata = {
  title: 'Visto Americano | Consultoria Especializada para Brasileiros | Vow Vistos',
  description: 'Consultoria completa para visto americano: análise de perfil, DS-160 sem erros, simulação de entrevista e Garantia Vitalícia. Mais de 7.000 vistos aprovados. Fale agora.',
  keywords: 'visto americano, consultoria visto americano, como tirar visto americano, visto americano negado, entrevista visto americano, DS-160, visto B1 B2, código 214b',
};

import { getGooglePlacesData } from '@/lib/google-places';

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

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
  { num: '01', title: 'Análise de Perfil', desc: 'Avaliamos seu histórico, vínculos com o Brasil, situação financeira e objetivos de viagem para identificar e neutralizar qualquer risco de negativa.' },
  { num: '02', title: 'Preenchimento do DS-160', desc: 'Cuidamos de cada campo do formulário consular com precisão. Um erro ou inconsistência no DS-160 pode resultar em negativa imediata.' },
  { num: '03', title: 'Agendamento Estratégico', desc: 'Orientamos sobre o melhor consulado, período e estratégia de agendamento para maximizar suas chances e reduzir o tempo de espera.' },
  { num: '04', title: 'Simulação de Entrevista', desc: 'Realizamos uma simulação completa com as perguntas reais do consulado americano. Você chega preparado, confiante e sem surpresas.' },
];

const features = [
  'Análise completa de perfil antes de iniciar',
  'Preenchimento do formulário DS-160',
  'Checklist de documentação personalizado',
  'Agendamento no consulado',
  'Simulação de entrevista consular',
  'Orientação sobre vínculos com o Brasil',
  'Acompanhamento em tempo real do processo',
  'Garantia Vitalícia de reaprovação',
];

const plans = [
  {
    name: 'Primeiro Visto',
    subtitle: 'Para quem nunca obteve o visto americano',
    price: 'R$ 430',
    installment: '6x de R$ 71,67 sem juros',
    featured: false,
    cta: 'Contratar Primeiro Visto',
    msg: 'Quero%20contratar%20a%20consultoria%20para%20Primeiro%20Visto%20Americano',
  },
  {
    name: 'Renovação',
    subtitle: 'Para quem já teve visto e precisa renovar',
    price: 'R$ 530',
    installment: '6x de R$ 88,34 sem juros',
    featured: true,
    cta: 'Contratar Renovação',
    msg: 'Quero%20contratar%20a%20consultoria%20de%20Renovação%20do%20Visto%20Americano',
  },
];

const denialReasons = [
  {
    code: '214(b)',
    title: 'Vínculos insuficientes com o Brasil',
    desc: 'O motivo mais comum de negativa. O cônsul precisa acreditar que você vai voltar. Emprego formal, imóvel, família dependente e renda consistente são os principais vínculos que avaliamos.',
  },
  {
    code: 'DS-160',
    title: 'Inconsistências no formulário',
    desc: 'Uma data errada, uma resposta contraditória ou uma tradução imprecisa no DS-160 pode levantar dúvidas que resultam em negativa na mesma hora. Cada campo importa.',
  },
  {
    code: 'Histórico',
    title: 'Negativa anterior sem estratégia',
    desc: 'Tentar novamente sem entender o motivo da negativa anterior é o erro mais comum. A Vow Vistos analisa o registro consular e repositiona o perfil antes da nova tentativa.',
  },
  {
    code: 'Perfil',
    title: 'Perfil incompatível com o objetivo',
    desc: 'O cônsul avalia se o que você declara faz sentido com quem você é. Uma renda que não sustenta a viagem planejada ou um objetivo vago são sinais de alerta imediatos.',
  },
];

const consulates = [
  { city: 'São Paulo', state: 'SP', note: 'Maior volume de atendimentos do Brasil' },
  { city: 'Rio de Janeiro', state: 'RJ', note: 'Atende todo o estado do Rio' },
  { city: 'Brasília', state: 'DF', note: 'Atende o Distrito Federal e entorno' },
  { city: 'Recife', state: 'PE', note: 'Atende o Nordeste' },
  { city: 'Porto Alegre', state: 'RS', note: 'Atende o Sul do país' },
];

const visaTypes = [
  { code: 'B1/B2', desc: 'Turismo e negócios, o mais solicitado por brasileiros' },
  { code: 'F-1',   desc: 'Estudo em instituição americana credenciada' },
  { code: 'J-1',   desc: 'Intercâmbio cultural ou treinamento profissional' },
  { code: 'O-1',   desc: 'Habilidade extraordinária: artistas, atletas, acadêmicos' },
  { code: 'L-1',   desc: 'Transferência de executivo ou especialista dentro da mesma empresa' },
  { code: 'E-2',   desc: 'Investidor em empresa americana' },
];

const faqs = [
  { q: 'Qual a diferença entre visto B1 e B2?', a: 'O visto B1 é para viagens de negócios e o B2 para turismo. Na prática, os consulados americanos costumam emitir o visto B1/B2 combinado, que permite ambas as finalidades.' },
  { q: 'O que é o código 214(b) e como evitá-lo?', a: 'O código 214(b) é a negativa mais comum para brasileiros. Significa que o cônsul não ficou convencido de que você voltará ao Brasil. A chave é comprovar vínculos sólidos: emprego formal, imóveis, família. A Vow Vistos orienta exatamente como fazer isso antes da sua entrevista.' },
  { q: 'Quem já teve visto negado pode tentar novamente?', a: 'Sim. Não há limite de tentativas. O importante é entender o motivo da negativa e corrigi-lo antes de agendar nova entrevista. A Vow Vistos realiza essa análise e reposiciona o perfil para a próxima tentativa.' },
  { q: 'Preciso comparecer pessoalmente ao consulado?', a: 'Sim, a entrevista presencial é obrigatória para a maioria dos solicitantes. Brasileiros adultos precisam comparecer ao consulado americano na cidade agendada. A Vow Vistos cuida de toda a preparação para esse momento.' },
  { q: 'Qual consulado americano devo escolher para agendar?', a: 'Você pode agendar em qualquer um dos cinco consulados no Brasil, independente de onde mora. A escolha estratégica depende da disponibilidade de datas, do histórico consular e do perfil do solicitante. A Vow Vistos orienta qual opção faz mais sentido para cada caso.' },
  { q: 'Quanto tempo leva para receber o passaporte após a entrevista?', a: 'Em geral, o passaporte com o visto aprovado é devolvido em 5 a 10 dias úteis após a entrevista. Não há aceleração possível nessa etapa, por isso o planejamento antecipado é fundamental, especialmente para viagens próximas.' },
  { q: 'Quais documentos preciso para solicitar o visto americano?', a: 'Os documentos base são: passaporte válido com pelo menos 6 meses de validade além da data de retorno, foto padrão 5×5 cm fundo branco, confirmação do DS-160 e comprovante de pagamento da taxa MRV. Além disso, documentos financeiros (extratos bancários, declaração de IR, comprovante de renda), vínculos com o Brasil (carta do empregador, escritura de imóvel, certidão de dependentes) e itinerário de viagem. A Vow Vistos entrega um checklist personalizado para o seu perfil específico.' },
  { q: 'Quanto custa o visto americano?', a: 'Além da consultoria da Vow Vistos, você pagará a taxa MRV de US$ 185 diretamente ao governo americano, obrigatória para todos os solicitantes e não reembolsável mesmo em caso de negativa. Para vistos de estudo (F-1) e intercâmbio (J-1), há ainda a taxa SEVIS de US$ 350.' },
  { q: 'Por quanto tempo o visto americano é válido?', a: 'Para brasileiros, o visto B1/B2 é normalmente emitido com validade de 10 anos e entradas múltiplas. A validade do visto não define quanto tempo você pode ficar nos EUA. Isso é determinado pelo agente de imigração na chegada, geralmente até 6 meses por entrada.' },
  { q: 'Posso solicitar o visto americano para meus filhos menores?', a: 'Sim. Menores de 14 anos geralmente não precisam comparecer à entrevista presencial, mas os documentos precisam estar em ordem. Entre 14 e 17 anos, a entrevista pode ou não ser exigida dependendo do caso. A Vow Vistos orienta famílias com dependentes em cada etapa.' },
  { q: 'Qual a diferença entre ESTA e visto americano?', a: 'O ESTA é exclusivo para cidadãos de países participantes do Programa de Isenção de Vistos. O Brasil não faz parte dessa lista. Brasileiros sempre precisam de visto para entrar nos Estados Unidos, independente do motivo da viagem.' },
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

export default async function VistoAmericanoPage() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564309780826-cce2ef0705a0?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-primary/70" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🇺🇸</span>
              <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Especialistas em Visto Americano
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
              <GoogleStarsFull />
              {placeData.rating} · {placeData.reviewCount} avaliações no
              <GoogleGLogo />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Americano</span><br/>
            Aprovado na Primeira
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Análise de perfil, DS-160 sem erros, simulação de entrevista e Garantia Vitalícia. A consultoria mais completa do Brasil para o visto americano.
          </p>
          <p className="text-sm text-white/50 mb-10">Mais de 7.000 vistos aprovados · Especialização exclusiva desde 2017 · 100% remoto, atendemos todo o Brasil</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Americano`}
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Por que o visto americano é negado?</h2>
            <p className="text-muted">A maioria das negativas tem causas previsíveis. Identificar e corrigir esses pontos antes da entrevista é o que fazemos.</p>
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
            <a href={`https://wa.me/${wa}?text=Quero%20entender%20se%20tenho%20risco%20de%20negativa%20no%20visto%20americano`}
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Como funciona a consultoria de visto americano</h2>
            <p className="text-muted">Cada etapa foi desenhada para eliminar os riscos de negativa e colocar você diante do cônsul com o perfil mais forte possível.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Nenhuma consultoria pode garantir a aprovação do seu visto. Desconfie de quem diz o contrário.</h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              A decisão final é sempre do cônsul americano. Isso não muda, independente de quem te atende, qual formulário foi preenchido ou qual argumento foi usado. Se alguém te prometeu aprovação garantida ou exibiu uma taxa de aprovação extraordinária como argumento de venda, isso é um sinal de alerta. Não de competência.
            </p>
            <p className="text-white/75 text-lg leading-relaxed">
              O que uma consultoria séria pode fazer, e o que a Vow Vistos faz, é garantir que o seu perfil chegue ao consulado da forma mais sólida possível. Sem improvisação, sem achismos, sem "fórmulas secretas".
            </p>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-heading font-bold mb-4">O DS-160 não é o bicho de sete cabeças que a internet faz parecer</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              O formulário DS-160 é, na prática, um documento padronizado. Com o conhecimento certo, não existe mistério. O problema é que a internet está cheia de tutoriais desatualizados, interpretações equivocadas e "dicas" que podem, na realidade, prejudicar a sua solicitação. A desinformação cria uma ansiedade desnecessária, e é exatamente por isso que tantas pessoas buscam ajuda profissional.
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
                    A forma como a Vow Vistos orienta o preenchimento do DS-160, e todo o preparo da solicitação, foi desenvolvida com base na experiência de um ex-oficial do consulado americano com mais de 10 anos de atuação. Alguém que avaliou milhares de candidaturas do outro lado da mesa. Que sabe exatamente o que chama atenção, o que levanta dúvidas e o que passa despercebido.
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

      {/* ── INTERVIEW PREP ────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Entrevista</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">O que esperar da entrevista no consulado americano</h2>
            <p className="text-muted">A entrevista costuma durar entre 2 e 5 minutos. O cônsul já analisou seu DS-160 antes de te receber. O objetivo é confirmar o que está no formulário, não fazer uma conversa longa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="font-heading font-bold text-dark text-lg mb-4">Perguntas mais comuns na entrevista</h3>
              <ul className="space-y-3">
                {[
                  'Qual é o objetivo da sua viagem?',
                  'Quanto tempo pretende ficar nos EUA?',
                  'Quem vai custear a viagem?',
                  'Você tem familiares nos Estados Unidos?',
                  'Qual é a sua profissão e situação de emprego atual?',
                  'Você já teve visto americano antes? Foi negado?',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="font-heading font-bold text-dark text-lg mb-4">Dicas para o dia da entrevista</h3>
              <ul className="space-y-3">
                {[
                  'Chegue 30 minutos antes do horário agendado',
                  'Leve o passaporte e a confirmação impressa do DS-160',
                  'Responda com objetividade: respostas longas podem gerar dúvidas',
                  'Não leve documentos que não foram solicitados',
                  'Vista-se de forma profissional',
                  'Não minta: inconsistências são detectadas imediatamente',
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
            <a href={`https://wa.me/${wa}?text=Quero%20me%20preparar%20para%20a%20entrevista%20do%20visto%20americano`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Quero me preparar para a entrevista
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Planos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Preços da consultoria de visto americano</h2>
            <p className="text-muted">Parcelamos em até 6x sem juros. Escolha o plano ideal para o seu caso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white'}`}>
                {p.featured && (
                  <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais popular</span>
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

      {/* ── CONSULATES ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Onde Agendar</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Consulados americanos no Brasil</h2>
            <p className="text-muted">O Brasil tem cinco consulados americanos. Você pode agendar em qualquer um, independente de onde mora. A Vow Vistos orienta qual escolher para o seu perfil.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {consulates.map((c) => (
              <div key={c.city} className="bg-light rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="font-heading font-bold text-dark">{c.city}</div>
                <div className="text-xs text-accent font-heading font-semibold mb-1">{c.state}</div>
                <p className="text-muted text-xs leading-snug">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">A escolha do consulado pode influenciar o tempo de espera para agendamento. Consulte-nos antes de marcar.</p>
          <div className="mt-6 text-center text-sm text-muted">
            Também assessoramos vistos para{' '}
            <a href="/visto-canadense" className="text-accent font-semibold hover:underline">Canadá</a>,{' '}
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Outros tipos de visto americano</h2>
            <p className="text-muted">O B1/B2 cobre turismo e negócios, mas existem categorias específicas para outros objetivos. Cada uma tem critérios e etapas próprias.</p>
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
          <p className="text-center text-muted text-sm mt-10">Não sabe qual categoria se aplica ao seu caso? <a href={`https://wa.me/${wa}?text=Quero%20saber%20qual%20tipo%20de%20visto%20americano%20preciso`} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Fale conosco.</a></p>
        </div>
      </section>

      {/* ── SPECIFIC PROFILES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Perfis Específicos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Situações especiais no visto americano</h2>
            <p className="text-muted">Cada perfil tem desafios próprios. A Vow Vistos tem experiência com as situações mais sensíveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'MEI e autônomos',
                body: 'Trabalhadores por conta própria enfrentam um desafio comum: comprovar renda estável e vínculo com o Brasil sem um holerite tradicional. Extratos bancários consistentes, declaração do MEI, contrato com clientes e comprovantes de pagamento do INSS são os principais documentos. A Vow Vistos orienta exatamente quais usar para o seu caso.',
              },
              {
                title: 'Aposentados e pensionistas',
                body: 'Aposentados têm boas chances de aprovação. A renda regular e a ausência de emprego formal não são obstáculos. O foco é demonstrar os vínculos afetivos e patrimoniais com o Brasil: família, imóvel, rotina estabelecida. Com a documentação certa, o perfil de aposentado é frequentemente bem recebido pelo consulado.',
              },
              {
                title: 'Quem tem dívidas ou restrições financeiras',
                body: 'Dívidas e nome negativado não causam negativa automática, mas exigem atenção. O cônsul avalia a capacidade financeira para custear a viagem, não o histórico de crédito. O que importa é demonstrar que você tem recursos suficientes para a viagem declarada, e que vai voltar. A Vow Vistos analisa cada caso antes de qualquer recomendação.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-light rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-bold text-dark text-lg mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`https://wa.me/${wa}?text=Meu%20caso%20é%20específico,%20quero%20uma%20análise`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Meu caso é específico, quero uma análise
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Histórias reais de aprovação do visto americano</h2>
            <p className="text-muted">Veja o que nossos clientes falam sobre a experiência com a Vow Vistos.</p>
          </div>
          <VideoCarousel />
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
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
              <div key={r.name} className="bg-light rounded-2xl p-6 shadow-sm flex flex-col gap-4">
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto americano</h2>
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
            Se o seu visto americano for negado, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a sua aprovação. Você paga apenas as taxas consulares.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Americano`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar agora
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Fale com um especialista em visto americano</h2>
          <p className="text-muted">Respondemos em até 24 horas úteis com uma análise honesta do seu perfil.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <p className="text-center text-muted text-sm mb-6">Formulário Gravity Forms: configure o ID em <code className="bg-light px-1 rounded text-xs">.env.local</code>.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Americano`}
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
