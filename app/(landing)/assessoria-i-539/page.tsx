import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import FeeNote from '@/components/FeeNote';
import ConversionTracker from '../assessoria-visto-americano/ConversionTracker';
import GoogleTag from '../assessoria-visto-americano/GoogleTag';
import TrackedContactForm from '../assessoria-visto-americano/TrackedContactForm';
import LeadForm from './LeadForm';
import StickyMobileCTA from './StickyMobileCTA';
import { getGooglePlacesData } from '@/lib/google-places';

export const metadata: Metadata = {
  title: 'Extensão e Mudança de Status nos EUA (Form I-539) | Vow Vistos',
  description: 'Consultoria para brasileiros que já estão nos Estados Unidos: extensão de permanência B1/B2, mudança de status para F-1 e de F-1 para B1/B2. Da análise inicial à decisão da USCIS, 100% online.',
  keywords: 'I-539, extensão de permanência EUA, estender visto de turista, mudança de status F-1, extensão B2, extensão B1, I-94 vencendo',
};

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

function Check({ className = 'text-green-500' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  );
}

const services = [
  {
    code: 'B1',
    title: 'Extensão de permanência B1',
    who: 'Empresários, executivos, engenheiros, técnicos e consultores em viagem de negócios.',
    when: 'O I-94 veio com prazo menor que o planejado, o projeto atrasou, reuniões, treinamentos, inspeções ou supervisões precisam de mais tempo.',
    msg: 'Preciso%20de%20extensão%20B1%20(negócios)',
  },
  {
    code: 'B2',
    title: 'Extensão de permanência B2',
    who: 'Turistas e visitantes que precisam ficar mais um tempo por um motivo legítimo.',
    when: 'Visita prolongada à família, acompanhamento de familiares, tratamento médico ou recuperação, mudança justificada no itinerário.',
    msg: 'Preciso%20de%20extensão%20B2%20(turismo%20ou%20família)',
  },
  {
    code: 'F-1',
    title: 'Mudança de B1/B2 para F-1',
    who: 'Quem entrou como visitante, decidiu estudar nos EUA e já tem um Form I-20 válido.',
    when: 'Análise da mudança de intenção, revisão do I-20 e das finanças, justificativa e preparação do pedido. Premium Processing quando elegível.',
    msg: 'Quero%20mudar%20de%20B1/B2%20para%20F-1',
  },
  {
    code: 'B1/B2',
    title: 'Mudança de F-1 para B1/B2',
    who: 'Estudantes que concluíram o curso e querem ficar um período como visitante antes de voltar ao Brasil.',
    when: 'Turismo, férias, conhecer outras regiões ou visitar amigos e familiares, com planejamento de retorno.',
    msg: 'Quero%20mudar%20de%20F-1%20para%20B1/B2',
  },
];

const steps = [
  { num: '01', title: 'Briefing inicial', desc: 'Entendemos sua entrada nos EUA, categoria de admissão, data do I-94, histórico migratório e o motivo real do pedido.' },
  { num: '02', title: 'Checklist individual', desc: 'Não existe lista genérica. Você recebe a relação de documentos específica para o seu perfil e objetivo.' },
  { num: '03', title: 'Formulário em português', desc: 'Você responde em português. Nós transformamos suas respostas nos formulários oficiais, sem erros de interpretação.' },
  { num: '04', title: 'Preparação do caso', desc: 'I-539, I-539A quando houver dependentes, cartas explicativas, organização das evidências e revisão de consistência.' },
  { num: '05', title: 'Submissão', desc: 'Auxiliamos no protocolo eletrônico no sistema da USCIS. As taxas do governo são pagas por você, com seu cartão.' },
  { num: '06', title: 'Acompanhamento', desc: 'Monitoramos o processo e avisamos cada atualização até a decisão final. Uma resposta a RFE já está incluída.' },
];

const included = [
  'Briefing inicial e análise do caso',
  'Checklist documental individualizado',
  'Formulário rascunho em português',
  'Preparação do I-539 (e I-539A para dependentes)',
  'Cartas e declarações explicativas',
  'Organização completa das evidências',
  'Traduções simples',
  'Assistência ao protocolo eletrônico',
  'Acompanhamento até a decisão final',
  'Uma resposta a RFE ligada ao pedido original',
];

