import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Quais cookies o site da Vow Vistos usa, para que servem e como você pode gerenciá-los.',
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updated="25 de setembro de 2026">
      <p>
        Cookies são pequenos arquivos salvos no seu navegador quando você visita um site. Esta política explica quais cookies o site da <strong>Vow Vistos</strong> usa e como você pode controlá-los.
      </p>

      <h2>1. Cookies que usamos</h2>
      <ul>
        <li><strong>Necessários:</strong> permitem que o site funcione corretamente, por exemplo no envio dos formulários. Não podem ser desativados no site.</li>
        <li><strong>Medição (Google Analytics e Google Ads):</strong> em algumas páginas, usamos cookies do Google para entender, de forma agregada, como os visitantes chegam ao site e quais páginas acessam, e para medir o resultado dos nossos anúncios.</li>
        <li><strong>Conteúdo de terceiros (YouTube):</strong> os vídeos de depoimentos são exibidos pelo YouTube, que pode salvar cookies próprios quando você assiste a um vídeo.</li>
      </ul>

      <h2>2. Como gerenciar os cookies</h2>
      <p>
        Você pode bloquear ou apagar cookies nas configurações do seu navegador. Se bloquear todos os cookies, algumas partes do site podem não funcionar como esperado. Para impedir a medição pelo Google Analytics, você também pode usar o{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de desativação do Google Analytics</a>.
      </p>

      <h2>3. Mais informações</h2>
      <p>
        Para saber como tratamos os seus dados pessoais, leia a nossa <a href="/politica-de-privacidade">Política de Privacidade</a>. Dúvidas: <strong>atendimento@vowvistos.com.br</strong>.
      </p>
    </LegalPage>
  );
}
