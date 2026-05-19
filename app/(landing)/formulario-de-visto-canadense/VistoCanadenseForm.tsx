'use client';

import { useState } from 'react';

type Values = Record<string, string>;

const STEP_NAMES = [
  'Termos', 'Triagem Inicial', 'Dados Pessoais',
  'Documentação', 'Endereço e Contato', 'Detalhes da Viagem',
  'Educação', 'Emprego', 'Família', 'Antecedentes',
];

const inp = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition';
const lbl = 'block text-xs font-heading font-semibold text-dark mb-1.5';
const sec = 'text-base font-heading font-bold text-dark mt-8 mb-3 pt-4 border-t border-gray-100';

const STATUS_OPTS = ['Cidadão', 'Residente Permanente', 'Visitante', 'Trabalhador', 'Estudante', 'Outro', 'Pessoa Protegida', 'Requerente de Refúgio', 'Cidadão Estrangeiro'];
const EC_OPTS = ['Casado', 'União estável', 'Divorciado', 'Solteiro', 'Separado legalmente', 'Viúvo', 'Casamento anulado'];
const FILHO_OPTS = ['Filho', 'Filha', 'Enteada', 'Enteado', 'Filho adotivo', 'Filha adotiva'];

function Field({ id, lab, req, desc, type = 'text', values, set }: {
  id: string; lab: string; req?: boolean; desc?: string; type?: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <input type={type} required={req} value={values[id] ?? ''} onChange={e => set(id, e.target.value)} className={inp} />
    </div>
  );
}