const plans = [
  {
    name: 'Extensão de Permanência',
    subtitle: 'Para quem precisa ficar mais tempo no mesmo status (B1 ou B2)',
    price: 'R$ 2.600',
    featured: false,
    msg: 'Quero%20contratar%20a%20consultoria%20de%20Extensão%20de%20Permanência%20(I-539)',
  },
  {
    name: 'Mudança de Status',
    subtitle: 'Para quem precisa trocar de categoria (B1/B2 para F-1 ou F-1 para B1/B2)',
    price: 'R$ 2.950',
    featured: true,
    msg: 'Quero%20contratar%20a%20consultoria%20de%20Mudança%20de%20Status%20(I-539)',
  },
];

const notIncluded = [
  'Taxas da USCIS (pagas por você direto ao governo)',
  'Premium Processing, quando optar por ele',
  'Traduções juramentadas, quando exigidas',
  'Correios, couriers e despesas com terceiros',
  'Resposta a NOID (Notice of Intent to Deny)',
  'Honorários de advogado em casos que exigem atuação jurídica',
];

const attorneyCases = [
  'I-94 já vencido ou violação de status',
  'Trabalho não autorizado nos EUA',
  'Histórico criminal ou possível inadmissibilidade',
  'Suspeita de fraude ou misrepresentation',
  'NOID ou situações litigiosas',
];

const questions = [
  'Quem é você?',
  'Por que está nos Estados Unidos?',
  'Por que precisa ficar mais tempo ou mudar de status?',
  'Por quanto tempo?',
  'Como você comprova essa necessidade?',
  'Quais vínculos mantém com o Brasil?',
];

