"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Te enviamos un email para resetear tu contraseña.");
      } else {
        setMessage(data.error || "Ocurrió un error.");
      }
    } catch (error) {
      setMessage("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-2xl border-t-4 border-[#001B44] rounded-xl p-8">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold text-[#001B44]">
              Recuperar contraseña
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#001B44] focus:border-transparent outline-none transition-all"
            />

            {message && <p className="text-sm text-center text-blue-600">{message}</p>}

            <button
              disabled={loading}
              className="w-full bg-[#001B44] text-white py-3 rounded-lg"
            >
              {loading ? "Enviando..." : "Enviar solicitud"}
            </button>

            <Link href="/login" className="block text-center text-xs text-xs font-semibold text-[#3269E6] hover:underline">
              Volver al login
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}