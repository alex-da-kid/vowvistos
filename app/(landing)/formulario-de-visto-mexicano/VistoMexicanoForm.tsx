'use client';

import { useState } from 'react';

type Values = Record<string, string>;

const STEP_NAMES = [
  'Termos',
  'Informação Pessoal',
  'Dados Complementares',
  'Informação da Viagem',
  'Agendamento Consular',
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

function Radio({ id, lab, req, opts = ['Sim', 'Não'], values, set }: {
  id: string; lab: string; req?: boolean; opts?: string[];
  values: Values; set: (id: string, v: string) => void;
}) {
  return (
    <div>
      <label className={lbl}>{lab}{req && <span className="text-red-500 ml-0.5"> *</span>}</label>
      <div className="flex flex-wrap gap-6 mt-1">
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

export default function VistoMexicanoForm() {
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
        body: JSON.stringify({ formId: 26, fieldValues: values }),
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
    if (step < STEP_NAMES.length) {
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
      {step < STEP_NAMES.length ? (
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
    const accepted = !!values['189.1'];
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
            onChange={e => set('189.1', e.target.checked
              ? 'Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação e obtenção do visto.'
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

  // ── STEP 2: INFORMAÇÃO PESSOAL ────────────────────────────────────────
  if (step === 2) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec.replace('mt-8 ', '')}>Dados pessoais</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="172" lab="Nome" req values={values} set={set} />
          <Field id="173" lab="Sobrenome" req values={values} set={set} />
        </div>
        <Sel id="268" lab="Sexo" req
          opts={['Masculino', 'Feminino', 'Prefiro não especificar']}
          values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="174" lab="Data de nascimento" req type="date" values={values} set={set} />
          <Field id="278" lab="Idade" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="279" lab="País de nascimento" req values={values} set={set} />
          <Field id="176" lab="Nacionalidade" req values={values} set={set} />
        </div>

        <p className={sec}>Passaporte / Documento de viagem</p>
        <Field id="280" lab="Número do passaporte ou documento de identidade de viagem" req values={values} set={set} />
        <Field id="281" lab="País de expedição" req values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="282" lab="Data de expedição" req type="date" values={values} set={set} />
          <Field id="283" lab="Data de vencimento" req type="date" values={values} set={set} />
        </div>

        {navBtns}
      </form>
    );
  }

  // ── STEP 3: DADOS COMPLEMENTARES ─────────────────────────────────────
  if (step === 3) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Sel id="193" lab="Estado civil"
          opts={['Solteiro(a)', 'Casado(a)', 'União estável', 'Divorciado(a)', 'Viúvo(a)']}
          values={values} set={set} />
        <Field id="213" lab="Endereço atual" req
          desc="Informar endereço completo: Rua, Numero, Complemento, Bairro, CEP, Cidade e Estado"
          values={values} set={set} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="214" lab="Telefone" req type="tel" values={values} set={set} />
          <Field id="301" lab="E-mail" req type="email" values={values} set={set} />
        </div>
        <Field id="215" lab="Ocupação" req values={values} set={set} />
        <Field id="285" lab="Nome da companhia ou instituição" req values={values} set={set} />
        <Field id="299" lab="País de residência" req values={values} set={set} />
        <Radio id="300" lab="Conta com permanência legal" values={values} set={set} />

        <p className={sec}>Antecedentes</p>
        <Sel id="289" lab="Tem antecedentes penais no México ou em outro país?"
          opts={['Sim', 'Não']} values={values} set={set} />
        {values['289'] === 'Sim' && (
          <Textarea id="288" lab="Em caso afirmativo, especificar" req values={values} set={set} />
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 4: INFORMAÇÃO DA VIAGEM ──────────────────────────────────────
  if (step === 4) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <Field id="290" lab="Data de entrada no México" type="date" values={values} set={set} />
        <Field id="184" lab="Cidade por onde entrará" values={values} set={set} />
        <Radio id="291" lab="Tempo de permanência"
          opts={['Menor de 180 dias', 'De 180 dias até 4 anos', 'Definitiva']}
          values={values} set={set} />
        <Radio id="292" lab="Já visitou o México?" values={values} set={set} />
        <Radio id="293" lab="Foi deportado do México?" values={values} set={set} />
        {values['293'] === 'Sim' && (
          <Textarea id="294" lab="Em caso afirmativo, especificar" req values={values} set={set} />
        )}
        <Sel id="297" lab="Propósito da viagem ao México"
          opts={['Negócios', 'Estudos', 'Trabalho', 'Lazer', 'Treinamento', 'Outro']}
          values={values} set={set} />
        {values['297'] === 'Outro' && (
          <Textarea id="298" lab='Se "Outro", especificar' req values={values} set={set} />
        )}

        {navBtns}
      </form>
    );
  }

  // ── STEP 5: AGENDAMENTO CONSULAR ──────────────────────────────────────
  const consulado = values['309'] ?? '';
  const brasiliaOuRio = consulado === 'Brasilia' || consulado === 'Rio de Janeiro';
  const saoPaulo = consulado === 'São Paulo';

  return (
    <form onSubmit={onStepSubmit} className="space-y-5">
      {progress}
      <Radio id="309" lab="Em qual consulado você pretende ir?"
        opts={['Brasilia', 'Rio de Janeiro', 'São Paulo']}
        values={values} set={set} />

      {brasiliaOuRio && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="316" lab="Data inicial" type="date" values={values} set={set} />
          <Field id="307" lab="Data limite" type="date" values={values} set={set} />
        </div>
      )}

      {saoPaulo && (
        <>
          <p className="text-xs text-muted">
            Para São Paulo, a data inicial desejada deve ser no mínimo a partir de 30 dias contados da data de hoje.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="313" lab="Data inicial" type="date" values={values} set={set} />
            <Field id="315" lab="Data limite" type="date" values={values} set={set} />
          </div>
        </>
      )}

      {consulado && (
        <p className="text-xs text-muted bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
          Ampliar a janela de tempo aumenta as chances de encontrar uma data que atenda às suas necessidades.
        </p>
      )}

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