function Sel({ id, lab, req, desc, opts, values, set }: {
  id: string; lab: string; req?: boolean; desc?: string; opts: string[];
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <select required={req} value={values[id] ?? ''} onChange={e => set(id, e.target.value)} className={inp}>
        <option value="">Selecione uma opção</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Radio({ id, lab, req, values, set }: {
  id: string; lab: string; req?: boolean;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="flex gap-6 mt-1">
        {['Sim', 'Não'].map(o => (
          <label key={o} className="flex items-center gap-2 text-sm text-dark cursor-pointer">
            <input type="radio" name={id} value={o} required={req && !values[id]}
              checked={values[id] === o} onChange={e => set(id, e.target.value)} className="accent-primary" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function RadioOpts({ id, lab, req, opts, values, set }: {
  id: string; lab: string; req?: boolean; opts: string[];
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="flex flex-wrap gap-4 mt-1">
        {opts.map(o => (
          <label key={o} className="flex items-center gap-2 text-sm text-dark cursor-pointer">
            <input type="radio" name={id} value={o} required={req && !values[id]}
              checked={values[id] === o} onChange={e => set(id, e.target.value)} className="accent-primary" />
            {o}
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
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      {desc && <p className="text-xs text-muted mb-1.5">{desc}</p>}
      <textarea required={req} rows={3} value={values[id] ?? ''} onChange={e => set(id, e.target.value)}
        className={inp + ' resize-none'} />
    </div>
  );
}

function Address({ id, lab, req, values, set }: {
  id: string; lab: string; req?: boolean;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="space-y-3 mt-1.5">
        <input required={req} placeholder="Endereço Linha 1" value={values[`${id}.1`] ?? ''}
          onChange={e => set(`${id}.1`, e.target.value)} className={inp} />
        <input placeholder="Endereço Linha 2" value={values[`${id}.2`] ?? ''}
          onChange={e => set(`${id}.2`, e.target.value)} className={inp} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input required={req} placeholder="Cidade" value={values[`${id}.3`] ?? ''}
            onChange={e => set(`${id}.3`, e.target.value)} className={inp} />
          <input required={req} placeholder="Estado / Província" value={values[`${id}.4`] ?? ''}
            onChange={e => set(`${id}.4`, e.target.value)} className={inp} />
        </div>
        <input placeholder="Código Postal" value={values[`${id}.5`] ?? ''}
          onChange={e => set(`${id}.5`, e.target.value)} className={inp} />
      </div>
    </div>
  );
}

function NameField({ id, lab, req, values, set }: {
  id: string; lab: string; req?: boolean;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
        <input required={req} placeholder="Nome" value={values[`${id}.3`] ?? ''}
          onChange={e => set(`${id}.3`, e.target.value)} className={inp} />
        <input required={req} placeholder="Sobrenome" value={values[`${id}.6`] ?? ''}
          onChange={e => set(`${id}.6`, e.target.value)} className={inp} />
      </div>
    </div>
  );
}

function DynamicList({ id, lab, req, cols, values, set }: {
  id: string; lab: string; req?: boolean; cols: string[];
  values: Values; set: (id: string, v: string) => void;
}) {
  let rows: string[][] = [];
  try { rows = JSON.parse(values[id] ?? '[]'); } catch { rows = []; }
  if (rows.length === 0) rows = [cols.map(() => '')];

  function update(ri: number, ci: number, v: string) {
    const next = rows.map((r, i) => i === ri ? r.map((c, j) => j === ci ? v : c) : r);
    set(id, JSON.stringify(next));
  }
  function add() { set(id, JSON.stringify([...rows, cols.map(() => '')])); }
  function remove(ri: number) {
    const next = rows.filter((_, i) => i !== ri);
    set(id, JSON.stringify(next.length ? next : [cols.map(() => '')]));
  }

  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="mt-1.5 space-y-2">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-2 items-end">
            {cols.map((col, ci) => (
              <div key={ci} className="flex-1 min-w-0">
                {ri === 0 && <span className="text-xs text-muted mb-1 block truncate">{col}</span>}
                <input value={row[ci] ?? ''} onChange={e => update(ri, ci, e.target.value)}
                  placeholder={col} className={inp} />
              </div>
            ))}
            {rows.length > 1 && (
              <button type="button" onClick={() => remove(ri)}
                className="shrink-0 text-red-400 hover:text-red-600 text-sm pb-3">✕</button>
            )}
          </div>
        ))}
        <button type="button" onClick={add}
          className="text-xs text-primary hover:underline font-semibold mt-1">
          + Adicionar linha
        </button>
      </div>
    </div>
  );
}

function ResidenceBlock({ countryId, statusId, fromId, toId, values, set }: {
  countryId: string; statusId: string; fromId: string; toId: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  const needsDates = ['Estudante', 'Trabalhador', 'Visitante', 'Outro'].includes(values[statusId] ?? '');
  return (
    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
      <Field id={countryId} lab="País" req values={values} set={set} />
      <Sel id={statusId} lab="Situação" req opts={STATUS_OPTS} values={values} set={set} />
      {needsDates && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field id={fromId} lab="De:" req type="date" values={values} set={set} />
          <Field id={toId} lab="Até:" req type="date" values={values} set={set} />
        </div>
      )}
    </div>
  );
}

function FilhoBlock({ ids, parenteId, values, set }: {
  ids: { nome: string; sob: string; ec: string; nasc: string; pais: string; rel: string; end: string; ocup: string; acomp: string };
  parenteId: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id={ids.nome} lab="Nome" req values={values} set={set} />
        <Field id={ids.sob} lab="Sobrenome" req values={values} set={set} />
      </div>
      <Sel id={ids.ec} lab="Estado civil" req opts={EC_OPTS} values={values} set={set} />
      <Field id={ids.nasc} lab="Data de Nascimento" req type="date" values={values} set={set} />
      <Field id={ids.pais} lab="País de Nascimento" req values={values} set={set} />
      <Sel id={parenteId} lab="Parentesco com você" req opts={FILHO_OPTS} values={values} set={set} />
      <Field id={ids.end} lab="Endereço atual" req values={values} set={set} />
      <Field id={ids.ocup} lab="Ocupação atual" req values={values} set={set} />
      <Radio id={ids.acomp} lab="Acompanhará você ao Canadá?" req values={values} set={set} />
    </div>
  );
}

export default function VistoCanadenseForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<Values>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function set(id: string, v: string) {
    setValues(prev => ({ ...prev, [id]: v }));
  }

  function goNext() {
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    setStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: 33, fieldValues: values }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data?.error ?? 'Erro desconhecido');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro de rede');
      setStatus('error');
    }
  }

  function onStepSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step < 10) goNext();
    else handleSubmit();
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

  const estudar = values['420'] === 'Estudar';
  const turismo = values['420'] === 'Turismo';
  const temParente = values['529'] === 'Sim';
  const parenteOutro = values['427'] === 'Outro';
  const motivoOutro = values['432'] === 'Outro';
  const dependente = values['538'] === 'Sim';
  const viajouPaises = values['539'] === 'Sim';
  const testeIdioma = values['446'];
  const permissaoNao = values['453'] === 'Não';

  const outrosNomes = values['18'] === 'Sim';
  const statusNeedsDates = (s: string) => ['Estudante', 'Trabalhador', 'Visitante', 'Outro'].includes(values[s] ?? '');
  const residiu = values['157'] === 'Sim';
  const outroResid = values['194'] === 'Sim';
  const solicitacaoDif = values['211'] === 'Não';
  const casado = ['Casado', 'União estável'].includes(values['133'] ?? '');
  const jaFoiCasado = values['220'] === 'Sim';
  const corrEndDif = values['554'] === 'Não';
  const motOutro = values['556'] === 'Outro';
  const visitaOutra = values['565'] === 'Sim';
  const temEducacao = values['128'] === 'Sim';

  const naoSolteiro = values['133'] !== '' && values['133'] !== 'Solteiro';
  const temFilhos = values['386'] === 'Sim';
  const maisFilho1 = values['387'] === 'Sim';
  const maisFilho2 = values['610'] === 'Sim';
  const maisFilho3 = values['628'] === 'Sim';

  const progress = (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted">
          Passo {step} de {STEP_NAMES.length}
        </span>
        <span className="text-xs font-heading font-semibold text-primary">{STEP_NAMES[step - 1]}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full">
        <div className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((step - 1) / (STEP_NAMES.length - 1)) * 100}%` }} />
      </div>
    </div>
  );

  const navBtns = (
    <div className="flex gap-3 pt-4">
      {step > 1 && (
        <button type="button" onClick={goBack}
          className="flex-1 border border-gray-200 text-dark font-heading font-semibold py-3 rounded-full hover:bg-gray-50 transition-colors">
          Voltar
        </button>
      )}
      {step < 10 ? (
        <button type="submit"
          className="flex-1 bg-primary hover:bg-primary-dark text-white font-heading font-bold py-4 rounded-full transition-colors">
          Próximo
        </button>
      ) : (
        <button type="submit" disabled={status === 'sending'}
          className="flex-1 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-heading font-bold py-4 rounded-full transition-colors">
          {status === 'sending' ? 'Enviando...' : 'Enviar formulário'}
        </button>
      )}
    </div>
  );

  // ── STEP 1: TERMOS ────────────────────────────────────────────────────
  if (step === 1) {
    const accepted = !!values['465.1'];
    return (
      <div className="space-y-6">
        {progress}
        <h2 className="text-xl font-heading font-bold text-dark">Termos e Condições</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-muted leading-relaxed max-h-64 overflow-y-auto space-y-3">
          <p className="font-semibold text-dark">CONTRATO E TERMO DE CIÊNCIA E RESPONSABILIDADE PARA OBTENÇÃO OU RENOVAÇÃO DO VISTO ESTRANGEIRO E TRÂMITES DE PROCESSOS IMIGRATÓRIOS</p>
          <p>Pelo presente instrumento particular que fazem parte entre si, de um lado a empresa, VOW VISTOS CONSULTORIA CONSULAR E AGENCIA DE VIAGENS LTDA, pessoa jurídica de direito privado, inscrita no CNPJ 27.297.742/0001-87, situada Avenida Senador Virgilio Tavora, Número 1701, Sala 1408, CEP: 60170-079, no Bairro Aldeota, no município de Fortaleza, no estado do Ceará, neste ato representada na pessoa do seu administrador, Sr. GUILHERME HOLANDA NIELSEN, contato e-mail contato@vowvistos.com.br e telefone (Brasil) 55 85 2018 6898, denominada simplesmente CONTRATADA, e de outro lado, doravante denominada CONTRATANTE, conforme formulário preenchido anexo.</p>
          <p className="font-semibold text-dark">CLÁUSULA PRIMEIRA – OBJETO</p>
          <p>1.1 A CONTRATADA neste ato, presta serviços tão somente de ASSESSORIA E CONSULTORIA PARA OBTENÇÃO DE VISTOS CONSULARES E TRÂMITES DE PROCESSOS IMIGRATÓRIOS, ao adquirir o serviço, o CONTRATANTE submete o requerimento e documentos apresentados, a uma análise e julgamento em uma Embaixada e/ou Consulado, sendo os serviços da CONTRATADA de meio e não de resultado, limitados à assessoria e orientação sobre os documentos necessários e o processo de solicitação de visto consular e trâmites imigratórios para diversos países, não possuindo nenhuma ingerência sobre a sua aprovação.</p>
          <p className="font-semibold text-dark">CLÁUSULA SEGUNDA – RESPONSABILIDADES</p>
          <p>2.1 O CONTRATANTE está ciente que a análise consular é feita mediante a documentação apresentada e/ou entrevista pessoal. O perfil do CONTRATANTE é analisado de forma sigilosa pela Embaixada e/ou Consulado. A CONTRATADA não tem influência sobre essa análise e/ou julgamento, tampouco participa da mesma. A concessão de um visto, bem como, a sua validade e outros fatores quaisquer são de inteira responsabilidade do oficial que analisou e/ou julgou o processo.</p>
          <p>2.2 A CONTRATADA segue estritamente as informações oficiais fornecidas pelas Embaixadas e/ou Consulados para a orientação e assessoria dos processos. É de obrigação do CONTRATANTE observar as orientações para compreender os detalhes do processo, documentos necessários, informações obrigatórias, prazos médios estimados, normas, regras e outras especificações exigidas pela Embaixada e/ou Consulado.</p>
          <p>2.3 Todas as informações e documentos fornecidos são de inteira e exclusiva responsabilidade do CONTRATANTE. Preenchimentos incorretos, informações incompletas ou faltantes, documentos em desconformidade com o solicitado pela Embaixada e/ou Consulado ou ainda, informações falsas ou documentos fraudulentos são de única e total responsabilidade do CONTRATANTE.</p>
          <p>2.4 As taxas consulares, os honorários, as passagens aéreas e ou terrestres, programa pretendido, hospedagens e outros serviços ligados à viagem não são garantias de aprovação do visto. Os prazos médios estimados para obtenção do visto consular são informados pela CONTRATADA, mas fornecidos pelas Embaixadas e/ou Consulados que, apoiadas em sua Soberania, não oferecem prazos limites ou finais para a análise e/ou julgamento de um requerimento.</p>
          <p>2.5 A CONTRATADA recomenda a compra de passagens aéreas, pacotes de viagens ou quaisquer outros serviços turísticos para o país destino, somente após emissão do visto concedido pelo consulado responsável.</p>
          <p>2.6 A CONTRATADA não se responsabiliza, em nenhuma hipótese, por quaisquer problemas e/ou prejuízos financeiros, de qualquer natureza, que possam ocorrer ao CONTRATANTE pelo prazo intempestivo de trâmite do processo junto às Embaixadas e/ou Consulados.</p>
          <p className="font-semibold text-dark">CLÁUSULA TERCEIRA – TAXAS</p>
          <p>3.1 As Embaixadas e/ou Consulados arbitram taxas consulares ou outras taxas de acordo com a política interna, e é de responsabilidade do CONTRATANTE o pagamento dessas taxas.</p>
          <p>3.4 Os serviços e as taxas cobradas pelas Embaixadas e/ou Consulados não são reembolsáveis após o pagamento e/ou depósito em nenhuma hipótese.</p>
          <p className="font-semibold text-dark">CLÁUSULA QUARTA – DOCUMENTAÇÃO E ENVIO</p>
          <p>4.1 O CONTRATANTE deve disponibilizar para a CONTRATADA toda documentação necessária para obtenção do visto consular com pelo menos 60 (sessenta) dias úteis anterior à data pretendida do embarque.</p>
          <p>4.3 O requerimento e envio de documentos às Embaixadas e/ou Consulados são realizados na modalidade on-line e/ou via transporte aéreo ou terrestre.</p>
          <p>4.5 Com exceção do passaporte, as Embaixadas e/ou Consulados podem não devolver outros documentos; o CONTRATANTE está ciente que ao enviar documentos originais, estes poderão ser retidos.</p>
          <p className="font-semibold text-dark">CLÁUSULA QUINTA – PRAZO DE EXECUÇÃO DO SERVIÇO</p>
          <p>5.1 O serviço será executado a partir da assinatura deste instrumento, com a entrega dos documentos necessários, juntamente com o adimplemento de todas as taxas cobradas.</p>
          <p>5.2 O CONTRATANTE deve observar o prazo para entrega da documentação completa de até 30 (trinta) dias corridos a partir da assinatura deste instrumento. A não obediência a este prazo incorre em cancelamento automático do serviço contratado, sendo devido à CONTRATADA reter o percentual de 50% do valor do serviço.</p>
          <p>5.3 A partir da assinatura deste contrato, o CONTRATANTE deve concluir o processo em até 180 (cento e oitenta) dias corridos. A não observância ao prazo estipulado incorrerá em cancelamento automático do serviço e retenção do valor integral pago.</p>
          <p className="font-semibold text-dark">CLÁUSULA SEXTA – INADIMPLEMENTO</p>
          <p>6.1 No caso de inadimplência, estorno ou depósitos e transferências de pagamentos inválidos, a CONTRATADA irá proceder ao protesto por falta de pagamento, junto ao competente cartório, valendo este contrato como título executivo extrajudicial.</p>
          <p className="font-semibold text-dark">CLÁUSULA SÉTIMA – CONFIDENCIALIDADE</p>
          <p>7.1 As partes devem manter sigilo, sob pena de responsabilidade civil, penal e administrativa, sobre todo e qualquer assunto de que tomar conhecimento em razão da execução do objeto deste contrato.</p>
          <p className="font-semibold text-dark">CLÁUSULA NONA – LEGISLAÇÃO E FORO</p>
          <p>9.1 As PARTES elegem a legislação brasileira e o foro central da cidade de FORTALEZA no estado do CEARÁ para dirimir quaisquer dúvidas surgidas do presente contrato.</p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
            checked={accepted}
            onChange={e => set('465.1', e.target.checked
              ? 'Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação obtenção do visto canadense'
              : ''
            )} />
          <span className="text-sm text-dark leading-relaxed">
            Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação e obtenção do visto. <span className="text-red-500">*</span>
          </span>
        </label>
        <button type="button" disabled={!accepted}
          onClick={() => { if (accepted) goNext(); }}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-bold py-4 rounded-full transition-colors">
          Próximo
        </button>
      </div>
    );
  }

  // ── STEP 2: TRIAGEM INICIAL ───────────────────────────────────────────
  if (step === 2) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Sel id="420" lab="O que você gostaria de fazer no Canadá?" req
          opts={['Turismo', 'Estudar']} values={values} set={set} />
        <Sel id="421" lab="Por quanto tempo você planeja ficar no Canadá?" req
          opts={['Até 6 meses', 'Mais de 6 meses']} values={values} set={set} />
        <Field id="423" lab="Qual é o seu país ou território de residência atual?" req values={values} set={set} />
        <Radio id="530" lab="Você já morou no Canadá com status de residente permanente ou como imigrante admitido?" req values={values} set={set} />
        <Radio id="529" lab="Você tem algum parente no Canadá que seja cidadão ou residente permanente e tenha 18 anos ou mais?" req values={values} set={set} />
        {temParente && (
          <>
            <Sel id="427" lab="Qual é o seu grau de parentesco com o familiar que está no Canadá?" req
              opts={['Cônjuge legalmente casado', 'Parceiro comprometido por pelo menos um ano (que não moraram juntos)', 'Cônjuge em união estável (que já moraram juntos)', 'Irmão', 'Irmã', 'Tia /Tio', 'Pai', 'Mãe', 'Avô', 'Avó', 'Filho', 'Filha', 'Neto', 'Neta', 'Outro']}
              values={values} set={set} />
            {parenteOutro && (
              <Field id="528" lab="Por favor, especifique:" req values={values} set={set} />
            )}
          </>
        )}
        <Radio id="531" lab="Nos últimos 10 anos, você teve um visto canadense válido?" req values={values} set={set} />
        <Radio id="532" lab="Atualmente, você possui um visto de não imigrante dos EUA válido?" req values={values} set={set} />
        <Radio id="653" lab="Nos últimos 10 anos, você forneceu suas impressões digitais e foto (biometria) para uma solicitação de entrada no Canadá?" req values={values} set={set} />

        {turismo && (
          <>
            <Sel id="467" lab="Qual é a província ou território de destino?" req
              opts={['Alberta', 'Colúmbia Britânica', 'Ilha do Príncipe Eduardo', 'Manitoba', 'Novo Brunswick', 'Nova Escócia', 'Nunavut', 'Ontário', 'Saskatchewan', 'Terra Nova e Labrador', 'Territórios do Noroeste', 'Quebec', 'Yukon']}
              values={values} set={set} />
            <Sel id="432" lab="Qual é o principal motivo da sua visita?" req
              opts={['Turismo', 'Visitar família e/ou amigos', 'Negócios', 'Outro']}
              values={values} set={set} />
            {motivoOutro && (
              <Field id="479" lab="Explique" req values={values} set={set} />
            )}
          </>
        )}

        <Radio id="536" lab="Você possui um emprego atualmente?" req values={values} set={set} />
        <Radio id="537" lab="Você possui um negócio atualmente?" req values={values} set={set} />
        <Radio id="538" lab="Você depende financeiramente de alguém?" req values={values} set={set} />
        {dependente && (
          <Field id="480" lab="Explique" req values={values} set={set} />
        )}

        <Radio id="539" lab="Nos últimos 10 anos, você já viajou para outros países?" req values={values} set={set} />
        {viajouPaises && (
          <DynamicList id="524" lab="Quais países você visitou?" req cols={['País', 'Ano']} values={values} set={set} />
        )}

        <Radio id="540" lab="Você está acompanhando um familiar que já possui status no Canadá ou que foi recentemente autorizado a viajar para o país?" req values={values} set={set} />
        <Radio id="541" lab="Você realizou um exame médico com um médico credenciado pelo IRCC nos últimos 12 meses?" req values={values} set={set} />

        {estudar && (
          <>
            <p className={sec}>Informações sobre estudos</p>
            <Radio id="542" lab="Você possui um GIC elegível para o SDS?" req values={values} set={set} />
            <Radio id="543" lab="Você já pagou integralmente a anuidade do primeiro ano de estudos?" req values={values} set={set} />
            <Sel id="446" lab="Você realizou um teste de proficiência em idioma nos últimos dois anos?" req
              opts={['Sim, IELTS ou TOEFL', 'Sim, TEF', 'Não']}
              values={values} set={set} />
            {testeIdioma === 'Sim, TEF' && (
              <Radio id="544" lab="No Teste de Avaliação de Francês (TEF), você obteve uma pontuação equivalente a, no mínimo, o Nível 7 do CLB em cada habilidade?" req values={values} set={set} />
            )}
            {testeIdioma === 'Sim, IELTS ou TOEFL' && (
              <Radio id="545" lab="Todos os seus resultados no IELTS foram iguais ou superiores a 6.0?" req values={values} set={set} />
            )}
            <Sel id="453" lab="Você possui uma permissão de trabalho ou estudo válida e precisa de um visto para retornar ao Canadá?" req
              opts={['Sim, Permissão de estudo', 'Sim, Permissão de Trabalho', 'Não']}
              values={values} set={set} />
            {permissaoNao && (
              <>
                <Radio id="645" lab="Você é um estudante de intercâmbio?" req values={values} set={set} />
                <Radio id="646" lab="O trabalho é um componente essencial do seu programa de estudos?" req values={values} set={set} />
              </>
            )}
          </>
        )}

        <Radio id="647" lab="Você é cônjuge, parceiro em união estável ou filho(a) de um trabalhador qualificado ou de um estudante internacional em tempo integral que possua ou terá status no Canadá?" req values={values} set={set} />
        <Radio id="649" lab="Você é beneficiário de uma bolsa de estudos da Commonwealth?" req values={values} set={set} />
        <Radio id="651" lab="Você é participante de um programa de ajuda canadense para países em desenvolvimento?" req values={values} set={set} />
        <Radio id="652" lab="Você é beneficiário de uma bolsa integral da Agência Canadense de Desenvolvimento Internacional (CIDA), incluindo bolsas da Francofonia?" req values={values} set={set} />

        {navBtns}
      </form>
    );
  }

  // ── STEP 3: DADOS PESSOAIS ────────────────────────────────────────────
  if (step === 3) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="468" lab="Nome (conforme passaporte)" req values={values} set={set} />
          <Field id="469" lab="Sobrenome (conforme passaporte)" req values={values} set={set} />
        </div>
        <Radio id="18" lab="Você já utilizou outros nomes (de solteiro(a), religioso, profissional, apelido, etc.)?" req values={values} set={set} />
        {outrosNomes && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="470" lab="Outros nomes utilizados" req values={values} set={set} />
            <Field id="471" lab="Outros sobrenomes utilizados" req values={values} set={set} />
          </div>
        )}
        <Sel id="475" lab="Sexo" req opts={['Masculino', 'Feminino', 'Desconhecido', 'Outro gênero']} values={values} set={set} />
        <Field id="121" lab="Data de nascimento" req type="date" values={values} set={set} />
        <Sel id="442" lab="Seu familiar está viajando com um dos pais que não tem a guarda legal plena?" req opts={['Sim', 'Não']} values={values} set={set} />
        <Radio id="654" lab="Seu familiar está ou estará acompanhado de um dos pais ou responsável legal durante toda a estadia no Canadá?" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="154" lab="Cidade de Nascimento" req values={values} set={set} />
          <Field id="476" lab="País de Nascimento" req values={values} set={set} />
        </div>
        <Field id="477" lab="País de cidadania" req values={values} set={set} />

        <p className={sec}>País de residência atual</p>
        <ResidenceBlock countryId="195" statusId="198" fromId="199" toId="200" values={values} set={set} />

        <Radio id="157" lab="Nos últimos cinco anos, você residiu por mais de seis meses em algum país ou território que não seja o seu país de cidadania ou o seu local de residência atual?" req values={values} set={set} />

        {residiu && (
          <>
            <p className={sec}>Países ou territórios de residência anteriores</p>
            <ResidenceBlock countryId="201" statusId="202" fromId="203" toId="204" values={values} set={set} />
            <Radio id="194" lab="Residiu em algum outro país?" req values={values} set={set} />
            {outroResid && (
              <ResidenceBlock countryId="213" statusId="207" fromId="208" toId="209" values={values} set={set} />
            )}

            <p className={sec}>Local de solicitação</p>
            <Radio id="211" lab="O país ou território de onde você está fazendo a solicitação é o mesmo do seu país ou território de residência atual?" req values={values} set={set} />
            {solicitacaoDif && (
              <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                <Field id="206" lab="País ou território" req values={values} set={set} />
                <Sel id="214" lab="Status" req opts={STATUS_OPTS} values={values} set={set} />
                {statusNeedsDates('214') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field id="215" lab="De:" req type="date" values={values} set={set} />
                    <Field id="216" lab="Até:" req type="date" values={values} set={set} />
                  </div>
                )}
              </div>
            )}
          </>
        )}

        <p className={sec}>Estado civil e cônjuge</p>
        <Sel id="133" lab="Estado civil" req opts={EC_OPTS} values={values} set={set} />
        {casado && (
          <>
            <Field id="217" lab="Data em que se casou ou iniciou a união estável" req type="date" values={values} set={set} />
            <NameField id="219" lab="Nome do cônjuge ou parceiro(a) em união estável atual:" req values={values} set={set} />
            <Field id="593" lab="Cidade de nascimento do cônjuge" req values={values} set={set} />
            <Radio id="594" lab="Seu cônjuge acompanhará você na viagem ao Canadá?" req values={values} set={set} />
          </>
        )}
        <Radio id="220" lab="Você já foi casado(a) ou teve uma união estável anteriormente?" req values={values} set={set} />
        {jaFoiCasado && (
          <>
            <NameField id="124" lab="Nome do(a) ex-cônjuge ou ex-parceiro(a):" req values={values} set={set} />
            <Field id="222" lab="Data de Nascimento do(a) ex-cônjuge" req type="date" values={values} set={set} />
            <Sel id="221" lab="Tipo de Relacionamento" req opts={['União estavel', 'Casado']} values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="224" lab="De:" req type="date" values={values} set={set} />
              <Field id="223" lab="Até:" req type="date" values={values} set={set} />
            </div>
          </>
        )}

        <p className={sec}>Idiomas</p>
        <Field id="227" lab="Língua Nativa" values={values} set={set} />
        <Sel id="547" lab="Você é capaz de se comunicar em inglês e/ou francês?" req
          opts={['Inglês', 'Francês', 'Ambas', 'Nenhuma']} values={values} set={set} />
        <RadioOpts id="55" lab="Em qual idioma você se sente mais à vontade?" opts={['Inglês', 'Francês']} values={values} set={set} />
        <Radio id="57" lab="Você já fez um teste de proficiência em inglês ou francês com uma agência designada?" req values={values} set={set} />

        {navBtns}
      </form>
    );
  }

  // ── STEP 4: DOCUMENTAÇÃO ──────────────────────────────────────────────
  if (step === 4) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Passaporte</p>
        <Field id="59" lab="Número do passaporte" req values={values} set={set} />
        <Field id="391" lab="País de emissão do passaporte" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="549" lab="Data de emissão" req type="date" values={values} set={set} />
          <Field id="550" lab="Data de expiração" req type="date" values={values} set={set} />
        </div>
        <p className={sec}>RG</p>
        <Field id="63" lab="Número do RG" req values={values} set={set} />
        <Field id="64" lab="Data de emissão do RG" req type="date" values={values} set={set} />
        {navBtns}
      </form>
    );
  }

  // ── STEP 5: ENDEREÇO E CONTATO ────────────────────────────────────────
  if (step === 5) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Address id="552" lab="Endereço residencial" req values={values} set={set} />
        <Radio id="554" lab="O seu endereço de correspondência é o mesmo que o seu endereço residencial?" req values={values} set={set} />
        {corrEndDif && (
          <Address id="553" lab="Endereço de correspondência" req values={values} set={set} />
        )}
        <Field id="255" lab="Telefone celular" req type="tel" values={values} set={set} />
        <Field id="656" lab="E-mail" req type="email" values={values} set={set} />
        {navBtns}
      </form>
    );
  }

  // ── STEP 6: DETALHES DA VIAGEM ────────────────────────────────────────
  if (step === 6) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Detalhes da visita</p>
        <Sel id="556" lab="Motivo principal da viagem" req
          opts={['Visita', 'Turismo', 'Negócios', 'Estudos de Curta Duração', 'Estudante Retornando', 'Trabalhador Retornando', 'Super Visa: Para Pais ou Avós', 'Outro', 'Visita a Familiares']}
          values={values} set={set} />
        {motOutro && (
          <Field id="557" lab="Outro: especifique" req values={values} set={set} />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="126" lab="Data planejada de entrada no Canadá" req type="date" values={values} set={set} />
          <Field id="262" lab="Data planejada de saída do Canadá" req type="date" values={values} set={set} />
        </div>
        <Field id="130" lab="Fundos disponíveis para a viagem (R$)" req values={values} set={set} />

        <p className={sec}>Pessoa ou instituição a ser visitada</p>
        <Field id="562" lab="Nome" req values={values} set={set} />
        <Field id="563" lab="Relação comigo" values={values} set={set} />
        <Address id="561" lab="Endereço no Canadá" values={values} set={set} />

        <Radio id="565" lab="Você vai visitar alguma outra pessoa ou instituição?" req values={values} set={set} />
        {visitaOutra && (
          <>
            <Field id="566" lab="Nome" req values={values} set={set} />
            <Field id="567" lab="Relação comigo" values={values} set={set} />
            <Address id="568" lab="Endereço no Canadá" values={values} set={set} />
          </>
        )}
        {navBtns}
      </form>
    );
  }

  // ── STEP 7: EDUCAÇÃO ──────────────────────────────────────────────────
  if (step === 7) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Radio id="128" lab="Você já teve alguma educação pós-secundária (universidade, faculdade ou curso técnico/profissionalizante)?" req values={values} set={set} />
        {temEducacao && (
          <div className="space-y-4 pl-4 border-l-2 border-gray-100">
            <Field id="265" lab="Área de estudo / Formação" req values={values} set={set} />
            <Field id="266" lab="Instituição de Ensino" req values={values} set={set} />
            <Field id="267" lab="Cidade / Estado" req values={values} set={set} />
            <Field id="269" lab="País" req values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="260" lab="Data de Início" req type="date" values={values} set={set} />
              <Field id="263" lab="Data de Conclusão" req type="date" values={values} set={set} />
            </div>
          </div>
        )}
        {navBtns}
      </form>
    );
  }

  // ── STEP 8: EMPREGO ───────────────────────────────────────────────────
  if (step === 8) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Ocupação atual</p>
        <Field id="277" lab="Ocupação atual" req values={values} set={set} />
        <Field id="276" lab="Nome da Empresa / Empregador" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="278" lab="Cidade / Estado" req values={values} set={set} />
          <Field id="279" lab="País" req values={values} set={set} />
        </div>
        <Field id="270" lab="Data de Início" req type="date" values={values} set={set} />

        <p className={sec}>Emprego anterior #1</p>
        <p className="text-xs text-muted -mt-2">Forneça seu histórico de emprego dos últimos 10 anos, incluindo cargos públicos.</p>
        <Field id="281" lab="Ocupação" values={values} set={set} />
        <Field id="282" lab="Nome da Empresa / Empregador" values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="283" lab="Cidade / Estado" values={values} set={set} />
          <Field id="284" lab="País" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="287" lab="Data de Início" type="date" values={values} set={set} />
          <Field id="288" lab="Data de Conclusão" type="date" values={values} set={set} />
        </div>

        <p className={sec}>Emprego anterior #2</p>
        <Field id="289" lab="Ocupação" values={values} set={set} />
        <Field id="290" lab="Nome da Empresa / Empregador" values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="286" lab="Cidade / Estado" values={values} set={set} />
          <Field id="285" lab="País" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="292" lab="Data de Início" type="date" values={values} set={set} />
          <Field id="291" lab="Data de Conclusão" type="date" values={values} set={set} />
        </div>

        {navBtns}
      </form>
    );
  }

  // ── STEP 9: FAMÍLIA ───────────────────────────────────────────────────
  if (step === 9) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}

        {naoSolteiro && (
          <>
            <p className={sec}>Mãe</p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="309" lab="Nome" req values={values} set={set} />
                <Field id="308" lab="Sobrenome" req values={values} set={set} />
              </div>
              <Sel id="596" lab="Estado civil" req opts={EC_OPTS} values={values} set={set} />
              <Field id="311" lab="Data de Nascimento" req type="date" values={values} set={set} />
              <Field id="317" lab="País de Nascimento" req values={values} set={set} />
              <Field id="313" lab="Endereço atual" req values={values} set={set} />
              <Field id="595" lab="Ocupação atual" req values={values} set={set} />
              <Radio id="307" lab="Acompanhará você ao Canadá?" req values={values} set={set} />
            </div>

            <p className={sec}>Pai</p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="320" lab="Nome" req values={values} set={set} />
                <Field id="318" lab="Sobrenome" req values={values} set={set} />
              </div>
              <Sel id="597" lab="Estado civil" req opts={EC_OPTS} values={values} set={set} />
              <Field id="319" lab="Data de Nascimento" req type="date" values={values} set={set} />
              <Field id="598" lab="País de Nascimento" req values={values} set={set} />
              <Field id="322" lab="Endereço atual" req values={values} set={set} />
              <Field id="321" lab="Ocupação atual" req values={values} set={set} />
              <Radio id="334" lab="Acompanhará você ao Canadá?" req values={values} set={set} />
            </div>

            <Radio id="386" lab="Você possui filhos?" req values={values} set={set} />
          </>
        )}

        {temFilhos && (
          <>
            <p className={sec}>Filho #1</p>
            <FilhoBlock
              ids={{ nome: '343', sob: '339', ec: '599', nasc: '344', pais: '600', rel: '341', end: '601', ocup: '602', acomp: '603' }}
              parenteId="341"
              values={values} set={set} />
            <Radio id="387" lab="Algum outro filho(a)?" req values={values} set={set} />
          </>
        )}

        {maisFilho1 && (
          <>
            <p className={sec}>Filho #2</p>
            <FilhoBlock
              ids={{ nome: '356', sob: '355', ec: '605', nasc: '357', pais: '361', rel: '606', end: '611', ocup: '608', acomp: '609' }}
              parenteId="606"
              values={values} set={set} />
            <Radio id="610" lab="Algum outro filho(a)?" req values={values} set={set} />
          </>
        )}

        {maisFilho2 && (
          <>
            <p className={sec}>Filho #3</p>
            <FilhoBlock
              ids={{ nome: '612', sob: '613', ec: '614', nasc: '615', pais: '616', rel: '620', end: '622', ocup: '624', acomp: '626' }}
              parenteId="620"
              values={values} set={set} />
            <Radio id="628" lab="Algum outro filho(a)?" req values={values} set={set} />
          </>
        )}

        {maisFilho3 && (
          <>
            <p className={sec}>Filho #4</p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="368" lab="Nome" req values={values} set={set} />
                <Field id="365" lab="Sobrenome" req values={values} set={set} />
              </div>
              <Sel id="617" lab="Estado civil" req opts={EC_OPTS} values={values} set={set} />
              <Field id="618" lab="Data de Nascimento" req type="date" values={values} set={set} />
              <Field id="619" lab="País de Nascimento" req values={values} set={set} />
              <Sel id="621" lab="Parentesco com você" req opts={FILHO_OPTS} values={values} set={set} />
              <Field id="623" lab="Endereço atual" req values={values} set={set} />
              <Field id="625" lab="Ocupação atual" req values={values} set={set} />
              <Radio id="627" lab="Acompanhará você ao Canadá?" req values={values} set={set} />
            </div>
          </>
        )}

        {!naoSolteiro && values['133'] === '' && (
          <p className="text-sm text-muted">Preencha o estado civil no Passo 3 para acessar as informações familiares.</p>
        )}
        {values['133'] === 'Solteiro' && (
          <p className="text-sm text-muted">As informações familiares não são obrigatórias para solicitantes solteiros.</p>
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 10: ANTECEDENTES / SEGURANÇA ────────────────────────────────
  return (
    <form onSubmit={onStepSubmit} className="space-y-6">
      {progress}
      <p className="text-sm text-muted leading-relaxed">
        Responda todas as perguntas abaixo com atenção. Em caso de resposta &quot;Sim&quot;, forneça os detalhes solicitados.
      </p>

      <p className={sec}>Saúde</p>
      <Radio id="92" lab="Nos últimos dois anos, você ou algum membro da sua família teve tuberculose pulmonar ou esteve em contato próximo com alguém com tuberculose?" req values={values} set={set} />
      <Radio id="579" lab="Você tem algum distúrbio físico ou mental que exija serviços sociais e/ou de saúde, além de medicação, durante sua estadia no Canadá?" req values={values} set={set} />
      {(values['92'] === 'Sim' || values['579'] === 'Sim') && (
        <Textarea id="93" lab="Forneça detalhes" req values={values} set={set} />
      )}

      <p className={sec}>Histórico de imigração</p>
      <Radio id="580" lab="Você já permaneceu no Canadá além da validade do seu status, frequentou escola sem autorização ou trabalhou sem autorização?" req values={values} set={set} />
      <Radio id="581" lab="Você já teve visto ou permissão negados, entrada recusada ou foi obrigado(a) a deixar o Canadá ou qualquer outro país?" req values={values} set={set} />
      <Radio id="582" lab="Você já solicitou entrada ou permanência no Canadá anteriormente?" req values={values} set={set} />
      {(values['580'] === 'Sim' || values['581'] === 'Sim' || values['582'] === 'Sim') && (
        <Textarea id="578" lab="Forneça detalhes" req values={values} set={set} />
      )}

      <p className={sec}>Antecedentes criminais</p>
      <Radio id="584" lab="Você já cometeu, foi preso, acusado ou condenado por qualquer infração criminal em algum país ou território?" req values={values} set={set} />
      {values['584'] === 'Sim' && (
        <Textarea id="577" lab="Forneça detalhes" req values={values} set={set} />
      )}

      <p className={sec}>Serviço militar e associações</p>
      <Radio id="583" lab="Você serviu em alguma unidade militar, milícia, defesa civil, organização de segurança ou força policial?" req values={values} set={set} />
      {values['583'] === 'Sim' && (
        <Textarea id="576" lab="Forneça as datas de serviço e os países ou territórios onde serviu" req values={values} set={set} />
      )}
      <Radio id="585" lab="Você é, ou já foi, membro ou teve alguma associação com partido político, grupo ou organização que tenha praticado ou defendido o uso da violência para alcançar objetivos políticos ou religiosos?" req values={values} set={set} />
      <Radio id="586" lab="Você já testemunhou ou participou de maus-tratos a prisioneiros ou civis, saques ou profanação de locais religiosos?" req values={values} set={set} />

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          <p className="font-semibold mb-1">Erro ao enviar o formulário:</p>
          <p className="font-mono text-xs break-all">{errorMsg}</p>
        </div>
      )}

      {navBtns}
    </form>
  );
}
