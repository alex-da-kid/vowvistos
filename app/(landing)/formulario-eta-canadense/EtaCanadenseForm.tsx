'use client';

import { useState } from 'react';

type Values = Record<string, string>;

const input = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition';
const label = 'block text-xs font-heading font-semibold text-dark mb-1.5';
const section = 'text-lg font-heading font-bold text-dark mt-8 mb-4 pt-4 border-t border-gray-100';

function Field({ id, lab, req, desc, type = 'text', values, set }: {
  id: string; lab: string; req?: boolean; desc?: string; type?: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={label}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <input type={type} required={req} value={values[id] ?? ''} onChange={e => set(id, e.target.value)} className={input} />
    </div>
  );
}

function Select({ id, lab, req, desc, opts, values, set }: {
  id: string; lab: string; req?: boolean; desc?: string;
  opts: { text: string; value: string }[];
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={label}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <select required={req} value={values[id] ?? ''} onChange={e => set(id, e.target.value)} className={input}>
        <option value="">Selecione uma opção</option>
        {opts.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
      </select>
    </div>
  );
}

function Radio({ id, lab, req, opts, values, set }: {
  id: string; lab: string; req?: boolean;
  opts: { text: string; value: string }[];
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={label}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="flex gap-6 mt-1">
        {opts.map(o => (
          <label key={o.value} className="flex items-center gap-2 text-sm text-dark cursor-pointer">
            <input type="radio" name={id} value={o.value} required={req && !values[id]}
              checked={values[id] === o.value} onChange={e => set(id, e.target.value)} className="accent-primary" />
            {o.text}
          </label>
        ))}
      </div>
    </div>
  );
}

function Textarea({ id, lab, req, desc, values, set }: {
  id: string; lab: string; req?: boolean; desc?: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={label}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <textarea required={req} rows={4} value={values[id] ?? ''} onChange={e => set(id, e.target.value)}
        className={input + ' resize-none'} />
    </div>
  );
}

export default function EtaCanadenseForm() {
  const [page, setPage] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function set(id: string, v: string) {
    setValues(prev => ({ ...prev, [id]: v }));
  }

  const isMaior = values['231'] === 'Sim';
  const jaTemVisto = values['136'] === 'Sim';
  const sabeViagem = values['131'] === 'Sim';
  const vistoNegado = values['201'] === 'Sim';
  const cometeuCrime = values['199'] === 'Sim';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: 10, fieldValues: values }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data?.error ?? 'Erro desconhecido');
        setStatus('error');
        return;
      }
      console.log('GF submit response:', JSON.stringify(data));
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro de rede');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-dark text-2xl mb-2">Formulário enviado!</h3>
        <p className="text-muted">Sua solicitação foi recebida. Nossa equipe entrará em contato em breve.</p>
      </div>
    );
  }

  // Page 1 — Terms
  if (page === 1) {
    const accepted = !!values['189.1'];
    return (
      <div className="space-y-6">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted">Passo 1 de 2</span>
          <h2 className="text-xl font-heading font-bold text-dark mt-1">Termos e condições</h2>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-muted leading-relaxed max-h-48 overflow-y-auto">
          <p>Ao prosseguir, você confirma que leu e compreende as informações e condições gerais para solicitação e obtenção do visto. A Vow Vistos atuará como intermediária no processo, sendo responsável pelo preenchimento e envio do formulário ETA com os dados fornecidos pelo solicitante.</p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
            checked={accepted}
            onChange={e => set('189.1', e.target.checked
              ? 'Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação obtenção do visto consular americano *'
              : ''
            )} />
          <span className="text-sm text-dark leading-relaxed">
            Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação e obtenção do visto. <span className="text-red-500">*</span>
          </span>
        </label>
        <button type="button" disabled={!accepted}
          onClick={() => accepted && setPage(2)}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-bold py-4 rounded-full transition-colors">
          Próximo
        </button>
      </div>
    );
  }

  // Page 2 — Full form
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted">Passo 2 de 2</span>
          <h2 className="text-xl font-heading font-bold text-dark mt-1">Informações do solicitante</h2>
        </div>
        <button type="button" onClick={() => setPage(1)}
          className="text-xs text-muted hover:text-primary underline transition-colors">
          Voltar
        </button>
      </div>

      {/* Detalhes do visto americano */}
      <p className={section}>Detalhes do visto americano</p>
      <Field id="169" lab="Número do visto de não-imigrante dos EUA" desc="Se aplicável" values={values} set={set} />
      <Field id="170" lab="Data de vencimento do visto de não-imigrante dos EUA" desc="Se aplicável" type="date" values={values} set={set} />

      {/* Detalhes do passaporte */}
      <p className={section}>Detalhes do passaporte do solicitante</p>
      <Field id="171" lab="Número do passaporte" req values={values} set={set} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="172" lab="Nome" req desc="Preencha exatamente como está no passaporte." values={values} set={set} />
        <Field id="173" lab="Sobrenome" req desc="Preencha exatamente como está no passaporte." values={values} set={set} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="174" lab="Data de nascimento" req type="date" values={values} set={set} />
        <Radio id="231" lab="É maior de idade?" req opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      </div>
      <Select id="175" lab="Gênero" req opts={[
        { text: 'Feminino', value: 'Feminino' },
        { text: 'Masculino', value: 'Masculino' },
        { text: 'Outro Gênero', value: 'Outro Gênero' },
      ]} values={values} set={set} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="176" lab="País de nascimento" req values={values} set={set} />
        <Field id="177" lab="Cidade de nascimento" req values={values} set={set} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="178" lab="Data de emissão do passaporte" req type="date" values={values} set={set} />
        <Field id="179" lab="Data de vencimento do passaporte" req type="date" values={values} set={set} />
      </div>

      {/* Dados pessoais */}
      <p className={section}>Dados pessoais do requerente</p>
      <Textarea id="207" lab="Países/territórios de que você é cidadão" req desc="Indique um por linha." values={values} set={set} />
      {isMaior && (
        <Select id="235" lab="Estado civil" req opts={[
          { text: 'Casado(a)', value: 'Casado(a)' },
          { text: 'Separado(a) legalmente', value: 'Separado(a) legalmente' },
          { text: 'Divorciado(a)', value: 'Divorciado(a)' },
          { text: 'Casamento anulado', value: 'Casamento anulado' },
          { text: 'Viúvo(a)', value: 'Viúvo(a)' },
          { text: 'União estável', value: 'União estável' },
          { text: 'Nunca casado(a) / Solteiro(a)', value: 'Nunca casado(a) / Solteiro(a)' },
        ]} values={values} set={set} />
      )}
      <Radio id="136" lab="Você já solicitou ou obteve um visto, eTA ou permissão para visitar o Canadá?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      {jaTemVisto && (
        <Field id="185" lab="Identificador único do cliente (UCI) / Número anterior de visto canadense" desc="Se conhecido" values={values} set={set} />
      )}

      {/* Informações de trabalho (adults only) */}
      {isMaior && (
        <>
          <p className={section}>Informações de trabalho</p>
          <Select id="225" lab="Ocupação" req desc="Selecione a opção que melhor descreve sua situação atual." opts={[
            { text: 'Aposentado(a)', value: 'Aposentado(a)' },
            { text: 'Ciências naturais, aplicadas e ocupações relacionadas', value: 'Ciências naturais, aplicadas e ocupações relacionadas' },
            { text: 'Desempregado(a)', value: 'Desempregado(a)' },
            { text: 'Dona de casa / Responsável pelo lar', value: 'Dona de casa / Responsável pelo lar' },
            { text: 'Estudante', value: 'Estudante' },
            { text: 'Militar / Forças armadas', value: 'Militar / Forças armadas' },
            { text: 'Ocupações de gestão / cargos de gerência', value: 'Ocupações de gestão / cargos de gerência' },
            { text: 'Ocupações em arte, cultura, recreação e esportes', value: 'Ocupações em arte, cultura, recreação e esportes' },
            { text: 'Ocupações em negócios, finanças e administração', value: 'Ocupações em negócios, finanças e administração' },
            { text: 'Ocupações em educação, direito, serviços sociais, comunitários e governamentais', value: 'Ocupações em educação, direito, serviços sociais, comunitários e governamentais' },
            { text: 'Ocupações em manufatura e utilidades', value: 'Ocupações em manufatura e utilidades' },
            { text: 'Ocupações em ofícios, transporte, operadores de equipamentos e áreas relacionadas', value: 'Ocupações em ofícios, transporte, operadores de equipamentos e áreas relacionadas' },
            { text: 'Ocupações em vendas e serviços', value: 'Ocupações em vendas e serviços' },
            { text: 'Ocupações na área da saúde', value: 'Ocupações na área da saúde' },
            { text: 'Recursos naturais, agricultura e produção relacionada', value: 'Recursos naturais, agricultura e produção relacionada' },
            { text: 'Outros', value: 'Outros' },
          ]} values={values} set={set} />
          <Field id="229" lab="Cargo/Posição" req desc="Se não aplicável, escreva 'N/A'" values={values} set={set} />
          <Field id="227" lab="Nome do empregador ou da instituição de ensino" req desc="Se não aplicável, escreva 'N/A'" values={values} set={set} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="224" lab="País aonde trabalha ou estuda" req desc="Se não aplicável, escreva 'N/A'" values={values} set={set} />
            <Field id="226" lab="Cidade aonde trabalha ou estuda" req desc="Se não aplicável, escreva 'N/A'" values={values} set={set} />
          </div>
          <Field id="236" lab="Desde que ano?" req desc="Se não aplicável, escreva 'N/A'" values={values} set={set} />
        </>
      )}

      {/* Informações de contato */}
      <p className={section}>Informações de contato</p>
      <Field id="186" lab="E-mail" req type="email" values={values} set={set} />
      <div>
        <label className={label}>Endereço residencial <span className="text-red-500">*</span></label>
        <div className="space-y-3">
          <input required placeholder="Rua / Endereço Linha 1" value={values['158.1'] ?? ''}
            onChange={e => set('158.1', e.target.value)} className={input} />
          <input placeholder="Bairro e Complemento" value={values['158.2'] ?? ''}
            onChange={e => set('158.2', e.target.value)} className={input} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required placeholder="Cidade" value={values['158.3'] ?? ''}
              onChange={e => set('158.3', e.target.value)} className={input} />
            <input required placeholder="Estado / Província" value={values['158.4'] ?? ''}
              onChange={e => set('158.4', e.target.value)} className={input} />
          </div>
          <input required placeholder="País" value={values['158.6'] ?? ''}
            onChange={e => set('158.6', e.target.value)} className={input} />
        </div>
      </div>

      {/* Informações de viagem */}
      <p className={section}>Informações de viagem</p>
      <Radio id="131" lab="Você sabe quando viajará para o Canadá?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      {sabeViagem && (
        <>
          <Field id="134" lab="Quando você planeja viajar para o Canadá?" req type="date" values={values} set={set} />
          <div>
            <label className={label}>Horário de partida do voo <span className="text-red-500">*</span></label>
            <p className="text-xs text-muted mb-1.5">Caso não saiba o horário exato, insira um horário aproximado.</p>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="Hora (ex: 14)" value={values['187.1'] ?? ''}
                onChange={e => set('187.1', e.target.value)} className={input} maxLength={2} />
              <input required placeholder="Minuto (ex: 30)" value={values['187.2'] ?? ''}
                onChange={e => set('187.2', e.target.value)} className={input} maxLength={2} />
            </div>
          </div>
        </>
      )}

      {/* Perguntas de segurança */}
      <p className={section}>Perguntas de segurança</p>
      <Select id="201" lab="Você já teve um visto ou permissão negados, foi impedido(a) de entrar ou recebeu uma ordem para sair do Canadá ou de qualquer outro país/território?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      {vistoNegado && (
        <Textarea id="200" lab="Para cada negativa, indique o país, a data e os motivos informados." req values={values} set={set} />
      )}
      <Select id="199" lab="Você já cometeu, foi preso(a), acusado(a) ou condenado(a) por algum crime em qualquer país/território?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      {cometeuCrime && (
        <Textarea id="202" lab="Para cada prisão/acusação/condenação, indique o local, a data, a natureza da infração e a sentença." req values={values} set={set} />
      )}
      <Select id="203" lab="Nos últimos dois anos, você foi diagnosticado(a) com tuberculose ou teve contato próximo com uma pessoa com tuberculose?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />
      <Select id="204" lab="Você possui alguma doença sexualmente transmissível, dependência ou transtorno mental?" req
        opts={[{ text: 'Sim', value: 'Sim' }, { text: 'Não', value: 'Não' }]} values={values} set={set} />

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          <p className="font-semibold mb-1">Erro ao enviar o formulário:</p>
          <p className="font-mono text-xs break-all">{errorMsg}</p>
        </div>
      )}

      <div className="pt-4">
        <button type="submit" disabled={status === 'sending'}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-heading font-bold py-4 rounded-full transition-colors text-base">
          {status === 'sending' ? 'Enviando...' : 'Enviar formulário'}
        </button>
      </div>
    </form>
  );
}
