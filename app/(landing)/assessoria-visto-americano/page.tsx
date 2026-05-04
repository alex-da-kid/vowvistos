import type { Metadata } from 'next';
import LeadForm from './LeadForm';
import VideoCarousel from '../../(site)/visto-americano/VideoCarousel';

export const metadata: Metadata = {
  title: 'Assessoria de Visto Americano | Aprovado na Primeira Tentativa | Vow Vistos',
  description: 'Assessoria completa para o visto americano: DS-160 sem erros, simulação de entrevista e Garantia Vitalícia. Mais de 7.000 vistos aprovados. Análise de perfil gratuita.',
  robots: 'noindex',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const reviews = [
  { name: 'Fernanda L.', date: 'novembro de 2024', color: 'bg-yellow-500', text: 'Contratei após duas negativas anteriores. Com o trabalho deles entendi exatamente onde estava errando. Aprovada! Não tenho palavras para agradecer.' },
  { name: 'João P.',     date: 'fevereiro de 2025', color: 'bg-green-500',  text: 'Super profissionais. Já tinha tentado sozinho e levei negativa. Com a Vow Vistos aprovei em menos de 30 dias. A Garantia Vitalícia foi o que me convenceu.' },
  { name: 'Ricardo T.',  date: 'outubro de 2024',   color: 'bg-indigo-500', text: 'Processo todo muito bem conduzido. A simulação de entrevista foi decisiva — cheguei ao consulado muito mais confiante. Vale cada centavo.' },
  { name: 'Maria S.',    date: 'março de 2025',     color: 'bg-blue-500',   text: 'Atendimento incrível! Me ajudaram com todo o processo, desde a documentação até a simulação da entrevista. Aprovada na primeira tentativa!' },
  { name: 'Ana C.',      date: 'janeiro de 2025',   color: 'bg-purple-500', text: 'O suporte foi excelente do início ao fim. Explicaram tudo com clareza, me prepararam muito bem para a entrevista e o visto saiu sem nenhum problema.' },
  { name: 'Carlos M.',   date: 'dezembro de 2024',  color: 'bg-red-500',    text: 'Muito atenciosos e competentes. Responderam todas as minhas dúvidas rapidamente. Processo tranquilo do começo ao fim. Recomendo muito!' },
];

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

const steps = [
  { num: '01', title: 'Análise de Perfil', desc: 'Avaliamos seu histórico, vínculos com o Brasil e situação financeira para identificar e neutralizar qualquer risco de negativa antes da entrevista.' },
  { num: '02', title: 'DS-160 Sem Erros', desc: 'Cuidamos de cada campo do formulário consular com precisão. Um erro ou inconsistência pode resultar em negativa imediata.' },
  { num: '03', title: 'Agendamento Estratégico', desc: 'Orientamos o melhor consulado e período para maximizar suas chances e reduzir o tempo de espera.' },
  { num: '04', title: 'Simulação de Entrevista', desc: 'Realizamos uma simulação completa com as perguntas reais do consulado. Você chega preparado, confiante e sem surpresas.' },
];

const features = [
  'Análise completa de perfil antes de iniciar',
  'Preenchimento do formulário DS-160',
  'Checklist de documentação personalizado',
  'Agendamento no consulado',
  'Simulação de entrevista consular',
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
    msg: 'Quero%20contratar%20a%20consultoria%20para%20Primeiro%20Visto%20Americano',
  },
  {
    name: 'Renovação',
    subtitle: 'Para quem já teve visto e precisa renovar',
    price: 'R$ 530',
    installment: '6x de R$ 88,34 sem juros',
    featured: true,
    msg: 'Quero%20contratar%20a%20consultoria%20de%20Renova%C3%A7%C3%A3o%20do%20Visto%20Americano',
  },
];

const faqs = [
  { q: 'Por que contratar uma consultoria em vez de fazer sozinho?', a: 'O DS-160 parece simples, mas qualquer inconsistência — uma data errada, uma resposta ambígua — pode resultar em negativa imediata. Além disso, a maioria das negativas acontece por vínculos insuficientes com o Brasil, algo que precisa ser trabalhado antes da entrevista, não durante. A Vow Vistos avalia seu perfil completo e prepara cada detalhe para maximizar suas chances.' },
  { q: 'O que é o código 214(b) e como evitá-lo?', a: 'É a negativa mais comum para brasileiros. Significa que o cônsul não ficou convencido de que você vai voltar ao Brasil. A solução é comprovar vínculos sólidos: emprego formal, imóvel, família dependente, renda consistente. A Vow Vistos orienta exatamente o que usar no seu caso.' },
  { q: 'Quem já teve visto negado pode contratar?', a: 'Sim, e é exatamente para isso que a Vow Vistos existe. Não há limite de tentativas — o importante é entender o motivo da negativa e corrigir antes de agendar nova entrevista. Analisamos o registro consular e reposicionamos seu perfil.' },
  { q: 'A Vow Vistos garante a aprovação do visto?', a: 'A decisão final é sempre do cônsul americano — nenhuma consultoria no mundo pode mudar isso. O que garantimos é reconsultoria gratuita e ilimitada (Garantia Vitalícia) se o visto for negado: você volta sem custo adicional de consultoria até a aprovação, pagando apenas as taxas do governo.' },
  { q: 'Como funciona o atendimento 100% remoto?', a: 'Todo o processo é feito online: análise de perfil, preenchimento do DS-160, orientações de documentação e simulação de entrevista por videochamada. Você não precisa sair de casa para nada, exceto comparecer à entrevista no consulado. Atendemos clientes em todo o Brasil.' },
  { q: 'Quanto tempo demora para receber o passaporte após a entrevista?', a: 'Em geral, o passaporte com o visto aprovado é devolvido em 5 a 10 dias úteis após a entrevista. Não há aceleração possível nessa etapa, por isso o planejamento antecipado é fundamental, especialmente para viagens próximas.' },
  { q: 'Quais documentos preciso para solicitar o visto americano?', a: 'Os documentos base são: passaporte válido, foto padrão 5×5 cm fundo branco, confirmação do DS-160 e comprovante de pagamento da taxa MRV. Além disso: extratos bancários, declaração de IR, comprovante de renda, carta do empregador ou escritura de imóvel, e itinerário de viagem. A Vow Vistos entrega um checklist personalizado para o seu perfil.' },
  { q: 'Quanto custa a taxa do governo americano?', a: 'A taxa MRV é de US$ 185, obrigatória para todos os solicitantes e não reembolsável mesmo em caso de negativa. Para vistos de estudo (F-1) e intercâmbio (J-1), há ainda a taxa SEVIS de US$ 350. Esses valores são pagos diretamente ao governo americano e não estão incluídos na consultoria da Vow Vistos.' },
  { q: 'Por quanto tempo o visto americano é válido?', a: 'Para brasileiros, o visto B1/B2 é normalmente emitido com validade de 10 anos e entradas múltiplas. A validade do visto não define quanto tempo você pode ficar nos EUA — isso é determinado pelo agente de imigração na chegada, geralmente até 6 meses por entrada.' },
  { q: 'Posso solicitar o visto americano para meus filhos menores?', a: 'Sim. Menores de 14 anos geralmente não precisam comparecer à entrevista presencial, mas os documentos precisam estar em ordem. Entre 14 e 17 anos, a entrevista pode ou não ser exigida dependendo do caso. A Vow Vistos orienta famílias com dependentes em cada etapa.' },
];

