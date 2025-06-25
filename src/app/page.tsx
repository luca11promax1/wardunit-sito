"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] via-[#312e81] to-[#0e1129] text-white font-sans py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="w-full py-16 px-4 flex flex-col items-center justify-center bg-[#181c3a] mb-12 animate-fade-in">
          <h1 className="text-6xl font-extrabold mb-2 text-center tracking-tight drop-shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 40%, #f472b6 80%, #facc15 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#60a5fa',
            }}
          >
            WardUnit
          </h1>
          <p className="text-2xl mb-8 text-center max-w-2xl font-medium text-gray-200">La tua fortezza di sicurezza per Discord</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#features" className="transition px-8 py-3 rounded-full font-semibold text-lg shadow border border-blue-400 bg-white text-blue-700 hover:bg-blue-50">Scopri le funzionalità</a>
            <a href="https://discord.com/oauth2/authorize?client_id=1363947467086889192&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" className="transition px-8 py-3 rounded-full font-semibold text-lg shadow border border-pink-400 bg-white text-pink-600 hover:bg-pink-50">Aggiungi a Discord</a>
          </div>
        </header>
        <section id="features" className="py-20 px-4 max-w-6xl mx-auto w-full animate-fade-in">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Caratteristiche Principali</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 flex flex-col items-center bg-[#23244a] rounded-2xl shadow-md mb-4">
              <span className="text-3xl mb-2" style={{color: '#60a5fa'}}>🛡️</span>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-300">Ban & Report Avanzati</h3>
              <p className="text-center text-sm text-gray-200">Sistema di ban e report potente e personalizzabile per la massima sicurezza.</p>
            </div>
            <div className="p-6 flex flex-col items-center bg-[#23244a] rounded-2xl shadow-md mb-4">
              <span className="text-3xl mb-2" style={{color: '#f472b6'}}>🚫</span>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-pink-300">Blacklist Globale</h3>
              <p className="text-center text-sm text-gray-200">Blacklist condivisa tra server, gestita dallo staff WardUnit.</p>
            </div>
            <div className="p-6 flex flex-col items-center bg-[#23244a] rounded-2xl shadow-md mb-4">
              <span className="text-3xl mb-2" style={{color: '#a78bfa'}}>📢</span>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-purple-300">Sistema Report</h3>
              <p className="text-center text-sm text-gray-200">Segnalazione utenti con raccolta prove e gestione staff.</p>
            </div>
            <div className="p-6 flex flex-col items-center bg-[#23244a] rounded-2xl shadow-md mb-4">
              <span className="text-3xl mb-2" style={{color: '#facc15'}}>💎</span>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-yellow-300">Premium & Utility</h3>
              <p className="text-center text-sm text-gray-200">Funzionalità avanzate, utility e supporto prioritario per server premium.</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 bg-white/80 w-full animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Cosa dicono di noi</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
            <div className="p-6 flex-1 bg-white rounded-2xl shadow-md">
              <p className="italic mb-2 text-gray-700">"WardUnit ha salvato il nostro server da un attacco! Consigliatissimo a chi tiene alla sicurezza."</p>
              <span className="font-semibold text-blue-700">- Admin di ServerXYZ</span>
            </div>
            <div className="p-6 flex-1 bg-white rounded-2xl shadow-md">
              <p className="italic mb-2 text-gray-700">"Facile da configurare e con un supporto rapidissimo. Il miglior bot di moderazione!"</p>
              <span className="font-semibold text-blue-700">- Mod di DiscordItalia</span>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 flex flex-col items-center w-full animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Unisciti alla community di WardUnit!</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://discord.gg/jH8feHGm8K" target="_blank" rel="noopener noreferrer" className="transition px-8 py-3 rounded-full font-semibold text-lg shadow border border-blue-400 bg-white text-blue-700 hover:bg-blue-50">Server di Supporto</a>
            <a href="/comandi" className="transition px-8 py-3 rounded-full font-semibold text-lg shadow border border-pink-400 bg-white text-pink-600 hover:bg-pink-50">Vedi i Comandi</a>
          </div>
        </section>
        <footer className="mt-12 py-6 px-4 bg-[#1e293b] text-center text-sm text-gray-400 animate-fade-in">
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
    </div>
  );
}
