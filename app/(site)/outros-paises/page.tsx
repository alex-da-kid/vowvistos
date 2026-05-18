import type { Metadata } from 'next';
import Image from 'next/image';
import { getGooglePlacesData } from '@/lib/google-places';

export const metadata: Metadata = {
  title: 'Vistos para Outros Países | Reino Unido, Austrália, Japão e mais | Vow Vistos',
  description: 'Consultoria de vistos para Reino Unido, Austrália, Japão, Nova Zelândia, Portugal e outros países. Especialistas com Garantia Vitalícia. Fale agora.',
  keywords: 'visto reino unido, visto australia, visto japão, visto portugal, consultoria vistos internacionais, visto nova zelândia',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '558520186898';

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

function GoogleStarsFull() {
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

function GoogleGLogo() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default async function OutrosPaisesPage() {
  const placeData = await getGooglePlacesData();
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🌍</span>
              <span className="inline-block bg-accent/20 text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Consultoria Internacional</span>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-white border border-white/20">
              <GoogleStarsFull />
              {placeData.rating} · {placeData.reviewCount} avaliações no
              <GoogleGLogo />
            </span>
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
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-2 gap-4 text-center divide-x divide-white/10">
          {[['8 Anos','Especialização exclusiva em consultoria consular'],['7.000+','Vistos aprovados para brasileiros']].map(([v,l])=>(
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