export default function LandingPage() {
  return (
    <>
      {/* ── NAV BAR ───────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-heading font-extrabold text-xl text-primary tracking-tight">
            Vow <span className="text-accent">Vistos</span>
          </a>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Americano`}
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
                <span className="text-3xl">🇺🇸</span>
                <span className="bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Especialistas em Visto Americano
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
                Assessoria de Visto Americano —{' '}
                <span className="text-accent">Aprovado na Primeira Tentativa</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                DS-160 sem erros, simulação de entrevista completa e Garantia Vitalícia. Mais de 7.000 vistos aprovados para brasileiros.
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
            ['7.000+', 'Vistos aprovados'],
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
              <span className="font-heading font-bold text-dark">4.9</span>
              <span className="text-muted text-sm">· 100+ avaliações verificadas no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
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
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Por que o visto americano é negado?</h2>
            <p className="text-muted text-sm">A maioria das negativas tem causas previsíveis. Identificar e corrigir esses pontos antes da entrevista é exatamente o que fazemos.</p>
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
                title: 'MEI e autônomos',
                body: 'Comprovar renda estável sem holerite é o principal desafio para trabalhadores por conta própria. Extratos bancários consistentes, declaração do MEI, contrato com clientes e comprovantes do INSS são os documentos centrais. A Vow Vistos orienta exatamente quais usar para o seu caso.',
              },
              {
                title: 'Aposentados e pensionistas',
                body: 'Aposentados têm boas chances de aprovação. A renda regular e a ausência de emprego formal não são obstáculos. O foco é demonstrar os vínculos com o Brasil: família, imóvel, rotina estabelecida. Com a documentação certa, o perfil de aposentado é frequentemente bem recebido pelo consulado.',
              },
              {
                title: 'Quem teve visto negado',
                body: 'Dívidas e nome negativado não causam negativa automática, mas exigem atenção. E negativas anteriores não impedem novas tentativas — o importante é entender o que falhou. A Vow Vistos analisa o registro consular e reposiciona o perfil antes da próxima entrevista.',
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

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">Processo</span>
            <h2 className="text-3xl font-heading font-bold text-dark mt-2 mb-3">Como funciona a consultoria</h2>
            <p className="text-muted text-sm">Do perfil à entrevista — cada etapa desenhada para eliminar o risco de negativa.</p>
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
            A decisão final é sempre do cônsul americano. Isso não muda, independente de quem te atende. Se alguém te prometeu aprovação garantida ou exibiu uma taxa de aprovação extraordinária como argumento de venda, isso é um sinal de alerta — não de competência.
          </p>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            O que uma consultoria séria pode fazer — e o que a Vow Vistos faz — é garantir que o seu perfil chegue ao consulado da forma mais sólida possível. Sem improvisação, sem achismos.
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
                  A forma como a Vow Vistos orienta o preenchimento do DS-160 — e todo o preparo da solicitação — foi desenvolvida com base na experiência de um ex-oficial do consulado americano com mais de 10 anos de atuação. Alguém que avaliou milhares de candidaturas do outro lado da mesa. Que sabe exatamente o que chama atenção, o que levanta dúvidas e o que passa despercebido.
                </p>
                <p className="text-white/70 leading-relaxed mt-3">
                  Esse conhecimento não está em nenhum guia gratuito na internet. E é exatamente ele que repassamos aos nossos clientes.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white border border-light'}`}>
                {p.featured && (
                  <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais popular</span>
                )}
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-4xl font-heading font-extrabold mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>
                  {p.price}<span className="text-base font-normal">,00</span>
                </div>
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
                  Contratar {p.name}
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
                Pronto para tirar o visto americano?
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Análise de perfil gratuita, sem compromisso. Respondemos em minutos.
              </p>
              <div className="flex flex-col gap-2">
                {['Mais de 7.000 vistos aprovados', 'Garantia Vitalícia — sem custo extra se negar', '100% remoto, atendemos todo o Brasil'].map((t) => (
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
