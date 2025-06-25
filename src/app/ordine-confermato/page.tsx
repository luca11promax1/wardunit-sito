export default function OrdineConfermato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Ordine Confermato!</h1>
        <p className="text-lg mb-6 text-center">Grazie per il tuo acquisto! Riceverai una email di conferma con i dettagli dell&apos;ordine.</p>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-8 text-center">
          <p className="mb-4">Per attivare le funzionalità premium o richiedere supporto, apri un ticket sul nostro server Discord ufficiale.</p>
          <a href="https://discord.gg/jH8feHGm8K" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-lg shadow">Unisciti al Server Discord Ufficiale</a>
        </div>
      </div>
    </div>
  );
} 