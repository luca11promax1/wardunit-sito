export default function Comandi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] to-[#0e1129] text-white font-sans py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Elenco Comandi WardUnit</h1>
        <p className="text-lg mb-10 text-center max-w-2xl mx-auto">Tutti i comandi disponibili, suddivisi per categoria. Alcuni sono riservati allo staff.</p>
        <div className="card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Moderazione</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold">/kick &lt;utente&gt; [motivo]</span> — Espelle un utente dal server.</li>
            <li><span className="font-semibold">/ban &lt;utente&gt; [motivo]</span> — Banna un utente dal server.</li>
            <li><span className="font-semibold">/unban &lt;utente&gt; [motivo]</span> — Sbanna un utente dal server.</li>
          </ul>
        </div>
        <div className="card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Blacklist (Staff)</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold">/blacklist &lt;user_id&gt; [username] [reason] [danger_level] [duration]</span> — Aggiungi un utente alla blacklist globale.</li>
            <li><span className="font-semibold">/unblacklist &lt;user_id&gt;</span> — Rimuovi un utente dalla blacklist.</li>
            <li><span className="font-semibold">/blacklist-list</span> — Visualizza la lista degli utenti in blacklist.</li>
            <li><span className="font-semibold">/search [utente|id]</span> — Cerca un utente nella blacklist.</li>
            <li><span className="font-semibold">/global-search</span> — Cerca tutti i membri del server nella blacklist globale.</li>
          </ul>
        </div>
        <div className="card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Report</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold">/report</span> — Avvia la procedura guidata per segnalare un utente (con raccolta motivazione e prove).</li>
          </ul>
        </div>
        <div className="card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Info & Utility</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold">/help</span> — Mostra informazioni sul bot e i comandi disponibili.</li>
            <li><span className="font-semibold">/ping</span> — Mostra la latenza del bot.</li>
            <li><span className="font-semibold">/serverinfo</span> — Mostra informazioni dettagliate sul server.</li>
            <li><span className="font-semibold">/userinfo &lt;utente&gt;</span> — Mostra informazioni dettagliate su un utente.</li>
            <li><span className="font-semibold">/blacklist-search</span> — Cerca un utente nella blacklist.</li>
          </ul>
        </div>
        <div className="card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Premium & Staff</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Gestione server premium, ruoli staff, permessi e comandi riservati (solo per utenti autorizzati).</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 