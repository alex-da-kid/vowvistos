import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visto Americano | Consultoria Especializada com 99,4% de Aprovação',
  description: 'Consultoria completa para visto americano: análise de perfil, preenchimento do DS-160, simulação de entrevista e Garantia Vitalícia. 11.700+ vistos aprovados. Fale agora.',
  keywords: 'visto americano, consultoria visto americano, como tirar visto americano, visto americano negado, entrevista visto americano, DS-160, visto B1 B2',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

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

const faqs = [
  { q: 'Qual a diferença entre visto B1 e B2?', a: 'O visto B1 é para viagens de negócios e o B2 para turismo. Na prática, os consulados americanos costumam emitir o visto B1/B2 combinado, que permite ambas as finalidades.' },
  { q: 'O que é o código 214(b) e como evitá-lo?', a: 'O código 214(b) é a negativa mais comum para brasileiros. Significa que o cônsul não ficou convencido de que você voltará ao Brasil. A chave é comprovar vínculos sólidos: emprego formal, imóveis, família. A Vow Vistos orienta exatamente como fazer isso.' },
  { q: 'Quem já teve visto negado pode tentar novamente?', a: 'Sim. Não há limite de tentativas. O importante é entender o motivo da negativa e corrigi-lo antes de agendar nova entrevista. A Vow Vistos realiza essa análise e reposiciona o perfil para a próxima tentativa.' },
  { q: 'Preciso comparecer pessoalmente ao consulado?', a: 'Sim, a entrevista presencial é obrigatória para a maioria dos solicitantes. Brasileiros adultos precisam comparecer ao consulado americano na cidade agendada. A Vow Vistos cuida de toda a preparação para esse momento.' },
];

const videos = ['YOUTUBE_ID_US_1', 'YOUTUBE_ID_US_2', 'YOUTUBE_ID_US_3'];

export default function VistoAmericanoPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🇺🇸</span>
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Especialistas em Visto Americano
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Americano</span><br/>
            Aprovado na Primeira
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Análise de perfil, DS-160 sem erros, simulação de entrevista e Garantia Vitalícia. A consultoria mais completa do Brasil para o visto americano.
          </p>
          <p className="text-sm text-white/50 mb-10">11.700+ vistos aprovados · 99,4% de aprovação em 2024 · Líder há 4 anos</p>
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
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
          {[['Líder 4 Anos','No mercado desde 2017'],['11.700+','Vistos aprovados'],['99,4%','Taxa de aprovação 2024']].map(([v,l])=>(
            <div key={l}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{v}</div>
              <div className="text-xs text-white/60 mt-1 hidden sm:block">{l}</div>
            </div>
          ))}
        </div>
      </div>

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

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-light" id="planos">
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

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Depoimentos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Histórias reais de aprovação do visto americano</h2>
            <p className="text-muted">Veja o que nossos clientes falam sobre a experiência com a Vow Vistos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((id, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-dark">
                <iframe className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Depoimento visto americano ${i + 1}`}
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen loading="lazy"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Dúvidas</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto americano</h2>
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
          <p className="text-center text-muted text-sm mb-6">Formulário Gravity Forms — configure o ID em <code className="bg-light px-1 rounded text-xs">.env.local</code>.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Americano`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-3 rounded-full transition-colors w-full">
            Prefiro falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
