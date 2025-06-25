import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import AOSInit from "../components/AOSInit";
import AuthButton from "../components/AuthButton";
import ClientLayout from "../components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WardUnit - Sicurezza Discord",
  description: "WardUnit: il bot di sicurezza e moderazione avanzata per Discord. Proteggi la tua community con blacklist globale, anti-nuke, ticket, report e molto altro!",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/funzionalita", label: "Funzionalità" },
  { href: "/comandi", label: "Comandi" },
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#0e1129] to-[#1e293b]`}>
        <AOSInit />
        <ClientLayout>
          {/* NAVBAR */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-[#101828cc] backdrop-blur border-b border-[#1e293b] shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/wardunit-logo.png" alt="WardUnit Logo" width={40} height={40} className="rounded-full" />
                <span className="font-bold text-xl text-white tracking-tight">WardUnit</span>
              </Link>
              <div className="hidden md:flex gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/90 hover:text-blue-400 font-medium px-3 py-2 rounded transition">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1363947467086889192&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow transition text-sm md:text-base"
                >
                  + Aggiungi WardUnit
                </a>
                <AuthButton />
                {/* Mobile menu toggle (placeholder, puoi aggiungere hamburger menu se vuoi) */}
              </div>
            </div>
          </nav>
          {/* SPACER NAVBAR */}
          <div className="h-16" />
          {/* CONTENUTO */}
          <main className="min-h-[calc(100vh-120px)]">{children}</main>
          {/* FOOTER */}
          <footer className="w-full bg-[#1e293b] text-gray-400 py-6 px-4 mt-8 border-t border-[#334155]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Image src="/wardunit-logo.png" alt="WardUnit Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold text-lg text-white">WardUnit</span>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/privacy" className="hover:underline">Privacy</Link>
                <Link href="/termini" className="hover:underline">Termini</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <a href="https://discord.gg/jH8feHGm8K" target="_blank" rel="noopener noreferrer" className="hover:underline">Supporto Discord</a>
              </div>
              <div className="flex gap-3 items-center">
                <a href="https://github.com/lucotto/WardUnit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
                </a>
                <a href="https://twitter.com/wardunit" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.482 0-4.495 2.014-4.495 4.495 0 .352.04.696.116 1.025C7.728 9.37 4.1 7.6 1.67 4.905c-.387.664-.61 1.437-.61 2.26 0 1.56.795 2.936 2.005 3.744-.738-.023-1.432-.226-2.04-.565v.057c0 2.18 1.55 4.002 3.604 4.418-.377.104-.775.16-1.186.16-.29 0-.57-.028-.844-.08.57 1.78 2.23 3.078 4.19 3.113A8.99 8.99 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.253 0 12.77-6.837 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.697Z"/></svg>
                </a>
              </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} WardUnit. Tutti i diritti riservati.</div>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