const faqs = [
  { q: 'O que é o Form I-539?', a: 'É o formulário da USCIS (Application to Extend/Change Nonimmigrant Status) usado por quem já está legalmente nos Estados Unidos para pedir mais tempo de permanência ou trocar de categoria, por exemplo de turista (B2) para estudante (F-1).' },
  { q: 'Quando devo fazer o pedido?', a: 'Sempre antes da data do seu I-94. A USCIS recomenda protocolar com pelo menos 45 dias de antecedência. Pedidos feitos depois do vencimento, em regra, não são aceitos, salvo circunstâncias extraordinárias.' },
  { q: 'Onde vejo a data do meu I-94?', a: 'No site oficial i94.cbp.dhs.gov. A data que vale é a do I-94, e não a validade do visto no passaporte. Muita gente confunde as duas.' },
  { q: 'Posso continuar nos EUA enquanto o pedido está em análise?', a: 'Em geral, quem protocola antes do vencimento do I-94 e não violou o status pode aguardar a decisão nos Estados Unidos. Se o pedido for negado, é preciso sair do país. Cada caso tem particularidades, e é isso que avaliamos no briefing inicial.' },
  { q: 'Posso trabalhar ou estudar enquanto aguardo?', a: 'Não. O pedido pendente não autoriza trabalho. Quem pede mudança de B1/B2 para F-1 não pode começar os estudos antes da aprovação.' },
  { q: 'Quanto custa a consultoria da Vow Vistos?', a: 'R$ 2.600 para extensão de permanência (B1 ou B2) e R$ 2.950 para mudança de status (por exemplo, de B1/B2 para F-1 ou de F-1 para B1/B2). Os valores incluem todo o acompanhamento até a decisão e uma resposta a RFE. As taxas da USCIS são pagas à parte, direto ao governo.' },
  { q: 'Quanto custa a taxa da USCIS?', a: 'A taxa é paga por você direto à USCIS e muda periodicamente. Confira o valor atualizado em uscis.gov/i-539. Antes de começar, informamos a taxa vigente e todos os custos externos do seu caso.' },
  { q: 'Quanto tempo a USCIS leva para decidir?', a: 'Varia bastante conforme a categoria e o centro de processamento, e pode levar meses. Os prazos atualizados ficam em egov.uscis.gov/processing-times. Algumas mudanças para F-1 e F-2 podem usar Premium Processing, com prazo menor e taxa adicional.' },
  { q: 'Minha família pode ser incluída?', a: 'Sim. Cônjuge e filhos podem ser incluídos no mesmo pedido com o Form I-539A, quando se enquadram na mesma situação. O caso dos dependentes é sempre analisado junto com o do titular.' },
  { q: 'O que é uma RFE?', a: 'É uma Request for Evidence: a USCIS pede documentos ou explicações adicionais antes de decidir. A preparação de uma resposta a RFE ligada ao pedido original já está incluída na consultoria.' },
  { q: 'A Vow Vistos é um escritório de advocacia?', a: 'Não. Somos uma consultoria privada de preparação e acompanhamento de processos. Não representamos clientes perante a USCIS. Quando o caso envolve questões jurídicas, encaminhamos para advogado de imigração parceiro, mediante honorários adicionais informados antes.' },
  { q: 'Todo o processo é online?', a: 'Sim. Atendemos por WhatsApp, Google Meet e e-mail, em qualquer estado americano.' },
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

export default async function AssessoriaI539Page() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <GoogleTag />
      <ConversionTracker />
      <Header variant="minimal" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 text-white relative overflow-hidden bg-dark"
        style={{ backgroundImage: 'url(/hero-airport.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-primary/70" aria-hidden />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
                  <GoogleStarsFull />
                  {placeData.rating} · {placeData.reviewCount} avaliações no
                  <GoogleGLogo />
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
                Precisa ficar mais tempo nos <span className="text-accent">Estados Unidos?</span><br/>
                <span className="text-3xl md:text-4xl lg:text-5xl">Extensão e mudança de status com o Form I-539</span>
              </h1>
              <p className="text-xl text-white/80 mb-4 leading-relaxed">
                Para brasileiros que já estão nos EUA. Cuidamos de todo o processo, da análise inicial até a decisão da USCIS.
              </p>
              <p className="text-sm text-white/50 mb-10">Mais de 500 processos I-539 preparados · 100% online, em qualquer estado · Em português</p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <a href={`https://wa.me/${wa}?text=Estou%20nos%20EUA%20e%20quero%20uma%20avaliação%20para%20o%20I-539`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors text-base shadow-lg">
                  Falar no WhatsApp
                </a>
                <a href="#planos"
                  className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors text-base">
                  Ver preços
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 scroll-mt-24" id="avaliacao">
              <h2 className="font-heading font-extrabold text-dark text-2xl mb-1 text-center">Avaliação Inicial</h2>
              <LeadForm />
            </div>
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
            A Vow Vistos é uma consultoria privada de preparação e acompanhamento de processos. Não somos escritório de advocacia, não temos vínculo com a USCIS ou com o governo dos EUA e não representamos clientes perante a USCIS. Você pode fazer o pedido diretamente em{' '}
            <a href="https://www.uscis.gov/i-539" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">uscis.gov/i-539</a>. As taxas governamentais são pagas por você à USCIS e não estão incluídas nos nossos honorários.
          </p>
        </div>
      </div>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
          {[['500+','Processos I-539 preparados'],['10 dias úteis','Para preparar o processo após receber seus documentos'],['RFE incluída','Uma resposta a RFE já faz parte do serviço']].map(([v,l])=>(
            <div key={l}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{v}</div>
              <div className="text-xs text-white/60 mt-1 hidden sm:block">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── I-94 DEADLINE ─────────────────────────────────────────────── */}
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
              <h2 className="text-3xl font-heading font-bold text-dark mb-4">A data que manda é a do I-94, não a do visto</h2>
              <p className="text-muted leading-relaxed mb-4">
                O visto no passaporte pode valer 10 anos, mas o tempo que você pode ficar nos EUA é definido pelo I-94, registrado na sua entrada. O pedido de extensão ou mudança de status precisa ser protocolado antes dessa data. A USCIS recomenda pelo menos 45 dias de antecedência.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Quanto antes começarmos, mais tempo há para montar um processo bem documentado.
              </p>
              <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold px-6 py-3 rounded-full transition-colors text-sm">
                Consultar meu I-94 no site oficial
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
            <p className="text-muted">Cada categoria tem requisitos e evidências próprias. Trabalhamos cada caso de forma individual.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            <div className="bg-white rounded-2xl p-7">
              <h3 className="font-heading font-bold text-dark text-lg mb-2">Dependentes F-2</h3>
              <p className="text-muted text-sm leading-relaxed">Cônjuge e filhos de estudantes F-1, incluindo a mudança conjunta de B1/B2 para F-1/F-2. O caso dos dependentes é sempre analisado junto com o do titular.</p>
            </div>
            <div className="bg-white rounded-2xl p-7">
              <h3 className="font-heading font-bold text-dark text-lg mb-2">Outras extensões e mudanças de status</h3>
              <p className="text-muted text-sm leading-relaxed">O I-539 também é usado em outras categorias, como H-4, L-2, O-3, E e J-2. A elegibilidade varia. Fazemos uma avaliação inicial para saber se o seu status e objetivo permitem o pedido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOT JUST A FORM ───────────────────────────────────────────── */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Nossa abordagem</span>
          <h2 className="text-4xl font-heading font-bold mb-6">Um I-539 não é só um formulário</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            O formulário é a parte mais simples. O que a USCIS avalia é se a sua história faz sentido e está bem comprovada. Antes de preencher qualquer campo, respondemos com você a perguntas como:
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
            Com essas respostas, montamos um processo claro, coerente e documentado. É isso que separa uma consultoria de um serviço de preenchimento de formulário.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Processo</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Como funciona, do início até a decisão</h2>
            <p className="text-muted">A contratação não termina no protocolo. Acompanhamos você até a resposta da USCIS.</p>
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
          <p className="text-center text-muted text-sm mt-8">O processo é preparado em até 10 dias úteis, contados a partir da entrega completa das informações e documentos.</p>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light scroll-mt-20" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Planos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Preços da consultoria I-539</h2>
            <p className="text-muted">Sem cobranças-surpresa. Antes de começar, você sabe exatamente quais custos externos podem existir no seu caso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                  Contratar consultoria
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
          <FeeNote>Os valores acima são honorários da Vow Vistos por processo. As taxas da USCIS são pagas por você diretamente ao governo dos EUA.</FeeNote>
        </div>
      </section>

      {/* ── TRANSPARENCY / ATTORNEY ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Transparência</span>
            <h2 className="text-3xl font-heading font-bold text-dark mb-4">Nenhuma consultoria pode garantir a aprovação do seu pedido</h2>
            <p className="text-muted leading-relaxed mb-4">
              A decisão final é sempre da USCIS, e cada processo é analisado individualmente. Resultados anteriores não garantem resultados futuros.
            </p>
            <p className="text-muted leading-relaxed">
              O que fazemos é garantir que o seu pedido chegue organizado, documentado e coerente. E se o seu caso não for defensável, vamos dizer isso antes de você pagar qualquer coisa.
            </p>
          </div>
          <div className="bg-light rounded-2xl p-7">
            <h3 className="font-heading font-bold text-dark text-lg mb-2">Quando o caso precisa de advogado</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Nossa consultoria é voltada para casos regulares e bem documentados. Se identificarmos alguma destas situações, encaminhamos para advogado de imigração parceiro:
            </p>
            <ul className="space-y-2">
              {attorneyCases.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-muted text-xs leading-relaxed mt-4">A atuação do advogado tem honorários próprios, sempre informados antes.</p>
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
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o I-539</h2>
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

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">Seu I-94 tem data para vencer. Não deixe para a última semana.</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Conte sua situação e receba uma avaliação inicial honesta: se o seu caso tem base, qual o caminho e quais documentos você vai precisar.
          </p>
          <a href="#avaliacao"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar minha avaliação
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="contato">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-dark mb-3">Prefere mandar uma mensagem?</h2>
          <p className="text-muted">Respondemos em até 24 horas úteis com uma análise honesta da sua situação.</p>
        </div>
        <div className="max-w-xl mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <TrackedContactForm />
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden />
      <StickyMobileCTA />
      <Footer variant="minimal" />
      <WhatsAppFab hideOnMobile />
    </>
  );
}
