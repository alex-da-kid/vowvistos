import type { Metadata } from 'next';
import Image from 'next/image';
import EtaCanadenseForm from './EtaCanadenseForm';

export const metadata: Metadata = {
  title: 'Formulário ETA Canadense | Vow Vistos',
  description: 'Preencha o formulário para solicitar sua ETA Canadense com a Vow Vistos.',
  robots: { index: false },
};

export default function FormularioEtaCanadensePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <a href="/" className="mb-8">
        <Image src="/logo.svg" alt="Vow Vistos" width={160} height={44} priority />
      </a>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            ETA Canadense
          </span>
          <h1 className="text-2xl font-heading font-bold text-dark mb-2">
            Formulário de Solicitação
          </h1>
          <p className="text-muted text-sm">
            Preencha os campos abaixo. Nossa equipe processará sua solicitação e entrará em contato em breve.
          </p>
        </div>

        <EtaCanadenseForm />
      </div>

      <p className="text-xs text-muted mt-8">
        &copy; {new Date().getFullYear()} Vow Vistos. Todos os direitos reservados.
      </p>
    </main>
  );
}
