"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  active: boolean;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data.filter(p => p.active) : []);
        setError(null);
      })
      .catch(() => setError("Errore nel caricamento prodotti"))
      .finally(() => setLoading(false));
  }, []);

  function handleBuy(product: Product) {
    setSelectedProduct(product);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedProduct(null);
  }

  function handleConfirmPurchase() {
    if (selectedProduct) {
      alert(`Procedi al pagamento per: ${selectedProduct.name} (ID: ${selectedProduct.id})`);
      // Qui potrai integrare il pagamento reale (PayPal, Stripe, ecc.)
      handleCloseModal();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c3a] via-[#312e81] to-[#0e1129] text-white font-sans py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-xl"
          style={{
            background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Shop WardUnit
        </h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto text-pink-200 drop-shadow">
          Sostieni lo sviluppo di WardUnit e sblocca funzionalità premium per il tuo server Discord!
        </p>
        {loading ? (
          <div className="text-blue-300 text-center animate-pulse">Caricamento prodotti...</div>
        ) : error ? (
          <div className="text-red-400 text-center animate-pulse">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-pink-300 text-center">Nessun prodotto disponibile al momento.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">
            {products.map((product) => (
              <div
                key={product.id}
                className="card p-6 flex flex-col items-center bg-white/10 rounded-3xl shadow-2xl border border-pink-400/30 backdrop-blur-md transition-transform hover:scale-105 hover:shadow-pink-400/40 group relative overflow-hidden"
                style={{ boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.25)' }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-2xl z-0 animate-pulse" />
                {product.image_url && (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={192}
                    height={192}
                    className="w-48 h-48 object-contain mb-4 rounded-2xl shadow-lg border-2 border-pink-300/40 bg-white/30 group-hover:scale-110 group-hover:shadow-pink-400/60 transition-transform duration-300 z-10"
                  />
                )}
                <h2
                  className="font-extrabold text-2xl mb-2 text-center drop-shadow-lg tracking-tight z-10"
                  style={{
                    background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {product.name}
                </h2>
                <p className="text-center text-base mb-4 text-pink-100 min-h-[56px] max-h-24 overflow-y-auto z-10">
                  {product.description}
                </p>
                <div className="font-extrabold text-2xl mb-4 text-pink-300 drop-shadow z-10">€ {product.price.toFixed(2)}</div>
                <button
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-400 hover:to-blue-600 transition px-10 py-2 rounded-full font-bold text-lg shadow-lg text-white border-2 border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent mt-auto z-10 group-hover:shadow-pink-400/60 group-hover:scale-105 duration-200"
                  onClick={() => handleBuy(product)}
                >
                  Acquista
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="card p-6 mb-8 text-center bg-white/5 rounded-xl shadow">
          <p className="text-pink-200">Gestisci i tuoi abbonamenti e ordini dalla tua area personale dopo il login.</p>
        </div>
      </div>
      {/* Modal di conferma acquisto */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#181c3a]/80 via-[#f472b6]/30 to-[#0e1129]/80 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-md w-full text-gray-900 relative animate-fade-in border-2 border-pink-300/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-2xl z-0 animate-pulse" />
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 text-2xl font-bold z-10"
              onClick={handleCloseModal}
              aria-label="Chiudi"
            >
              ×
            </button>
            <div className="flex flex-col items-center z-10">
              {selectedProduct.image_url && (
                <Image
                  src={selectedProduct.image_url}
                  alt={selectedProduct.name}
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain mb-4 rounded-2xl shadow-lg border-2 border-pink-300/40 bg-white/30"
                />
              )}
              <h2
                className="font-extrabold text-3xl mb-4 text-center drop-shadow-xl tracking-tight"
                style={{
                  background: 'linear-gradient(90deg, #f472b6 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {selectedProduct.name}
              </h2>
              <p className="text-center text-lg mb-4 text-pink-700">{selectedProduct.description}</p>
              <div className="font-extrabold text-2xl mb-6 text-pink-500 drop-shadow">€ {selectedProduct.price.toFixed(2)}</div>
              <div className="flex gap-4 w-full">
                <button
                  className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-400 hover:to-blue-600 text-white font-bold py-2 rounded-full shadow-lg transition group-hover:shadow-pink-400/60 group-hover:scale-105 duration-200"
                  onClick={handleConfirmPurchase}
                >
                  Procedi al pagamento
                </button>
                <button
                  className="flex-1 bg-gray-200 hover:bg-pink-100 text-pink-700 font-bold py-2 rounded-full shadow-lg transition"
                  onClick={handleCloseModal}
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 