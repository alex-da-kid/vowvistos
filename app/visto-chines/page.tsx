import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visto Chinês | Consultoria para China — Turismo, Negócios e Estudo',
  description: 'Consultoria especializada em visto chinês para brasileiros. Turismo, negócios, trânsito e estudo. Documentação completa, orientação no CVASC e Garantia Vitalícia.',
  keywords: 'visto chinês, visto para China, consultoria visto chinês, como tirar visto da China, CVASC, visto China brasileiro',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const visaTypes = [
  { code: 'L', name: 'Turismo', desc: 'Para visitas turísticas e lazer na China.' },
  { code: 'M', name: 'Negócios', desc: 'Para viagens de negócios e missões comerciais.' },
  { code: 'F', name: 'Intercâmbio', desc: 'Para intercâmbios culturais e visitas técnicas.' },
  { code: 'X', name: 'Estudo', desc: 'Para programas de estudo de longa duração na China.' },
];

const faqs = [
  { q: 'Brasileiros precisam de visto para visitar a China?', a: 'Sim. Brasileiros precisam de visto para entrar na China, salvo em casos de trânsito de curta duração em aeroportos específicos. A Vow Vistos orienta sobre a categoria correta para cada objetivo de viagem.' },
  { q: 'Como funciona o CVASC?', a: 'O Centro de Solicitação de Visto da China (CVASC) é o local onde você entrega a documentação e coleta o passaporte com o visto. A Vow Vistos prepara tudo e orienta sobre o procedimento presencial.' },
  { q: 'Quanto tempo demora o visto chinês?', a: 'Em condições normais, o visto chinês leva de 4 a 7 dias úteis após a entrega da documentação no CVASC. Há opções de processamento expresso quando necessário.' },
  { q: 'Preciso de convite para tirar visto chinês de turismo?', a: 'Para turismo, o convite não é obrigatório, mas uma carta de apresentação bem redigida fortalece a solicitação. Para outras categorias pode ser necessário. A Vow Vistos orienta caso a caso.' },
];

export default function VistoChinesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🇨🇳</span>
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Especialistas em Visto Chinês</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Visto <span className="text-accent">Chinês</span><br/>sem Complicação
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turismo, negócios, intercâmbio ou estudo — a Vow Vistos cuida de toda a documentação para a China com análise de perfil, orientação no CVASC e Garantia Vitalícia.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Chinês`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
            Análise de Perfil Gratuita
          </a>
        </div>
      </section>

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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Categorias</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Tipos de visto chinês para brasileiros</h2>
            <p className="text-muted">A categoria certa muda tudo. A Vow Vistos identifica qual visto se aplica ao seu caso.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((v) => (
              <div key={v.code} className="bg-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-primary text-lg">{v.code}</span>
                </div>
                <h3 className="font-heading font-bold text-dark mb-2">Visto {v.name}</h3>
                <p className="text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Perguntas frequentes sobre o visto chinês</h2>
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

      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">Garantia Vitalícia</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">Se o seu visto chinês for negado, oferecemos <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a aprovação.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20contratar%20a%20consultoria%20para%20o%20Visto%20Chinês`} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Começar agora
          </a>
        </div>
      </section>
    </>
  );
}
