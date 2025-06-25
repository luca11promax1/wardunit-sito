"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProductManager from "../ProductManager";

export default function StaffPanel() {
  const { data: session, status } = useSession();
  const [isStaff, setIsStaff] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("[DEBUG] session.user:", session?.user);
    if (status === "loading") return;
    if (!session) {
      setIsStaff(false);
      setLoading(false);
      return;
    }
    // Chiama API per verificare se l'utente è staff
    fetch("/api/staff/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ discordId: session && session.user ? (session.user as { id?: string }).id : undefined }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsStaff(data.isStaff);
        setLoading(false);
      })
      .catch(() => {
        setIsStaff(false);
        setLoading(false);
      });
  }, [session, status]);

  if (loading) return <div className="p-8 text-center">Caricamento...</div>;
  if (!isStaff)
    return (
      <div className="p-8 text-center text-red-500 font-bold">
        Accesso negato: questa sezione è riservata allo staff.
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Staff Panel</h1>
      <div className="bg-gray-100 rounded-lg p-6 shadow">
        <p className="text-lg text-gray-700 mb-2">Benvenuto nella dashboard staff!</p>
        <p className="text-gray-500">Qui potrai gestire prodotti, ordini e altre funzioni riservate.</p>
      </div>
      <ProductManager />
    </div>
  );
} 