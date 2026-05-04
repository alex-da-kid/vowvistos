import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading', weight: ['600','700','800'] });

export const metadata: Metadata = {
  title: { default: 'Vow Vistos — Consultoria de Vistos', template: '%s | Vow Vistos' },
  description: 'Consultoria especializada em vistos americano, canadense, chinês e outros. Mais de 7.000 vistos aprovados para brasileiros. Garantia Vitalícia.',
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
