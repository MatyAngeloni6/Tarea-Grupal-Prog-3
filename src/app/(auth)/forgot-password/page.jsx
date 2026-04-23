"use client";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        
        <div className="bg-white shadow-2xl border-t-4 border-[#001B44] rounded-xl p-8">
          
          
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#001B44] md:text-3xl">
              Recuperar contraseña
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Ingresá tu email o CUIT y te enviaremos instrucciones
            </p>
          </header>

          
          <form className="space-y-5">
            
            
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-[#434750]">
                Email o CUIT
              </label>
              <input
                type="text"
                placeholder="tu@email.com o 20-XXXXXXXX-X"
                className="w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#001B44] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            
            <p className="text-sm text-center text-blue-600">
              Te enviaremos un link para recuperar tu contraseña
            </p>

            
            <div className="pt-2 w-full">
              <button
                type="button"
                className="w-full bg-[#001B44] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#052c67] active:scale-[0.98] transition-all shadow-lg shadow-blue-900/20"
              >
                Enviar solicitud
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