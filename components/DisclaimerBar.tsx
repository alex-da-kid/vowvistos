export default function DisclaimerBar() {
  return (
    <div className="bg-light border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-5 flex items-start gap-3">
        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p className="text-sm text-dark leading-relaxed">
          A Vow Vistos é uma empresa privada de assessoria e consultoria. Não temos vínculo com nenhum governo, embaixada ou consulado. Os vistos são emitidos exclusivamente pelos governos de cada país, e você pode fazer a solicitação diretamente nos sites oficiais:{' '}
          <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">travel.state.gov</a> (EUA) e{' '}
          <a href="https://www.canada.ca/pt/imigracao-refugiados-cidadania.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">canada.ca</a> (Canadá). As taxas governamentais são pagas por você diretamente ao órgão oficial e não estão incluídas nos nossos honorários.
        </p>
      </div>
    </div>
  );
}
