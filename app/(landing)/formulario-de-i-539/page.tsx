import type { Metadata } from 'next';
import Image from 'next/image';
import I539Form from './I539Form';

export const metadata: Metadata = {
  title: 'Formulário I-539 | Vow Vistos',
  description: 'Preencha o formulário para solicitar extensão de permanência nos EUA (Formulário I-539) com a Vow Vistos.',
  robots: { index: false },
};

export default function FormularioI539Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <a href="/" className="mb-8">
        <Image src="/logo.svg" alt="Vow Vistos" width={160} height={44} priority />
      </a>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Visto Americano
          </span>
          <h1 className="text-2xl font-heading font-bold text-dark mb-2">
            Formulário I-539 — Extensão de Permanência
          </h1>
          <p className="text-muted text-sm">
            Preencha os campos abaixo com atenção. Nossa equipe utilizará essas informações para preparar sua solicitação de extensão de permanência nos EUA.
          </p>
        </div>

        <I539Form />
      </div>

      <p className="text-xs text-muted mt-8">
        &copy; {new Date().getFullYear()} Vow Vistos. Todos os direitos reservados.
      </p>
    </main>
  );
}
