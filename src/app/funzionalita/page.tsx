import Image from "next/image";

export default function Funzionalita() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] to-[#0e1129] text-white font-sans py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Funzionalità di WardUnit</h1>
        <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
          WardUnit offre una suite completa di strumenti per la sicurezza, la moderazione e la gestione dei server Discord. Ecco cosa rende unico il nostro bot:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/shield.svg" alt="Anti-Nuke" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Protezione Anti-Nuke</h2>
            <p className="text-center text-sm">Blocca automaticamente tentativi di attacco (nuke) e azioni sospette su canali e ruoli, proteggendo il tuo server da danni irreparabili.</p>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/ban.svg" alt="Blacklist Globale" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Blacklist Globale</h2>
            <p className="text-center text-sm">Sistema avanzato di blacklist condivisa tra server, con comandi staff per aggiunta, rimozione, ricerca e gestione utenti sospetti.</p>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/report.svg" alt="Sistema Report" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Sistema di Report</h2>
            <p className="text-center text-sm">Procedura guidata per segnalare utenti, raccolta prove, gestione accettazione/rifiuto e log automatici per lo staff.</p>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/staff.svg" alt="Gestione Staff" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Gestione Staff & Permessi</h2>
            <p className="text-center text-sm">Ruoli staff, permessi granulari, gestione interna tramite database e comandi riservati.</p>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/premium.svg" alt="Premium" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Funzionalità Premium</h2>
            <p className="text-center text-sm">Abbonamenti per server premium: limiti elevati, log avanzati, canali esclusivi e supporto prioritario.</p>
          </div>
          <div className="card p-6 flex flex-col items-center">
            <Image src="/icons/info.svg" alt="Info & Utility" width={48} height={48} />
            <h2 className="font-semibold text-xl mt-4 mb-2 gradient-text">Info & Utility</h2>
            <p className="text-center text-sm">Comandi informativi: /help, /ping, /serverinfo, /userinfo, statistiche e molto altro.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center gradient-text">Come funziona WardUnit?</h2>
        <div className="card p-6 mb-8 text-center">
          <p className="text-gray-300">WardUnit monitora ingressi, azioni sospette e segnala automaticamente utenti pericolosi. Lo staff può gestire blacklist, ticket e report da Discord o dal sito. Tutto è pensato per la massima sicurezza e semplicità.</p>
        </div>
      </div>
    </div>
  );
} 