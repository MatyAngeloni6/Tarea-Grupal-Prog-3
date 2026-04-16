import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-2xl border-t-4 border-[#001B44] rounded-xl p-8">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#001B44] md:text-3xl">
              Iniciar sesión
            </h1>
            <p className="text-gray-500 text-sm mt-2">Ingresá tus credenciales para continuar</p>
          </header>

          <form className="space-y-5" action="#">
            <div>
              <label 
                htmlFor="cuit" 
                className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-[#434750]"
              >
                CUIT
              </label>
              <input
                type="text"
                name="cuit"
                id="cuit"
                className="w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#001B44] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                placeholder="20-XXXXXXXX-X"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label 
                  htmlFor="password" 
                  className="text-xs font-bold uppercase tracking-wider text-[#434750]"
                >
                  Contraseña
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#3269E6] hover:underline"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#001B44] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="pt-2 w-full">
              <Link
                href="/crm"
                className="block w-full text-center bg-[#001B44] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#052c67] active:scale-[0.98] transition-all shadow-lg shadow-blue-900/20"
              >
                Ingresar al sistema
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default page;
