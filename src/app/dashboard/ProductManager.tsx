"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export default function ProductManager() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    active: true,
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Carica prodotti
  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch(() => setError("Errore nel caricamento prodotti"))
      .finally(() => setLoading(false));
  }, [success]);

  // Gestione form
  function openForm(product?: Product) {
    if (product) {
      setEditProduct(product);
      setForm({
        name: product.name,
        description: product.description || "",
        price: product.price.toString(),
        image_url: product.image_url || "",
        active: product.active,
      });
    } else {
      setEditProduct(null);
      setForm({ name: "", description: "", price: "", image_url: "", active: true });
    }
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditProduct(null);
    setForm({ name: "", description: "", price: "", image_url: "", active: true });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    const discordId = session && session.user ? (session.user as { id?: string }).id : undefined;
    const payload = {
      discordId,
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      image_url: form.image_url,
      active: form.active,
    };
    try {
      const res = await fetch(
        editProduct ? `/api/products/${editProduct.id}` : "/api/products",
        {
          method: editProduct ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error("Errore salvataggio prodotto");
      setSuccess(editProduct ? "Prodotto aggiornato!" : "Prodotto aggiunto!");
      closeForm();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Sei sicuro di voler eliminare questo prodotto?")) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    const discordId = session && session.user ? (session.user as { id?: string }).id : undefined;
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discordId }),
      });
      if (!res.ok) throw new Error("Errore eliminazione prodotto");
      setSuccess("Prodotto eliminato!");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestione Prodotti</h2>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold shadow"
          onClick={() => openForm()}
        >
          + Aggiungi prodotto
        </button>
      </div>
      {loading ? (
        <div className="text-blue-400">Caricamento prodotti...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Descrizione</th>
                <th className="px-4 py-2">Prezzo</th>
                <th className="px-4 py-2">Stato</th>
                <th className="px-4 py-2">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b">
                  <td className="px-4 py-2 text-center text-gray-900">{p.id}</td>
                  <td className="px-4 py-2 text-gray-900">{p.name}</td>
                  <td className="px-4 py-2 text-gray-900">{p.description}</td>
                  <td className="px-4 py-2 text-gray-900">€ {p.price.toFixed(2)}</td>
                  <td className="px-4 py-2 text-gray-900">
                    {p.active ? (
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Attivo</span>
                    ) : (
                      <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs">Disattivo</span>
                    )}
                  </td>
                  <td className="px-4 py-2 flex gap-2 text-gray-900">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold"
                      onClick={() => openForm(p)}
                    >
                      Modifica
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-bold"
                      onClick={() => handleDelete(p.id)}
                      disabled={saving}
                    >
                      Elimina
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Form aggiunta/modifica prodotto */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative"
          >
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
              onClick={closeForm}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">
              {editProduct ? "Modifica prodotto" : "Aggiungi prodotto"}
            </h3>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-1">Nome</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-gray-900"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-1">Descrizione</label>
              <textarea
                className="w-full border rounded px-3 py-2 text-gray-900"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-1">Prezzo (€)</label>
              <input
                type="number"
                step="0.01"
                className="w-full border rounded px-3 py-2 text-gray-900"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-1">URL Immagine</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-gray-900"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                id="active"
              />
              <label htmlFor="active" className="text-gray-700 font-semibold">Attivo</label>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded font-bold w-full"
              disabled={saving}
            >
              {saving ? "Salvataggio..." : editProduct ? "Salva modifiche" : "Aggiungi prodotto"}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        </div>
      )}
      {/* Success message */}
      {success && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          {success}
          <button className="ml-4 text-white font-bold" onClick={() => setSuccess(null)}>
            ×
          </button>
        </div>
      )}
    </div>
  );
} 