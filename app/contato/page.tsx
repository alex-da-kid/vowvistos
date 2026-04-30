import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | Fale com um Especialista em Vistos | Vow Vistos',
  description: 'Entre em contato com a Vow Vistos. Respondemos em até 24 horas úteis. Fale pelo WhatsApp ou preencha o formulário para começar sua análise de perfil gratuita.',
};

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const channels = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    bg: 'bg-green-500/10',
    label: 'WhatsApp',
    value: '+55 (11) 99999-9999',
    href: `https://wa.me/${wa}`,
    target: '_blank',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    bg: 'bg-primary/10',
    label: 'E-mail',
    value: 'contato@vowvistos.com.br',
    href: 'mailto:contato@vowvistos.com.br',
    target: '_self',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    bg: 'bg-primary/10',
    label: 'Horário de atendimento',
    value: 'Seg–Sex: 9h às 18h | Sáb: 9h às 13h',
    href: null,
    target: '_self',
  },
];

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-heading font-extrabold mb-4">Fale <span className="text-accent">Conosco</span></h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Respondemos em até 24 horas úteis. Nossos especialistas estão prontos para fazer uma análise honesta do seu perfil e indicar o melhor caminho para a aprovação.
          </p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-heading font-bold text-dark mb-8">Nossos canais</h2>
            <div className="space-y-4">
              {channels.map((c) => (
                <div key={c.label} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${c.bg}`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-dark text-sm">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.target} rel={c.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-muted text-sm hover:text-accent transition-colors">{c.value}</a>
                    ) : (
                      <div className="text-muted text-sm">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-dark rounded-2xl p-6 text-white">
              <h3 className="font-heading font-bold mb-2">Análise de Perfil Gratuita</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Antes de contratar qualquer serviço, a Vow Vistos oferece uma análise de perfil gratuita para entender suas chances reais de aprovação.
              </p>
              <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20gratuita`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-colors text-sm">
                Começar análise gratuita
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-heading font-bold text-dark mb-2">Envie uma mensagem</h2>
            <p className="text-muted text-sm mb-6">Preencha o formulário e entraremos em contato em até 24 horas úteis.</p>
            <p className="text-center text-muted text-sm bg-light rounded-xl p-4">
              Formulário Gravity Forms — configure o ID em <code className="bg-white px-1 rounded text-xs">.env.local</code>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
