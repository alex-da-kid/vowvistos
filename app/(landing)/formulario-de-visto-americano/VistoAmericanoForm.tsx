'use client';

import { useState } from 'react';

type Values = Record<string, string>;

const STEP_NAMES = [
  'Termos', 'Informações Pessoais', 'Endereço e Telefone',
  'Passaporte', 'Viagem', 'Companheiros de Viagem',
  'Viagens Anteriores aos EUA', 'Parentes', 'Trabalho e Educação', 'Segurança',
];

const inp = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition';
const lbl = 'block text-xs font-heading font-semibold text-dark mb-1.5';
const sec = 'text-base font-heading font-bold text-dark mt-8 mb-3 pt-4 border-t border-gray-100';

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
        <input required={req} placeholder="Rua / Linha 1" value={values[`${id}.1`] ?? ''}
          onChange={e => set(`${id}.1`, e.target.value)} className={inp} />
        <input placeholder="Bairro e complemento (Linha 2)" value={values[`${id}.2`] ?? ''}
          onChange={e => set(`${id}.2`, e.target.value)} className={inp} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input required={req} placeholder="Cidade" value={values[`${id}.3`] ?? ''}
            onChange={e => set(`${id}.3`, e.target.value)} className={inp} />
          <input required={req} placeholder="Estado / Província" value={values[`${id}.4`] ?? ''}
            onChange={e => set(`${id}.4`, e.target.value)} className={inp} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input placeholder="Código Postal" value={values[`${id}.5`] ?? ''}
            onChange={e => set(`${id}.5`, e.target.value)} className={inp} />
          <input required={req} placeholder="País" value={values[`${id}.6`] ?? ''}
            onChange={e => set(`${id}.6`, e.target.value)} className={inp} />
        </div>
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

function SecQ({ id, detId, lab, values, set }: {
  id: string; detId: string; lab: string;
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <Radio id={id} lab={lab} req values={values} set={set} />
      {values[id] === 'Sim' && (
        <Textarea id={detId} lab="Forneça detalhes" req values={values} set={set} />
      )}
    </div>
  );
}

