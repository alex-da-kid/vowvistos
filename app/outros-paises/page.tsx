import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vistos para Outros Países | Reino Unido, Austrália, Japão e mais | Vow Vistos',
  description: 'Consultoria de vistos para Reino Unido, Austrália, Japão, Nova Zelândia, Portugal e outros países. Especialistas com Garantia Vitalícia. Fale agora.',
  keywords: 'visto reino unido, visto australia, visto japão, visto portugal, consultoria vistos internacionais, visto nova zelândia',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const countries = [
  { flag: '🇬🇧', name: 'Reino Unido',   desc: 'Standard Visitor Visa e demais categorias britânicas.' },
  { flag: '🇦🇺', name: 'Austrália',      desc: 'Tourist visa (subclass 600), Working Holiday e mais.' },
  { flag: '🇯🇵', name: 'Japão',          desc: 'Visto de turismo, negócios e trabalho no Japão.' },
  { flag: '🇳🇿', name: 'Nova Zelândia',  desc: 'Visitor Visa e Working Holiday para jovens profissionais.' },
  { flag: '🇵🇹', name: 'Portugal',       desc: 'D7, Golden Visa e residência europeia.' },
  { flag: '🇩🇪', name: 'Alemanha',       desc: 'Visto Schengen e autorização de residência.' },
  { flag: '🇮🇹', name: 'Itália',         desc: 'Visto Schengen para turismo, estudo e trabalho.' },
  { flag: '🌍',  name: 'Outros destinos', desc: 'Consulte-nos sobre qualquer outro destino.' },
];

export default function OutrosPaisesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🌍</span>
            <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Consultoria Internacional</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Vistos para o <span className="text-accent">Mundo Inteiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Além dos Estados Unidos, Canadá e China, a Vow Vistos assessora brasileiros com vistos para dezenas de países — com a mesma excelência e Garantia Vitalícia.
          </p>
          <a href={`https://wa.me/${wa}?text=Quero%20saber%20sobre%20visto%20para%20outro%20país`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
            Consultar meu destino
          </a>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-heading font-bold uppercase tracking-widest mb-3">Destinos</span>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Países que atendemos</h2>
            <p className="text-muted">Se o seu destino não estiver na lista, entre em contato — atendemos praticamente qualquer país.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="bg-light rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
                <span className="text-4xl mb-3">{c.flag}</span>
                <h3 className="font-heading font-bold text-dark mb-1">{c.name}</h3>
                <p className="text-muted text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={`https://wa.me/${wa}?text=Quero%20saber%20sobre%20visto%20para%20outro%20país`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-4 rounded-full transition-colors">
              Consultar meu destino pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">Garantia Vitalícia em todos os destinos</h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">Independente do país, se o seu visto for negado a Vow Vistos oferece <strong className="text-white">reconsultoria gratuita e ilimitada</strong> até a aprovação.</p>
          <a href={`https://wa.me/${wa}?text=Quero%20saber%20sobre%20a%20Garantia%20Vitalícia`} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark font-heading font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Falar com especialista
          </a>
        </div>
      </section>
    </>
  );
}
