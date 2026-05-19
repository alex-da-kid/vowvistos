'use client';

import { useState } from 'react';

type Values = Record<string, string>;

const STEP_NAMES = ['Termos', 'Dados Pessoais', 'Documentos', 'Conclusão'];

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
        <input placeholder="Bairro e complemento" value={values[`${id}.2`] ?? ''}
          onChange={e => set(`${id}.2`, e.target.value)} className={inp} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input required={req} placeholder="Cidade" value={values[`${id}.3`] ?? ''}
            onChange={e => set(`${id}.3`, e.target.value)} className={inp} />
          <input required={req} placeholder="Estado" value={values[`${id}.4`] ?? ''}
            onChange={e => set(`${id}.4`, e.target.value)} className={inp} />
        </div>
        <input placeholder="CEP" value={values[`${id}.5`] ?? ''}
          onChange={e => set(`${id}.5`, e.target.value)} className={inp} />
      </div>
    </div>
  );
}

export default function PassaporteForm() {
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
        body: JSON.stringify({ formId: 15, fieldValues: values }),
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
    if (step < 4) {
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

  const hasPrevPassport = !!values['253'] && values['253'] !== 'Nunca teve passaporte comum ou de emergência';

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
      {step < 4 ? (
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
              ? 'Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação obtenção do visto consular americano *'
              : ''
            )} />
          <span className="text-sm text-dark leading-relaxed">
            Declaro que li e entendo as informações e condições acima descritas, bem como as informações constantes neste termo de condições gerais para solicitação e obtenção do serviço. <span className="text-red-500">*</span>
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

  // ── STEP 2: DADOS PESSOAIS ────────────────────────────────────────────
  if (step === 2) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Dados Pessoais</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="172" lab="Nome" req values={values} set={set} />
          <Field id="173" lab="Sobrenome" req values={values} set={set} />
        </div>
        <Sel id="268" lab="Sexo" req opts={['Masculino', 'Feminino', 'Não especificado']} values={values} set={set} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="171" lab="Filiação 1 (nome)" values={values} set={set} />
          <Sel id="269" lab="Sexo da Filiação 1" opts={['Masculino', 'Feminino', 'Não especificado']} values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="210" lab="Filiação 2 (nome)" values={values} set={set} />
          <Sel id="270" lab="Sexo da Filiação 2" opts={['Masculino', 'Feminino', 'Não especificado']} values={values} set={set} />
        </div>

        <Field id="174" lab="Data de nascimento" req type="date" values={values} set={set} />
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 text-sm text-dark cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-primary"
              checked={values['271'] === 'Adoção Internacional'}
              onChange={e => set('271', e.target.checked ? 'Adoção Internacional' : '')} />
            Adoção Internacional
          </label>
          <label className="flex items-center gap-2 text-sm text-dark cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-primary"
              checked={values['207'] === 'Emancipado'}
              onChange={e => set('207', e.target.checked ? 'Emancipado' : '')} />
            Emancipado
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Sel id="201" lab="Raça ou cor" req
            opts={['Amarela', 'Branca', 'Indígena', 'Parda', 'Preta', 'Outras', 'Não desejo declarar']}
            values={values} set={set} />
          <Sel id="193" lab="Estado civil"
            opts={['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Separado(a) Judicialmente', 'Divorciado(a)', 'União Estável']}
            values={values} set={set} />
        </div>
        <Field id="176" lab="Nacionalidade" req
          desc="Para brasileiros com múltipla nacionalidade, selecionar Brasil."
          values={values} set={set} />

        <p className={sec}>Local de Nascimento</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="213" lab="País" req values={values} set={set} />
          <Field id="214" lab="Estado" req values={values} set={set} />
        </div>
        <Field id="215" lab="Cidade" req values={values} set={set} />

        <p className={sec}>Nomes Anteriores</p>
        <p className="text-xs text-muted leading-relaxed">
          Preencha abaixo os nomes anteriores do requerente, se houver. Obrigatório para quem já alterou o nome em razão de casamento, separação, divórcio ou decisão judicial. Caso nunca tenha alterado o nome, não preencher.
        </p>
        <Field id="184" lab="Nome anterior" values={values} set={set} />
        <Sel id="219" lab="Motivo da mudança"
          opts={[
            'Alteração por mudança de estado civil',
            'Alteração por decisão judicial',
            'Alteração por registro em cartório - provimento 73/2018 CNJ',
          ]}
          values={values} set={set} />

        {navBtns}
      </form>
    );
  }

  // ── STEP 3: DOCUMENTOS ────────────────────────────────────────────────
  if (step === 3) {
    return (
      <form onSubmit={onStepSubmit} className="space-y-5">
        {progress}
        <p className={sec}>Documento de Identificação</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="223" lab="Número" values={values} set={set} />
          <Field id="276" lab="Data de emissão" type="date" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="225" lab="Órgão emissor" values={values} set={set} />
          <Field id="224" lab="UF de expedição" values={values} set={set} />
        </div>

        <p className={sec}>CPF</p>
        <p className="text-xs text-muted leading-relaxed">
          Preencha o CPF do requerente ou do responsável, caso o requerente seja menor de idade.
        </p>
        <Field id="229" lab="CPF" values={values} set={set} />
        <Field id="230" lab="CPF do responsável" desc="Preencher caso o requerente seja menor de idade." values={values} set={set} />

        <p className={sec}>Certidão</p>
        <p className="text-xs text-muted leading-relaxed">
          Obrigatório apenas para menores de 12 anos (Certidão de Nascimento) e para requerente que já alterou o nome em razão de casamento, separação ou divórcio (Certidão de Casamento). Não preencher se não se enquadrar nessas hipóteses.
        </p>
        <Field id="233" lab="Matrícula" values={values} set={set} />
        <div className="grid grid-cols-3 gap-4">
          <Sel id="221" lab="Tipo" opts={['Certidão de nascimento', 'Certidão de casamento']} values={values} set={set} />
          <Field id="240" lab="Número" values={values} set={set} />
          <Field id="239" lab="Livro" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="238" lab="Folha" values={values} set={set} />
          <Field id="237" lab="Cartório" values={values} set={set} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="236" lab="UF de expedição" values={values} set={set} />
          <Field id="235" lab="Cidade de expedição" values={values} set={set} />
        </div>

        {navBtns}
      </form>
    );
  }

  // ── STEP 4: CONCLUSÃO ─────────────────────────────────────────────────
  return (
    <form onSubmit={onStepSubmit} className="space-y-5">
      {progress}

      <p className={sec}>Passaporte Anterior</p>
      <p className="text-xs text-muted leading-relaxed">
        A apresentação do passaporte anterior válido é obrigatória para requerente que já teve passaporte expedido pelo governo brasileiro em seu nome, sob pena de pagamento de taxa majorada. Caso nunca tenha tido passaporte, marcar a opção correspondente.
      </p>
      <Sel id="253" lab="Situação" req opts={[
        'Nunca teve passaporte comum ou de emergência',
        'Passaporte anterior válido (obrigatório a apresentação)',
        'Extraviado',
        'Está retido/apreendido pela polícia federal',
        'Está retido pelo MRE',
        'Roubado ou furtado',
        'Passaporte anterior vencido (recomenda-se a apresentação)',
      ]} values={values} set={set} />
      {hasPrevPassport && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="254" lab="Série" values={values} set={set} />
          <Field id="255" lab="Número" values={values} set={set} />
        </div>
      )}

      <p className={sec}>Dados Complementares</p>
      <Field id="256" lab="Profissão" req values={values} set={set} />
      <Field id="186" lab="E-mail" req type="email" values={values} set={set} />
      <Field id="273" lab="Confirmação do E-mail" req type="email" values={values} set={set} />

      <p className={sec}>Autorização de Viagem para Menor</p>
      <p className="text-xs text-muted leading-relaxed">
        Obrigatório o preenchimento para menores não emancipados. Informe o tipo de autorização de viagem a ser inserida no passaporte. Caso seja selecionada a opção de autorização restrita ou ampla, ambos os pais deverão comparecer ao posto de atendimento.
      </p>
      <div className="space-y-3 mt-1">
        {[
          '1. O titular, enquanto menor, está autorizado pelos genitores, pelo prazo deste documento, a viajar apenas com um dos pais, indistintamente. (Autorização restrita - autorização de viagem impressa no passaporte)',
          '2. O titular, enquanto menor, está autorizado pelos genitores, pelo prazo deste documento, a viajar desacompanhado ou apenas com um dos pais, indistintamente. (Autorização ampla - autorização de viagem impressa no passaporte)',
          '3. O titular, enquanto menor, dependerá de autorização, na forma da lei, para viajar desacompanhado ou apenas com um dos pais, indistintamente. (Necessária apresentação de autorização de viagem ao embarcar)',
        ].map(opt => (
          <label key={opt} className="flex items-start gap-3 cursor-pointer">
            <input type="radio" name="279" value={opt}
              checked={values['279'] === opt}
              onChange={e => set('279', e.target.value)}
              className="mt-1 accent-primary flex-shrink-0" />
            <span className="text-sm text-dark leading-relaxed">{opt}</span>
          </label>
        ))}
      </div>

      <p className={sec}>Endereço do Requerente</p>
      <Address id="158" lab="Endereço" req values={values} set={set} />
      <Field id="275" lab="Telefone" type="tel" values={values} set={set} />

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
