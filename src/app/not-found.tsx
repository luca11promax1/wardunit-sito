import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Pagina non trovata</h2>
      <p className="mb-6">La pagina che cerchi non esiste o è stata spostata.</p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-lg shadow">Torna alla Home</Link>
    </div>
  );
} 