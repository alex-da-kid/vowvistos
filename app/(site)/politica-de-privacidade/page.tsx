import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a Vow Vistos coleta, usa, armazena e protege os seus dados pessoais, de acordo com a Lei Geral de Proteção de Dados (LGPD).',
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="25 de setembro de 2026">
      <p>
        Esta Política de Privacidade explica como a <strong>Vow Vistos Consultoria Consular e Agência de Viagens Ltda.</strong>, inscrita no CNPJ 27.297.742/0001-87, com sede na Av. Senador Virgílio Távora, 1701, Meireles, Fortaleza, CE (&quot;Vow Vistos&quot;), trata os dados pessoais de quem usa este site e contrata os nossos serviços, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados, LGPD).
      </p>
      <p>
        A Vow Vistos é uma empresa privada de assessoria e consultoria, sem vínculo com qualquer governo, embaixada ou consulado.
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li><strong>Dados de contato:</strong> nome, telefone ou WhatsApp, e-mail e a situação do seu visto, informados nos formulários de análise de perfil e de contato.</li>
        <li><strong>Dados do processo de visto:</strong> para clientes que contratam a assessoria, coletamos as informações necessárias para preparar o processo, como dados do passaporte, documentos de identificação, histórico de viagens, informações profissionais e financeiras e as respostas às perguntas exigidas pelos formulários oficiais de cada país. Algumas dessas perguntas envolvem dados pessoais sensíveis, como informações de saúde e antecedentes criminais.</li>
        <li><strong>Dados de navegação:</strong> informações técnicas coletadas automaticamente, como páginas visitadas, tipo de dispositivo e navegador e endereço IP, por meio de cookies. Veja a nossa <a href="/politica-de-cookies">Política de Cookies</a>.</li>
        <li><strong>Conversas:</strong> mensagens trocadas conosco pelo WhatsApp, e-mail ou telefone.</li>
      </ul>

      <h2>2. Para que usamos os seus dados</h2>
      <ul>
        <li>Responder ao seu contato e fazer a análise de perfil que você solicitou.</li>
        <li>Prestar o serviço de assessoria contratado, incluindo o preenchimento e a revisão dos formulários do seu processo de visto.</li>
        <li>Cumprir obrigações legais e fiscais.</li>
        <li>Medir o desempenho do site e dos nossos anúncios, de forma agregada.</li>
      </ul>
      <p>Não vendemos os seus dados pessoais.</p>

      <h2>3. Bases legais</h2>
      <p>
        Tratamos os seus dados com base na execução de contrato ou de procedimentos preliminares a pedido seu (art. 7º, V, da LGPD), no cumprimento de obrigação legal (art. 7º, II), no legítimo interesse para medir e melhorar o site (art. 7º, IX) e no seu consentimento, quando exigido. Os dados sensíveis necessários ao processo de visto são tratados com o seu consentimento específico e destacado (art. 11, I), dado ao aceitar os termos do formulário de contratação.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <ul>
        <li><strong>Órgãos oficiais do país de destino</strong>, quando você nos autoriza a enviar as informações do seu processo em seu nome, nos sistemas oficiais de cada governo.</li>
        <li><strong>Fornecedores que nos ajudam a operar</strong>, como serviços de hospedagem do site e dos formulários, Google (Google Analytics e Google Ads, para medição) e WhatsApp (Meta), para atendimento.</li>
        <li><strong>Autoridades</strong>, quando exigido por lei ou ordem judicial.</li>
      </ul>
      <p>Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos, exigimos garantias adequadas de proteção, conforme a LGPD.</p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados de contato enquanto houver interesse na relação e os dados do processo de visto pelo tempo necessário para prestar o serviço, incluindo o período coberto pela Garantia Vitalícia, e para cumprir prazos legais. Depois disso, os dados são excluídos ou anonimizados.
      </p>

      <h2>6. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger os seus dados contra acessos não autorizados, perda ou alteração, como conexão criptografada (HTTPS) e acesso restrito à equipe responsável pelo seu processo.
      </p>

      <h2>7. Os seus direitos</h2>
      <p>Pela LGPD, você pode, a qualquer momento:</p>
      <ul>
        <li>confirmar se tratamos os seus dados e acessá-los;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir a anonimização, o bloqueio ou a exclusão de dados desnecessários;</li>
        <li>pedir a portabilidade dos seus dados;</li>
        <li>saber com quem compartilhamos os seus dados;</li>
        <li>revogar o seu consentimento.</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para <strong>atendimento@vowvistos.com.br</strong>. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Encarregado de dados</h2>
      <p>
        O contato do encarregado pelo tratamento de dados pessoais da Vow Vistos é <strong>atendimento@vowvistos.com.br</strong>.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos atualizar esta política. A data da última atualização aparece no topo da página.
      </p>
    </LegalPage>
  );
}
