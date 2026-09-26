import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Condições de uso do site da Vow Vistos, empresa privada de assessoria e consultoria de vistos.',
};

export default function TermosDeUsoPage() {
  return (
    <LegalPage title="Termos de Uso" updated="25 de setembro de 2026">
      <p>
        Estes Termos de Uso regem o acesso ao site vowvistos.com.br, mantido pela <strong>Vow Vistos Consultoria Consular e Agência de Viagens Ltda.</strong>, CNPJ 27.297.742/0001-87 (&quot;Vow Vistos&quot;). Ao usar o site, você concorda com estes termos.
      </p>

      <h2>1. Quem somos</h2>
      <p>
        A Vow Vistos é uma empresa privada de assessoria e consultoria para processos de visto. <strong>Não somos órgão governamental e não temos vínculo com nenhum governo, embaixada ou consulado.</strong> Os vistos e demais documentos de viagem são emitidos exclusivamente pelos órgãos oficiais de cada país, e você pode fazer a sua solicitação diretamente nos sites oficiais, como{' '}
        <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer">travel.state.gov</a> (EUA) e{' '}
        <a href="https://www.canada.ca/pt/imigracao-refugiados-cidadania.html" target="_blank" rel="noopener noreferrer">canada.ca</a> (Canadá).
      </p>

      <h2>2. Nossos serviços</h2>
      <p>
        Oferecemos análise de perfil, orientação, preparação e revisão de documentos e formulários, e preparação para entrevistas. A decisão sobre a concessão do visto cabe sempre à autoridade do país de destino. Nenhuma consultoria pode garantir a aprovação de um visto.
      </p>
      <p>
        Os valores cobrados pela Vow Vistos são honorários de assessoria. As taxas governamentais, como a taxa consular MRV dos EUA e as taxas da IRCC do Canadá, são pagas pelo cliente diretamente aos órgãos oficiais e não estão incluídas nos nossos honorários. As condições completas de cada serviço constam do contrato apresentado no momento da contratação.
      </p>

      <h2>3. Conteúdo do site</h2>
      <p>
        As informações publicadas no site têm caráter informativo e podem mudar sem aviso, já que os requisitos e as taxas de cada país são definidos pelos respectivos governos. Antes de tomar qualquer decisão, confirme as informações nos sites oficiais ou fale com a nossa equipe.
      </p>

      <h2>4. Uso adequado</h2>
      <p>
        Você se compromete a fornecer informações verdadeiras nos formulários e a não usar o site para fins ilícitos, para enviar conteúdo malicioso ou para tentar acessar áreas restritas.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Os textos, marcas, logotipos e demais conteúdos do site pertencem à Vow Vistos ou a seus licenciantes e são protegidos pela Lei nº 9.610/1998. Não é permitido copiá-los ou reproduzi-los sem autorização.
      </p>

      <h2>6. Links externos</h2>
      <p>
        O site pode conter links para sites de terceiros, incluindo sites oficiais de governos. Não controlamos esses sites e não respondemos pelo seu conteúdo.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento dos seus dados pessoais está descrito na nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e na nossa <a href="/politica-de-cookies">Política de Cookies</a>.
      </p>

      <h2>8. Legislação e foro</h2>
      <p>
        Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Fortaleza, CE, ressalvado o direito do consumidor de ajuizar ação no foro do seu domicílio.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <strong>atendimento@vowvistos.com.br</strong>.
      </p>
    </LegalPage>
  );
}
