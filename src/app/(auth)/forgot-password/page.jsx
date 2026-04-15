import React from 'react'
import Link from 'next/link'
import { KeyRound, User } from 'lucide-react'

function page() {
  return (
    <main className="flex min-h-screen max-h-screen items-center justify-center bg-gray-900 ">
      <section className=" dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <text className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          
        CRM    

      </text>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10">
                  Ingrese el correo con el que se registro
              </h2>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <div className="flex items-center gap-2">
                      <label htmlFor="email" className="item-center flex gap-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"><User  /></label>

                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="correo@gmail.com" required=""/>
                    </div>
                  </div>
                  {/* <div>
                    <div className="flex items-center gap-2">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><KeyRound /></label>
                    
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    </div> */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Se enviara un codigo de acceso para validar su identidad 
                    </p>
                  <button type="submit" className="hover:scale-105 border-1 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer">Enviar codigo</button>
                  <div className="text-end ">
                      
                      <a href="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Probar otro metodo</a>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>

    </main>
  )
}

export default page
