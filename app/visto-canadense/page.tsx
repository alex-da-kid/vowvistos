import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visto Canadense | Consultoria Completa para o Canadá | Vow Vistos',
  description: 'Consultoria especializada em visto canadense: TRV, ETA, estudo e trabalho. Análise de perfil, documentação e acompanhamento até a aprovação. Garantia Vitalícia.',
  keywords: 'visto canadense, consultoria visto canadense, TRV Canadá, ETA Canadá, visto de trabalho Canadá, visto de estudo Canadá',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const plans = [
  { name: 'Visto de Turismo (TRV)', subtitle: 'Para visitas, passeios e trânsito pelo Canadá', featured: false, msg: 'Quero%20saber%20sobre%20o%20Visto%20Canadense%20TRV' },
  { name: 'ETA / Estudo / Trabalho', subtitle: 'Para entradas rápidas, intercâmbio ou emprego no Canadá', featured: true, msg: 'Quero%20saber%20sobre%20ETA%20ou%20Visto%20Canadense%20de%20Trabalho%20e%20Estudo' },
];

const features = [
  'Análise de elegibilidade e tipo de visto ideal',
  'Preenchimento de formulários IRCC',
  'Carta de apresentação estratégica',
  'Checklist de documentação completo',
  'Comprovação financeira orientada',
  'Acompanhamento em tempo real',
  'Garantia Vitalícia de reaprovação',
];

const faqs = [
  { q: 'Brasileiros precisam de visto para entrar no Canadá?', a: 'Depende da forma de entrada. Quem entra por via aérea precisa de ETA (Electronic Travel Authorization) ou visto, dependendo do passaporte. A Vow Vistos identifica o documento correto para o seu caso.' },
  { q: 'Quanto tempo demora a aprovação do visto canadense?', a: 'O tempo varia conforme o tipo de visto e o volume de solicitações da IRCC. Em geral, vistos de turismo levam de 2 a 8 semanas. A Vow Vistos orienta sobre como submeter uma solicitação robusta para agilizar o processo.' },
  { q: 'Qual a diferença entre ETA e visto de turismo canadense?', a: 'O ETA é uma autorização eletrônica para cidadãos de países específicos que não precisam de visto para o Canadá. Brasileiros, em geral, precisam do visto TRV para entrar. A Vow Vistos avalia o seu caso e indica o documento correto.' },
  { q: 'É possível trabalhar no Canadá com visto de turismo?', a: 'Não. O visto de turismo não autoriza trabalho remunerado no Canadá. Para trabalhar é necessário um Work Permit. A Vow Vistos orienta sobre todas as categorias de visto de trabalho disponíveis para brasileiros.' },
];

export default function VistoCanadensePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🇨🇦</span>
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Especialistas em Visto Canadense</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Canadense</span><br/>com Segurança e Agilidade
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            TRV, ETA, estudo ou trabalho — a Vow Vistos cuida de toda a documentação para o Canadá com análise de perfil completa e Garantia Vitalícia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Canadense`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
              Análise de Perfil Gratuita
            </a>
            <a href="#planos" className="inline-block border-2 border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold px-8 py-4 rounded-full transition-colors">
              Ver Opções
            </a>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-light" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Consultoria</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Escolha o tipo de visto canadense</h2>
            <p className="text-muted">Cada modalidade tem exigências específicas. A Vow Vistos identifica a melhor estratégia para o seu perfil.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 flex flex-col shadow-lg ${p.featured ? 'bg-dark ring-2 ring-accent' : 'bg-white'}`}>
                {p.featured && <span className="inline-block bg-accent text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full mb-4 self-start">Mais procurado</span>}
                <h3 className={`font-heading font-bold text-xl mb-1 ${p.featured ? 'text-white' : 'text-dark'}`}>{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-muted'}`}>{p.subtitle}</p>
                <div className={`text-2xl font-heading font-bold mb-6 ${p.featured ? 'text-accent' : 'text-primary'}`}>Consulte o valor</div>
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
                  Falar com Especialista
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto canadense</h2>
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

      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-4">Garantia Vitalícia</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">Se o seu visto canadense for negado, a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a aprovação.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Canadense`} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar agora
          </a>
        </div>
      </section>
    </>
  );
}
