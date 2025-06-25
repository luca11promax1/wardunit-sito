export default function Contatti() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contatti & Supporto</h1>
        <p className="text-lg mb-8 text-center max-w-xl mx-auto">
          Hai bisogno di aiuto o vuoi inviarci un feedback? Usa il modulo qui sotto o contattaci tramite Discord o email.
        </p>
        <form className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col gap-4 mb-8">
          <input type="text" placeholder="Il tuo nome" className="rounded px-4 py-2 bg-[#0f172a] text-white placeholder-gray-400" disabled />
          <input type="email" placeholder="La tua email" className="rounded px-4 py-2 bg-[#0f172a] text-white placeholder-gray-400" disabled />
          <textarea placeholder="Il tuo messaggio" className="rounded px-4 py-2 bg-[#0f172a] text-white placeholder-gray-400" rows={4} disabled />
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full font-semibold text-lg shadow cursor-not-allowed" disabled>Invia (prossimamente)</button>
        </form>
        <div className="flex flex-col gap-2 items-center">
          <a href="https://discord.gg/jH8feHGm8K" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Server Discord di Supporto</a>
          <a href="mailto:info@wardunit.it" className="text-blue-400 hover:underline">info@wardunit.it</a>
        </div>
      </div>
    </div>
  );
} 