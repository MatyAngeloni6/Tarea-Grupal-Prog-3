"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = useSearchParams().get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Contraseña actualizada correctamente");

        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMessage(data.error || "Error al actualizar");
      }
    } catch {
      setMessage("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  // ⚠️ Sin token
  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-red-500">Token inválido o faltante</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-2xl border-t-4 border-[#001B44] rounded-xl p-8">
          
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#001B44] md:text-3xl">
              Nueva contraseña
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Ingresá tu nueva contraseña
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label
                className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-[#434750]"
              >
                Nueva contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#001B44] focus:border-transparent outline-none transition-all"
              />
            </div>

            {message && (
              <p className="text-sm text-center text-gray-600">
                {message}
              </p>
            )}

            <div className="pt-2 w-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#001B44] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#052c67] active:scale-[0.98] transition-all shadow-lg shadow-blue-900/20 disabled:opacity-50"
              >
                {loading ? "Guardando..." : "Cambiar contraseña"}
              </button>
            </div>

            <div className="text-center">
              <Link
                href="/login"
                className="text-xs font-semibold text-[#3269E6] hover:underline"
              >
                Volver al login
              </Link>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}