export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Domande Frequenti (FAQ)</h1>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Generali</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Cos&apos;è WardUnit?</h3>
            <p className="text-gray-300">WardUnit è un bot Discord per la sicurezza e la moderazione avanzata dei server.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">WardUnit è gratuito?</h3>
            <p className="text-gray-300">Sì, le funzionalità base sono gratuite. Sono disponibili piani premium per funzionalità avanzate.</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Shop & Abbonamenti</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Come posso acquistare un abbonamento?</h3>
            <p className="text-gray-300">Puoi acquistare un abbonamento direttamente dalla pagina Shop del sito.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Posso chiedere un rimborso?</h3>
            <p className="text-gray-300">Sì, consulta la nostra policy rimborsi nei Termini di Servizio.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 