export default function VistoAmericanoForm() {
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
        body: JSON.stringify({ formId: 6, fieldValues: values }),
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
    if (step < 10) {
      goNext();
    } else {
      handleSubmit();
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

  // Derived conditions
  const estadoCivil = values['15'] ?? '';
  const casado = ['Casado(a)', 'União Estável', 'Separação Judicial'].includes(estadoCivil);
  const viuvo = estadoCivil === 'Viúvo(a)';
  const divorciado = estadoCivil === 'Divorciado(a)';
  const outroEC = estadoCivil === 'Outro';
  const trabalhaMostrar = !!values['530'] && !['Dona de Casa', 'Desempregado', 'Aposentado'].includes(values['530']);

  // Progress bar
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

  // Nav buttons (rendered inside each <form>)
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
    const accepted = !!values['1.1'];
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
            onChange={e => set('1.1', e.target.checked
              ? 'Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação obtenção do visto consular americano *'
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

  // ── STEP 2: INFORMAÇÕES PESSOAIS ──────────────────────────────────────
  if (step === 2) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Sel id="3" lab="Local de entrevista" req
          opts={['Brasilia', 'Porto Alegre', 'Recife', 'Rio de Janeiro', 'São Paulo']}
          values={values} set={set} />

        <p className={sec}>Dados pessoais</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="378" lab="Nome" req desc="Exatamente como consta no passaporte." values={values} set={set} />
          <Field id="5" lab="Sobrenome" req desc="Exatamente como consta no passaporte." values={values} set={set} />
        </div>
        <Field id="379" lab="Nome completo no alfabeto nativo"
          desc="Ex.: caracteres russos ou chineses. Deixe em branco se não aplicável." values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="8" lab="CPF" req values={values} set={set} />
          <Field id="7" lab="RG (ou RNE)" req values={values} set={set} />
        </div>
        <Sel id="729" lab="Sexo" req opts={['Masculino', 'Feminino']} values={values} set={set} />
        <Radio id="10" lab="Você já utilizou outros nomes (solteiro(a), religioso, profissional, apelido, etc.)?" req values={values} set={set} />
        {values['10'] === 'Sim' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="12" lab="Outros sobrenomes utilizados" req values={values} set={set} />
            <Field id="13" lab="Outros nomes utilizados" req values={values} set={set} />
          </div>
        )}

        <p className={sec}>Estado civil</p>
        <Sel id="15" lab="Estado Civil" req
          opts={['Casado(a)', 'União Estável', 'Solteiro(a)', 'Viúvo(a)', 'Divorciado(a)', 'Separação Judicial', 'Outro']}
          values={values} set={set} />

        {casado && (
          <>
            <p className={sec}>Dados do cônjuge</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="380" lab="Nome do cônjuge" req values={values} set={set} />
              <Field id="17" lab="Sobrenome do cônjuge" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="384" lab="Data de nascimento do cônjuge" req type="date" values={values} set={set} />
              <Field id="387" lab="Nacionalidade do cônjuge" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="388" lab="Cidade de nascimento do cônjuge" req values={values} set={set} />
              <Field id="389" lab="Estado de nascimento do cônjuge" req values={values} set={set} />
            </div>
            <Field id="391" lab="País de nascimento do cônjuge" req values={values} set={set} />
            <Sel id="392" lab="Endereço do cônjuge" req
              opts={['Mesmo que endereço residencial', 'Mesmo que endereço de correspondência', 'Outro']}
              values={values} set={set} />
            {values['392'] === 'Outro' && (
              <Textarea id="638" lab="Forneça endereço completo do cônjuge" req values={values} set={set} />
            )}
          </>
        )}

        {viuvo && (
          <>
            <p className={sec}>Dados do cônjuge falecido</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="383" lab="Nome do cônjuge falecido" req values={values} set={set} />
              <Field id="382" lab="Sobrenome do cônjuge falecido" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="381" lab="Data de nascimento do cônjuge falecido" req type="date" values={values} set={set} />
              <Field id="21" lab="Nacionalidade do cônjuge falecido" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="22" lab="Cidade de nascimento" req values={values} set={set} />
              <Field id="654" lab="Estado de nascimento" req values={values} set={set} />
            </div>
            <Field id="394" lab="País de nascimento do cônjuge falecido" req values={values} set={set} />
          </>
        )}

        {divorciado && (
          <>
            <p className={sec}>Dados do ex-cônjuge</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="396" lab="Nome do ex-cônjuge" req values={values} set={set} />
              <Field id="395" lab="Sobrenome do ex-cônjuge" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="398" lab="Data de nascimento do ex-cônjuge" req type="date" values={values} set={set} />
              <Field id="399" lab="Nacionalidade do ex-cônjuge" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="401" lab="Cidade de nascimento" req values={values} set={set} />
              <Field id="400" lab="Estado de nascimento" req values={values} set={set} />
            </div>
            <Field id="402" lab="País de nascimento do ex-cônjuge" req values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="633" lab="Data de início do casamento" req type="date" values={values} set={set} />
              <Field id="635" lab="Data de término do casamento" req type="date" values={values} set={set} />
            </div>
            <Field id="636" lab="País onde ocorreu o término do casamento" req values={values} set={set} />
            <Textarea id="659" lab="Motivo do término do casamento" req values={values} set={set} />
          </>
        )}

        {outroEC && (
          <Textarea id="658" lab="Forneça informações sobre seu estado civil" req values={values} set={set} />
        )}

        <p className={sec}>Nascimento e nacionalidade</p>
        <Field id="403" lab="Data de nascimento" req type="date" values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="404" lab="Cidade de nascimento" req values={values} set={set} />
          <Field id="405" lab="Estado de nascimento" req values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="406" lab="País de nascimento" req values={values} set={set} />
          <Field id="655" lab="Nacionalidade (país de origem)" req values={values} set={set} />
        </div>

        <Radio id="408" lab="Você possui ou já possuía alguma nacionalidade diferente da indicada acima?" req values={values} set={set} />
        {values['408'] === 'Sim' && (
          <>
            <Field id="409" lab="Qual o outro país que possui ou já possuiu nacionalidade" req values={values} set={set} />
            <Radio id="410" lab="Você possui um passaporte desse país?" req values={values} set={set} />
            {values['410'] === 'Sim' && (
              <Field id="411" lab="Forneça o número do passaporte" req values={values} set={set} />
            )}
          </>
        )}

        <Radio id="412" lab="Você é residente permanente de algum outro país?" req values={values} set={set} />
        {values['412'] === 'Sim' && (
          <Field id="413" lab="País que possui status de residente permanente" req values={values} set={set} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="414" lab="U.S. Social Security Number" desc="Se aplicável" values={values} set={set} />
          <Field id="415" lab="U.S. Taxpayer ID Number" desc="Se aplicável" values={values} set={set} />
        </div>

        {navBtns}
      </form>
    );
  }

  // ── STEP 3: ENDEREÇO E TELEFONE ────────────────────────────────────────
  if (step === 3) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Address id="428" lab="Endereço residencial" req values={values} set={set} />
        <Radio id="417" lab="Seu endereço de correspondência é o mesmo que o residencial?" req values={values} set={set} />
        {values['417'] === 'Não' && (
          <Address id="430" lab="Endereço de correspondência" req values={values} set={set} />
        )}

        <p className={sec}>Telefones</p>
        <Field id="422" lab="Telefone Principal" req type="tel" values={values} set={set} />
        <Field id="423" lab="Telefone Secundário" type="tel" values={values} set={set} />
        <Radio id="425" lab="Você usou algum outro número de telefone nos últimos cinco anos?" req values={values} set={set} />
        {values['425'] === 'Sim' && (
          <Field id="639" lab="Números anteriores" req type="tel" values={values} set={set} />
        )}

        <p className={sec}>E-mail e redes sociais</p>
        <Field id="431" lab="Endereço de E-mail" req type="email" values={values} set={set} />
        <Radio id="433" lab="Você usou algum outro e-mail nos últimos cinco anos?" req values={values} set={set} />
        {values['433'] === 'Sim' && (
          <Field id="640" lab="E-mail anteriores" req type="email" values={values} set={set} />
        )}
        <Radio id="721" lab="Você utilizou alguma rede social nos últimos 5 anos?" values={values} set={set} />
        {values['721'] === 'Sim' && (
          <DynamicList id="436" lab="Redes Sociais" req
            cols={['Plataforma', 'Identificador / Usuário']} values={values} set={set} />
        )}
        <Radio id="696" lab="Deseja fornecer informações sobre sua presença em outros sites ou aplicativos usados nos últimos cinco anos para criar ou compartilhar conteúdo?" req values={values} set={set} />
        {values['696'] === 'Sim' && (
          <Textarea id="697" lab="Forneça detalhes" req values={values} set={set} />
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 4: PASSAPORTE ────────────────────────────────────────────────
  if (step === 4) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Sel id="439" lab="Tipo de passaporte" req opts={['Comum', 'Oficial', 'Diplomático']} values={values} set={set} />
        <Field id="441" lab="Número do passaporte" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="442" lab="Cidade onde foi emitido" req values={values} set={set} />
          <Field id="660" lab="Estado onde foi emitido" req values={values} set={set} />
        </div>
        <Field id="445" lab="País onde foi emitido" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="446" lab="Data de emissão" req type="date" values={values} set={set} />
          <Field id="447" lab="Data de validade" req type="date" values={values} set={set} />
        </div>

        <Radio id="449" lab="Você já teve algum passaporte perdido, roubado ou extraviado?" req values={values} set={set} />
        {values['449'] === 'Sim' && (
          <>
            <Field id="450" lab="Número do passaporte perdido/roubado (se souber)" req values={values} set={set} />
            <Field id="451" lab="País e autoridade que emitiu o passaporte" req values={values} set={set} />
            <Textarea id="452" lab="Explique o ocorrido" req values={values} set={set} />
          </>
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 5: VIAGEM ────────────────────────────────────────────────────
  if (step === 5) {
    const paga = values['674'] ?? '';
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Sel id="453" lab="Propósito da viagem" req
          opts={['Turismo', 'Estudo', 'Trabalho', 'Negócios']} values={values} set={set} />
        <Radio id="455" lab="Você já fez planos específicos de viagem?" req values={values} set={set} />

        {values['455'] === 'Sim' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="456" lab="Data de chegada nos EUA" req type="date" values={values} set={set} />
              <Field id="457" lab="Voo de chegada" req values={values} set={set} />
            </div>
            <Field id="458" lab="Cidade de chegada" req values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="459" lab="Data de partida dos EUA" req type="date" values={values} set={set} />
              <Field id="460" lab="Voo de partida" req values={values} set={set} />
            </div>
            <Field id="461" lab="Cidade de partida" req values={values} set={set} />
          </>
        )}

        {values['455'] === 'Não' && (
          <>
            <Field id="699" lab="Data proposta de viagem" req type="date" values={values} set={set} />
            <Field id="663" lab="Quanto tempo pretende ficar" req values={values} set={set} />
          </>
        )}

        <p className={sec}>Hospedagem nos EUA</p>
        <Field id="723" lab="Endereço Linha 1" values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="727" lab="Cidade" req values={values} set={set} />
          <Field id="726" lab="Estado" req values={values} set={set} />
        </div>
        <Field id="725" lab="Código Postal" values={values} set={set} />

        <p className={sec}>Contato nos EUA</p>
        <Radio id="464" lab="Você vai visitar alguma pessoa ou organização enquanto estiver nos EUA?" req values={values} set={set} />
        {values['464'] === 'Sim' && (
          <>
            <Field id="466" lab="Nome completo da pessoa ou organização nos EUA" req values={values} set={set} />
            <Sel id="468" lab="Relação com você" req opts={['Pessoa', 'Organização']} values={values} set={set} />
            <Field id="664" lab="Endereço Linha 1" req values={values} set={set} />
            <Field id="670" lab="Endereço Linha 2" values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="669" lab="Cidade" req values={values} set={set} />
              <Field id="668" lab="Estado" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="667" lab="Código Postal" req values={values} set={set} />
              <Field id="666" lab="Telefone" req type="tel" values={values} set={set} />
            </div>
            <Field id="665" lab="E-mail" req type="email" values={values} set={set} />
          </>
        )}

        <p className={sec}>Custeio da viagem</p>
        <Sel id="674" lab="Quem está custeando a sua viagem?" req
          opts={['Eu mesmo', 'Outra pessoa', 'Empresa/Organização']} values={values} set={set} />

        {paga === 'Outra pessoa' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="705" lab="Nome" req values={values} set={set} />
              <Field id="703" lab="Sobrenome" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="704" lab="Telefone" req type="tel" values={values} set={set} />
              <Field id="706" lab="E-mail" req type="email" values={values} set={set} />
            </div>
            <Sel id="707" lab="Relação com você" req
              opts={['Filho', 'Pais', 'Amigo', 'Cônjuge', 'Outro parente', 'Outro']} values={values} set={set} />
            <Radio id="708" lab="O endereço dessa pessoa é o mesmo que o seu?" req values={values} set={set} />
            {values['708'] === 'Não' && (
              <Textarea id="709" lab="Informe o endereço da pessoa" req values={values} set={set} />
            )}
          </>
        )}

        {paga === 'Empresa/Organização' && (
          <>
            <Field id="710" lab="Nome da empresa/organização" req values={values} set={set} />
            <Field id="678" lab="Relação com você" req values={values} set={set} />
            <Field id="677" lab="Telefone" req type="tel" values={values} set={set} />
            <Field id="676" lab="Endereço Linha 1" req values={values} set={set} />
            <Field id="712" lab="Endereço Linha 2" values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="713" lab="Cidade" req values={values} set={set} />
              <Field id="716" lab="Estado" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="715" lab="CEP" req values={values} set={set} />
              <Field id="714" lab="País" req values={values} set={set} />
            </div>
          </>
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 6: COMPANHEIROS DE VIAGEM ────────────────────────────────────
  if (step === 6) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Radio id="484" lab="Há outras pessoas viajando com você?" req values={values} set={set} />
        {values['484'] === 'Sim' && (
          <>
            <DynamicList id="489" lab="Pessoas que estão viajando com você" req
              cols={['Nome', 'Sobrenome', 'Relação', 'Nacionalidade']} values={values} set={set} />
            <Field id="490" lab="Nome do grupo com o qual você está viajando (se aplicável)" values={values} set={set} />
          </>
        )}
        {navBtns}
      </form>
    );
  }

  // ── STEP 7: VIAGENS ANTERIORES AOS EUA ───────────────────────────────
  if (step === 7) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Radio id="491" lab="Você já esteve nos EUA?" req values={values} set={set} />
        {values['491'] === 'Sim' && (
          <>
            <DynamicList id="496" lab="Forneça informações sobre suas últimas visitas aos EUA (até 5)" req
              cols={['Data de chegada', 'Data de saída', 'Duração', 'Cidades / Estados visitados']} values={values} set={set} />
            <Radio id="497" lab="Você possui ou já possuiu uma carteira de motorista dos EUA?" req values={values} set={set} />
            {values['497'] === 'Sim' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="498" lab="Dados da carteira de motorista" values={values} set={set} />
                <Field id="499" lab="Estado de emissão" req values={values} set={set} />
              </div>
            )}
          </>
        )}

        <p className={sec}>Visto americano anterior</p>
        <Radio id="501" lab="Você já teve um visto americano antes?" req values={values} set={set} />
        {values['501'] === 'Sim' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="502" lab="Data de emissão do último visto" req type="date" values={values} set={set} />
              <Field id="503" lab="Data de validade do último visto" req type="date" values={values} set={set} />
            </div>
            <Field id="504" lab="Número do visto" req values={values} set={set} />
            <Radio id="505" lab="Você está solicitando o mesmo tipo de visto?" values={values} set={set} />
            <Radio id="506" lab="Você está solicitando no mesmo país ou local onde o visto foi emitido, e esse é seu local principal de residência?" req values={values} set={set} />
            <Radio id="507" lab="Você já fez a identificação da impressão digital dos 10 dedos?" req values={values} set={set} />
            <Radio id="508" lab="Você já teve um visto americano roubado ou perdido?" req values={values} set={set} />
            {values['508'] === 'Sim' && (
              <Textarea id="510" lab="Forneça o ano e como o visto foi perdido ou roubado" req values={values} set={set} />
            )}
            <Radio id="509" lab="Você já teve um visto americano cancelado ou revogado?" req values={values} set={set} />
            {values['509'] === 'Sim' && (
              <Textarea id="511" lab="Forneça detalhes do ocorrido" req values={values} set={set} />
            )}
          </>
        )}

        <Radio id="512" lab="Você já teve um visto americano recusado, teve a entrada no país recusada, ou retirou sua solicitação de admissão em um posto de entrada?" req values={values} set={set} />
        {values['512'] === 'Sim' && (
          <Textarea id="513" lab="Detalhes do ocorrido" req values={values} set={set} />
        )}

        <Radio id="514" lab="Alguém já solicitou uma petição de imigração em seu nome no Departamento de Serviços de Cidadania e Imigração dos EUA?" values={values} set={set} />
        {values['514'] === 'Sim' && (
          <Textarea id="515" lab="Detalhes do ocorrido" values={values} set={set} />
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 8: PARENTES ──────────────────────────────────────────────────
  if (step === 8) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Dados do pai</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="642" lab="Nome do pai" values={values} set={set} />
          <Field id="641" lab="Sobrenome do pai" values={values} set={set} />
        </div>
        <Field id="518" lab="Data de nascimento do pai" type="date" values={values} set={set} />
        <Radio id="519" lab="Seu pai está nos EUA?" values={values} set={set} />
        {values['519'] === 'Sim' && (
          <Sel id="524" lab="Status do pai nos EUA"
            opts={['Cidadão Americano', 'Residente Americano', 'Não-imigrante', 'Outro']}
            values={values} set={set} />
        )}

        <p className={sec}>Dados da mãe</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="644" lab="Nome da mãe" values={values} set={set} />
          <Field id="643" lab="Sobrenome da mãe" values={values} set={set} />
        </div>
        <Field id="522" lab="Data de nascimento da mãe" type="date" values={values} set={set} />
        <Radio id="523" lab="Sua mãe está nos EUA?" values={values} set={set} />
        {values['523'] === 'Sim' && (
          <Sel id="520" lab="Status da mãe nos EUA"
            opts={['Cidadão', 'Residente', 'Não imigrante', 'Outro']}
            values={values} set={set} />
        )}

        <p className={sec}>Outros parentes nos EUA</p>
        <Radio id="525" lab="Você possui algum parente imediato nos EUA (excluindo pais)?" req values={values} set={set} />
        {values['525'] === 'Sim' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="646" lab="Nome do parente" req values={values} set={set} />
              <Field id="645" lab="Sobrenome do parente" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Sel id="528" lab="Relação com você" req opts={['Cônjuge', 'Noivo(a)', 'Filho(a)', 'Irmão(ã)']} values={values} set={set} />
              <Sel id="647" lab="Situação nos EUA" req
                opts={['Cidadão americano', 'Residente permanente (Greencard)', 'Não-imigrante', 'Outro/Não sei']}
                values={values} set={set} />
            </div>
          </>
        )}

        <Radio id="529" lab="Você tem outros parentes nos Estados Unidos?" req values={values} set={set} />

        {navBtns}
      </form>
    );
  }

  // ── STEP 9: TRABALHO E EDUCAÇÃO ───────────────────────────────────────
  if (step === 9) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Ocupação atual</p>
        <Sel id="530" lab="Área de atuação" req opts={[
          'Agricultura', 'Artista/Intérprete', 'Negócios', 'Comunicações', 'Ciência da Computação',
          'Serviços Culinários/Alimentícios', 'Educação', 'Engenharia', 'Governo', 'Dona de Casa',
          'Profissão Jurídica', 'Médico/Saúde', 'Militar', 'Ciências Naturais', 'Desempregado',
          'Ciências Físicas', 'Vocação Religiosa', 'Pesquisa', 'Aposentado', 'Ciências Sociais',
          'Estudante', 'Outro',
        ]} values={values} set={set} />
        {values['530'] === 'Outro' && (
          <Textarea id="536" lab="Explicar" req values={values} set={set} />
        )}

        {trabalhaMostrar && (
          <>
            <Field id="532" lab="Empregador ou instituição de ensino atual" req values={values} set={set} />
            <Field id="689" lab="Endereço (Linha 1)" req values={values} set={set} />
            <Field id="688" lab="Endereço (Linha 2)" values={values} set={set} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="687" lab="Cidade" req values={values} set={set} />
              <Field id="686" lab="Estado" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="685" lab="Código postal" req values={values} set={set} />
              <Field id="684" lab="Telefone" req type="tel" values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="692" lab="Data de contratação" req type="date" values={values} set={set} />
              <Field id="682" lab="Renda líquida mensal (R$)" req values={values} set={set} />
            </div>
            <Textarea id="690" lab="Descreva brevemente suas atividades e responsabilidades" req values={values} set={set} />
          </>
        )}

        <p className={sec}>Emprego anterior</p>
        <Radio id="538" lab="Você esteve empregado nos últimos cinco anos?" req values={values} set={set} />
        {values['538'] === 'Sim' && (
          <DynamicList id="539" lab="Empregos anteriores" req
            cols={['Empregador', 'Cargo', 'Telefone', 'País', 'Data início', 'Data fim']} values={values} set={set} />
        )}

        <p className={sec}>Educação</p>
        <Radio id="540" lab="Você frequentou alguma instituição de ensino médio e/ou superior?" req values={values} set={set} />
        {values['540'] === 'Sim' && (
          <DynamicList id="541" lab="Instituições de ensino" req
            cols={['Nome da instituição', 'Endereço', 'Tipo de curso', 'Data início', 'Data fim']} values={values} set={set} />
        )}

        <p className={sec}>Idiomas e grupos</p>
        <DynamicList id="546" lab="Idiomas que domina" req cols={['Idioma']} values={values} set={set} />

        <Radio id="542" lab="Você pertence a algum clã ou tribo?" req values={values} set={set} />
        {values['542'] === 'Sim' && (
          <Field id="543" lab="Nome do clã ou tribo" req values={values} set={set} />
        )}

        <Radio id="547" lab="Você pertence, contribuiu ou trabalhou para alguma organização profissional, social ou de caridade?" req values={values} set={set} />
        {values['547'] === 'Sim' && (
          <DynamicList id="548" lab="Organizações" req
            cols={['Nome', 'Natureza', 'Data início', 'Data fim', 'Cargo/Função']} values={values} set={set} />
        )}

        <p className={sec}>Viagens internacionais</p>
        <Radio id="544" lab="Você viajou para algum outro país nos últimos cinco anos?" req values={values} set={set} />
        {values['544'] === 'Sim' && (
          <DynamicList id="545" lab="Países visitados" req cols={['País', 'Ano da visita']} values={values} set={set} />
        )}

        <p className={sec}>Habilidades e serviço militar</p>
        <Radio id="549" lab="Você possui habilidade ou treinamento específico com armas de fogo, explosivos, experiências nucleares, biológicas ou químicas?" req values={values} set={set} />
        {values['549'] === 'Sim' && (
          <Textarea id="550" lab="Forneça detalhes" req values={values} set={set} />
        )}

        <Radio id="551" lab="Alguma vez você prestou serviço militar?" req values={values} set={set} />
        {values['551'] === 'Sim' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="552" lab="País" req values={values} set={set} />
              <Field id="553" lab="Ramo de serviço" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="554" lab="Patente" req values={values} set={set} />
              <Field id="555" lab="Especialidade Militar" req values={values} set={set} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="556" lab="Data de admissão" req type="date" values={values} set={set} />
              <Field id="557" lab="Data de desligamento" req type="date" values={values} set={set} />
            </div>
          </>
        )}

        <Radio id="558" lab="Você já serviu ou foi membro de alguma unidade paramilitar, grupo rebelde, guerrilha ou organização insurgente?" req values={values} set={set} />
        {values['558'] === 'Sim' && (
          <Textarea id="559" lab="Forneça detalhes" req values={values} set={set} />
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 10: SEGURANÇA E ANTECEDENTES ────────────────────────────────
  return (
    <form onSubmit={onStepSubmit} className="space-y-6">
      {progress}
      <p className="text-sm text-muted leading-relaxed">
        Responda todas as perguntas abaixo com atenção. Em caso de resposta &quot;Sim&quot;, forneça os detalhes solicitados.
      </p>

      <p className={sec}>Saúde</p>
      <SecQ id="561" detId="593" lab="Você tem alguma doença transmissível de importância para a saúde pública (tuberculose, lepra, gonorreia, sífilis, etc.)?" values={values} set={set} />
      <SecQ id="563" detId="594" lab="Você tem um distúrbio físico ou mental que represente uma ameaça para a segurança ou bem-estar de si mesmo ou de outros?" values={values} set={set} />
      <SecQ id="564" detId="596" lab="Você é ou já foi viciado em drogas?" values={values} set={set} />

      <p className={sec}>Antecedentes criminais</p>
      <SecQ id="565" detId="595" lab="Alguma vez você foi preso ou condenado por qualquer ofensa ou crime, ainda que objeto de indulto, anistia ou ação similar?" values={values} set={set} />
      <SecQ id="566" detId="597" lab="Alguma vez você violou ou esteve envolvido em conspiração para violar qualquer lei relativa a substâncias controladas?" values={values} set={set} />
      <SecQ id="567" detId="598" lab="Você está indo aos EUA para exercer prostituição ou já esteve envolvido em prostituição ou busca por prostitutas nos últimos 10 anos?" values={values} set={set} />
      <SecQ id="568" detId="599" lab="Alguma vez você esteve envolvido ou procurou se envolver com lavagem de dinheiro?" values={values} set={set} />
      <SecQ id="584" detId="613" lab="Você já foi preso ou condenado por qualquer delito ou crime, ainda que sujeito a indulto, anistia ou outra ação similar?" values={values} set={set} />

      <p className={sec}>Tráfico humano</p>
      <SecQ id="569" detId="600" lab="Você já cometeu ou conspirou a cometer ofensas relacionadas a tráfico humano nos EUA ou fora dos EUA?" values={values} set={set} />
      <SecQ id="585" detId="612" lab="Você já conscientemente ajudou, instigou ou conspirou com um indivíduo que cometeu crime grave de tráfico humano nos EUA ou fora dos EUA?" values={values} set={set} />
      <SecQ id="586" detId="601" lab="Você é cônjuge, filho ou filha de um indivíduo que cometeu crime de tráfico humano e nos últimos cinco anos se beneficiou conscientemente dessas atividades?" values={values} set={set} />

      <p className={sec}>Terrorismo e segurança nacional</p>
      <SecQ id="570" detId="620" lab="Você pretende engajar-se em atividades de espionagem, sabotagem, violações de exportação controlada ou qualquer outra atividade ilegal nos EUA?" values={values} set={set} />
      <SecQ id="571" detId="618" lab="Você pretende se envolver em atividades terroristas ou já esteve envolvido em atividades terroristas?" values={values} set={set} />
      <SecQ id="572" detId="622" lab="Alguma vez você prestou assistência financeira ou outro apoio a terroristas ou organizações terroristas?" values={values} set={set} />
      <SecQ id="573" detId="623" lab="Você é membro ou representante de uma organização terrorista?" values={values} set={set} />

      <p className={sec}>Crimes contra a humanidade</p>
      <SecQ id="574" detId="621" lab="Você já ordenou, incitou, comandou ou participou de genocídio?" values={values} set={set} />
      <SecQ id="575" detId="619" lab="Você já ordenou, incitou, comandou ou participou de tortura?" values={values} set={set} />
      <SecQ id="576" detId="617" lab="Você já ordenou, incitou, comandou ou participou de execuções extrajudiciais, assassinatos políticos ou outros atos de violência?" values={values} set={set} />
      <SecQ id="577" detId="616" lab="Você já esteve envolvido no recrutamento de soldados infantis?" values={values} set={set} />
      <SecQ id="578" detId="610" lab="Você já foi responsável por graves violações da liberdade religiosa enquanto servia como oficial do governo?" values={values} set={set} />
      <SecQ id="579" detId="611" lab="Você já esteve envolvido diretamente na implementação de controle de população forçando abortos ou esterilização forçada?" values={values} set={set} />
      <SecQ id="580" detId="609" lab="Você já esteve envolvido em transplante coercitivo de órgãos ou tecido humano?" values={values} set={set} />

      <p className={sec}>Imigração</p>
      <SecQ id="581" detId="608" lab="Você já procurou obter ou ajudar outros a obter um visto dos EUA por fraude ou deturpação deliberada?" values={values} set={set} />
      <SecQ id="582" detId="615" lab="Você já manteve a custódia de uma criança cidadã americana fora dos EUA de uma pessoa que tenha guarda legal?" values={values} set={set} />
      <SecQ id="583" detId="614" lab="Alguma vez você renunciou à cidadania norte-americana com a finalidade de evitar impostos?" values={values} set={set} />
      <SecQ id="587" detId="602" lab="Você já foi alvo de uma audiência de remoção ou deportação, ou não compareceu a uma audiência sobre remoção nos últimos cinco anos?" values={values} set={set} />
      <SecQ id="589" detId="603" lab="Você já esteve presente ilegalmente nos EUA, ultrapassou o tempo concedido por um oficial de imigração ou violou os termos de um visto americano?" values={values} set={set} />
      <SecQ id="590" detId="605" lab="Você já foi removido ou deportado de algum país?" values={values} set={set} />
      <SecQ id="591" detId="606" lab="Você já renunciou à cidadania dos EUA para evitar impostos?" values={values} set={set} />
      <SecQ id="592" detId="607" lab="Você frequentou uma escola primária pública com status de estudante (F) ou escola secundária pública após 30 de novembro de 1996 sem reembolsar a escola?" values={values} set={set} />

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
