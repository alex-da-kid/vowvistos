'use client';

import { useState } from 'react';

const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

const situacaoOptions = [
  { value: 'TRV: Visto de Turista', label: 'TRV: Visto de Turista' },
  { value: 'Study Permit: Visto de Estudante', label: 'Study Permit: Visto de Estudante' },
  { value: 'ETA: Autorização Eletrônica', label: 'ETA: Autorização Eletrônica' },
  { value: 'Extensão ou renovação', label: 'Extensão ou renovação' },
  { value: 'Visto negado anteriormente', label: 'Visto negado anteriormente' },
];

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [situacao, setSituacao] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo ${nome}. Meu WhatsApp: ${telefone}. Situação: ${situacao}. Gostaria de uma análise de perfil gratuita para o visto canadense.`
    );
    const url = `https://wa.me/${wa}?text=${text}`;
    setWaUrl(url);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  const inputCls = 'w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition-colors';
  const labelCls = 'block text-xs font-heading font-semibold text-dark mb-1 uppercase tracking-wide';

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p className="font-heading font-bold text-dark text-lg mb-2">Obrigado, {nome}!</p>
        <p className="text-muted text-sm mb-4">Abrimos o WhatsApp para você. Se não abriu automaticamente:</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-colors text-sm">
          Clique aqui para abrir o WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <p className="text-center text-muted text-sm">Preencha abaixo. Responderemos em minutos.</p>
      )}

      <div>
        <label className={labelCls}>Nome completo</label>
        <input type="text" required placeholder="Seu nome" value={nome}
          onChange={(e) => setNome(e.target.value)} className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>WhatsApp</label>
        <input type="tel" required placeholder="(85) 99999-9999" value={telefone}
          onChange={(e) => setTelefone(e.target.value)} className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Minha situação</label>
        <select required value={situacao} onChange={(e) => setSituacao(e.target.value)} className={inputCls}>
          <option value="" disabled>Selecione...</option>
          {situacaoOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <button type="submit"
        className="w-full bg-accent hover:bg-accent-light text-dark font-heading font-bold py-4 rounded-xl transition-colors text-base shadow-lg">
        Quero minha análise gratuita
      </button>

      <div className="flex items-center gap-3 my-1">
        <span className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-muted">ou</span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      <a href={`https://wa.me/${wa}?text=Quero%20fazer%20minha%20análise%20de%20perfil%20para%20o%20Visto%20Canadense`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-3 rounded-xl transition-colors text-sm">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Falar pelo WhatsApp agora
      </a>
    </form>
  );
}
