import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#181c3a] to-[#0e1129] text-white font-sans">
      {/* HERO SECTION */}
      <header className="w-full py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] shadow-lg fade-in" data-aos="fade-down">
        <Image src="/wardunit-logo.png" alt="WardUnit Logo" width={120} height={120} className="mb-4 rounded-full shadow-xl border-4 border-white/20" />
        <h1 className="text-5xl font-bold mb-2 text-center gradient-text">WardUnit</h1>
        <p className="text-2xl mb-8 text-center max-w-2xl font-medium text-strong">La tua fortezza di sicurezza per Discord</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#features" className="btn bg-primary hover:bg-primary-dark transition px-8 py-3 rounded-full font-semibold text-lg shadow-lg gradient-text border-2 border-white/10">Scopri le funzionalità</a>
          <a href="https://discord.com/oauth2/authorize?client_id=1363947467086889192&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-dark transition px-8 py-3 rounded-full font-semibold text-lg shadow-lg text-white border-2 border-white/10">Aggiungi a Discord</a>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-4 max-w-5xl mx-auto w-full slide-up" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center gradient-text">Caratteristiche Principali</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="card p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
            <Image src="/icons/shield.svg" alt="Ban e Report" width={48} height={48} />
            <h3 className="font-semibold text-lg mt-4 mb-2 gradient-text">Ban & Report Avanzati</h3>
            <p className="text-center text-sm text-strong">Sistema di ban e report potente e personalizzabile per la massima sicurezza.</p>
          </div>
          <div className="card p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
            <Image src="/icons/ban.svg" alt="Blacklist" width={48} height={48} />
            <h3 className="font-semibold text-lg mt-4 mb-2 gradient-text">Blacklist Globale</h3>
            <p className="text-center text-sm text-strong">Blacklist condivisa tra server, gestita dallo staff WardUnit.</p>
          </div>
          <div className="card p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
            <Image src="/icons/report.svg" alt="Report" width={48} height={48} />
            <h3 className="font-semibold text-lg mt-4 mb-2 gradient-text">Sistema Report</h3>
            <p className="text-center text-sm text-strong">Segnalazione utenti con raccolta prove e gestione staff.</p>
          </div>
          <div className="card p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
            <Image src="/icons/premium.svg" alt="Premium" width={48} height={48} />
            <h3 className="font-semibold text-lg mt-4 mb-2 gradient-text">Premium & Utility</h3>
            <p className="text-center text-sm text-strong">Funzionalità avanzate, utility e supporto prioritario per server premium.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#312e81] to-[#38bdf8] w-full fade-in" data-aos="fade-right">
        <h2 className="text-2xl font-bold mb-8 text-center gradient-text">Cosa dicono di noi</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
          <div className="card p-6 flex-1" style={{background: "rgba(10,12,30,0.92)"}} data-aos="fade-up" data-aos-delay="100">
            <p className="italic mb-2 text-strong">"WardUnit ha salvato il nostro server da un attacco! Consigliatissimo a chi tiene alla sicurezza."</p>
            <span className="font-semibold text-strong">- Admin di ServerXYZ</span>
          </div>
          <div className="card p-6 flex-1" style={{background: "rgba(10,12,30,0.92)"}} data-aos="fade-up" data-aos-delay="200">
            <p className="italic mb-2 text-strong">"Facile da configurare e con un supporto rapidissimo. Il miglior bot di moderazione!"</p>
            <span className="font-semibold text-strong">- Mod di DiscordItalia</span>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-12 px-4 flex flex-col items-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] w-full slide-up" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-center gradient-text">Unisciti alla community di WardUnit!</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://discord.gg/jH8feHGm8K" target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-primary-dark transition px-8 py-3 rounded-full font-semibold text-lg shadow-lg gradient-text border-2 border-white/10">Server di Supporto</a>
          <a href="/comandi" className="btn bg-accent hover:bg-accent-dark transition px-8 py-3 rounded-full font-semibold text-lg shadow-lg text-white border-2 border-white/10">Vedi i Comandi</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-6 px-4 bg-[#1e293b] text-center text-sm text-gray-400">
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <a href="/" className="hover:underline">Home</a>
          <span className="hidden sm:inline">|</span>
          <a href="/funzionalita" className="hover:underline">Funzionalità</a>
          <span className="hidden sm:inline">|</span>
          <a href="/shop" className="hover:underline">Shop</a>
          <span className="hidden sm:inline">|</span>
          <a href="/contatti" className="hover:underline">Contatti</a>
          <span className="hidden sm:inline">|</span>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
        <div className="mt-2">&copy; {new Date().getFullYear()} WardUnit. Tutti i diritti riservati.</div>
      </footer>
    </div>
  );
}
