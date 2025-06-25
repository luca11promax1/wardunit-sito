"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PayPalButton from "./PayPalButton";

interface Order {
  id: number;
  user_id: string;
  amount: number;
  currency: string;
  product: string;
  status: string;
  created_at: string;
  paypal_id?: string;
}

export default function OrdersSection() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = session?.user as { id: string } | undefined;
    if (user?.id) {
      fetch(`/api/orders?user_id=${user.id}`)
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .finally(() => setLoading(false));
    }
  }, [session]);

  if (loading) return <div className="text-white">Caricamento storico ordini...</div>;

  return (
    <section className="w-full max-w-4xl mb-10">
      <h2 className="text-xl font-bold mb-4 text-violet-300">Storico Ordini</h2>
      {orders.length === 0 ? (
        <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-900 via-blue-900 to-violet-950 border border-violet-700 shadow-xl text-white text-center">
          <span className="text-gray-300">Nessun ordine trovato.</span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-white">
            <thead>
              <tr>
                <th>Data</th>
                <th>Prodotto</th>
                <th>Importo</th>
                <th>Stato</th>
                <th>Rinnova</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-[#23264a]">
                  <td>{new Date(o.created_at).toLocaleString()}</td>
                  <td>{o.product}</td>
                  <td>
                    {o.amount} {o.currency}
                  </td>
                  <td>{o.status}</td>
                  <td>
                    <PayPalButton amount={o.amount.toString()} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
} 