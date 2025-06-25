export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] to-[#0e1129] text-white font-sans py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Shop WardUnit</h1>
        <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
          Sostieni lo sviluppo di WardUnit e sblocca funzionalità premium per il tuo server Discord!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card p-6 flex flex-col items-center">
            <h2 className="font-semibold text-xl mt-2 mb-2 gradient-text">WardUnit Pro</h2>
            <p className="text-center text-sm mb-4">Funzionalità avanzate, limiti elevati, supporto prioritario.</p>
            <button className="bg-primary hover:bg-primary-dark transition px-6 py-2 rounded-full font-semibold text-lg shadow-lg gradient-text border-2 border-white/10">Abbonati</button>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <h2 className="font-semibold text-xl mt-2 mb-2 gradient-text">Donazione</h2>
            <p className="text-center text-sm mb-4">Supporta il progetto con una donazione libera.</p>
            <button className="bg-accent hover:bg-accent-dark transition px-6 py-2 rounded-full font-semibold text-lg shadow-lg text-white border-2 border-white/10">Dona ora</button>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <h2 className="font-semibold text-xl mt-2 mb-2 gradient-text">Merchandising</h2>
            <p className="text-center text-sm mb-4">(In arrivo) Magliette, tazze e altro con il logo WardUnit.</p>
            <button className="bg-gray-500 cursor-not-allowed px-6 py-2 rounded-full font-semibold text-lg shadow-lg" disabled>Presto disponibile</button>
          </div>
        </div>
        <div className="card p-6 mb-8 text-center">
          <p className="text-gray-300">Gestisci i tuoi abbonamenti e ordini dalla tua area personale dopo il login.</p>
        </div>
      </div>
    </div>
  );
} 