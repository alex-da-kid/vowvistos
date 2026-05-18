'use client';

import { useState } from 'react';

type GFChoice = { text: string; value: string };

type GFField = {
  id: number;
  type: string;
  label: string;
  isRequired: boolean;
  placeholder?: string;
  description?: string;
  maxLength?: number;
  choices?: GFChoice[];
};

type Props = {
  formId: number;
  fields: GFField[];
};

const inputClass = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition';

function FieldInput({ field, value, onChange }: {
  field: GFField;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = String(field.id);

  switch (field.type) {
    case 'textarea':
      return (
        <textarea required={field.isRequired} placeholder={field.placeholder}
          value={value} onChange={e => onChange(e.target.value)}
          rows={4} maxLength={field.maxLength}
          className={inputClass + ' resize-none'} />
      );
    case 'select':
      return (
        <select required={field.isRequired} value={value}
          onChange={e => onChange(e.target.value)} className={inputClass}>
          <option value="">Selecione...</option>
          {field.choices?.map(c => (
            <option key={c.value} value={c.value}>{c.text}</option>
          ))}
        </select>
      );
    case 'radio':
      return (
        <div className="space-y-2">
          {field.choices?.map(c => (
            <label key={c.value} className="flex items-center gap-2 text-sm text-dark cursor-pointer">
              <input type="radio" name={id} value={c.value}
                checked={value === c.value} onChange={e => onChange(e.target.value)}
                required={field.isRequired} className="accent-primary" />
              {c.text}
            </label>
          ))}
        </div>
      );
    case 'date':
      return (
        <input type="date" required={field.isRequired}
          value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
      );
    case 'email':
      return (
        <input type="email" required={field.isRequired} placeholder={field.placeholder}
          value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
      );
    case 'phone':
      return (
        <input type="tel" required={field.isRequired} placeholder={field.placeholder}
          value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
      );
    case 'number':
      return (
        <input type="number" required={field.isRequired} placeholder={field.placeholder}
          value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
      );
    default:
      return (
        <input type="text" required={field.isRequired} placeholder={field.placeholder}
          value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
      );
  }
}

const SKIP_TYPES = new Set(['section', 'html', 'captcha', 'hidden', 'page']);

export default function GravityFormRenderer({ formId, fields }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(id: string, value: string) {
    setValues(prev => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId, fieldValues: values }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
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
        <h3 className="font-heading font-bold text-dark text-xl mb-2">Formulário enviado!</h3>
        <p className="text-muted text-sm">Nossa equipe entrará em contato em breve.</p>
      </div>
    );
  }

  const visibleFields = fields.filter(f => !SKIP_TYPES.has(f.type));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {visibleFields.map(field => (
        <div key={field.id}>
          <label className="block text-xs font-heading font-semibold text-dark mb-1.5">
            {field.label}{field.isRequired && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          {field.description && (
            <p className="text-xs text-muted mb-1.5">{field.description}</p>
          )}
          <FieldInput
            field={field}
            value={values[String(field.id)] ?? ''}
            onChange={v => handleChange(String(field.id), v)}
          />
        </div>
      ))}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          Ocorreu um erro ao enviar. Tente novamente.
        </div>
      )}

      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-heading font-bold px-6 py-4 rounded-full transition-colors">
        {status === 'sending' ? 'Enviando...' : 'Enviar formulário'}
      </button>
    </form>
  );
}
