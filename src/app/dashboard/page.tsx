"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import OrdersSection from "./OrdersSection";

const PayPalButton = dynamic(() => import("./PayPalButton"), { ssr: false });

interface Premium {
  guild_id: string;
  expires_at: string | null;
  active_features: string | null;
}

interface DiscordUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const gradientCard = "bg-gradient-to-br from-blue-800 via-violet-800 to-blue-900 border border-blue-700 shadow-xl";
const badgeActive = "inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-500 text-white ml-2";
const badgeExpired = "inline-block px-2 py-1 rounded-full text-xs font-semibold bg-red-500 text-white ml-2";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [premiums, setPremiums] = useState<Premium[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isStaff, setIsStaff] = useState(false);

  const user = session?.user as DiscordUser | undefined;

  // Gestione ritorno da PayPal
  const paypalStatus = searchParams.get("paypal");
  const paypalToken = searchParams.get("token");

  useEffect(() => {
    if (status === "authenticated" && user?.id) {
      fetch(`/api/premium?manager_id=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setPremiums(data);
            setError(null);
          } else {
            setPremiums([]);
            setError("Errore nel recupero dei dati premium.");
          }
        })
        .catch(() => {
          setPremiums([]);
          setError("Errore di rete o del server.");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [status, user]);

  useEffect(() => {
    if (status === "authenticated" && user?.id) {
      fetch("/api/staff/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discordId: user.id }),
      })
        .then((res) => res.json())
        .then((data) => setIsStaff(data.isStaff))
        .catch(() => setIsStaff(false));
    }
  }, [status, user]);

  if (status === "loading" || loading) {
    return <div className="text-white">Caricamento...</div>;
  }

  if (status !== "authenticated" || !user?.id) {
    return <div className="text-white">Devi essere autenticato per vedere la dashboard.</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] to-[#0e1129] py-10 px-4 flex flex-col items-center">
      {/* Profilo utente */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mb-8 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12">
        <img src={user.image || "/wardunit-logo.png"} alt="avatar" width={96} height={96} className="rounded-full border-4 border-blue-700 shadow-lg" />
        <div className="flex-1">
          <div className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
            {user.name}
            {isStaff && (
              <a
                href="/dashboard/staff"
                className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full ml-2 transition-all shadow"
                title="Vai al pannello staff"
              >
                Staff Panel
              </a>
            )}
          </div>
          <div className="text-blue-200 text-sm mb-1">{user.email}</div>
          <div className="text-blue-400 text-xs font-mono">ID: {user.id}</div>
        </div>
        <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold shadow">Logout</button>
      </motion.div>

      {/* Abbonamenti premium */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-bold mb-4 text-green-300">Abbonamenti Premium</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {premiums.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className={"text-white text-lg col-span-2 text-center"}>
              Non hai abbonamenti premium attivi.
            </motion.div>
          ) : (
            premiums.map((p, i) => {
              const expires = p.expires_at ? new Date(p.expires_at) : null;
              const isActive = !expires || expires > new Date();
              return (
                <motion.div
                  key={p.guild_id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-6 ${gradientCard} flex flex-col gap-2`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-base text-blue-200">Server ID: {p.guild_id}</span>
                    <span className={isActive ? badgeActive : badgeExpired}>
                      {isActive ? "Attivo" : "Scaduto"}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    Funzionalità:
                    <span className="ml-2 text-green-300">
                      {Array.isArray(p.active_features)
                        ? p.active_features.join(", ")
                        : p.active_features}
                    </span>
                  </div>
                  <div className="text-sm text-blue-100">
                    Scadenza: {expires ? expires.toLocaleString() : "Mai"}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </section>

      {/* Storico ordini */}
      <OrdersSection />

      {/* Notifiche (placeholder) */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-bold mb-4 text-blue-300">Notifiche</h2>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-900 via-violet-900 to-blue-950 border border-blue-700 shadow-xl text-white text-center">
          <span className="text-gray-300">(Qui riceverai notifiche su scadenze, promozioni, novità...)</span>
        </div>
      </section>

      {/* Azioni rapide */}
      <section className="w-full max-w-4xl mb-10 flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center">
          <span className="font-semibold text-blue-900 mb-2">Metodo di pagamento</span>
          <PayPalButton />
        </div>
        <a href="https://discord.com/oauth2/authorize?client_id=TUO_CLIENT_ID&scope=bot" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all">Aggiungi WardUnit al tuo server</a>
      </section>
    </div>
  );
} 