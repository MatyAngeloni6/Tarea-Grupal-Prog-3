import React from 'react'


function page() {
  return (
    <main className="flex min-h-screen max-h-screen items-center justify-center bg-white ">
    <section className=" bg-white">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <text className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

      </text>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white">
          <div className="shadow-xl border-t-4 border-[#001B44] rounded-t-lg p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#001B44] md:text-2xl text-center mb-10">
                  Iniciar sesión
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div> 
                    <p className="p-1 text-sm font-medium text-[#434750]">CUIT</p>
                    <div className="flex items-center gap-2">
                      <label htmlFor="email" className="item-center flex gap-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>

                      <input type="email" name="email" id="email" className=" text-gray-900 bg-gray-100 border border-gray-300  rounded-lg focus:border-primary-600 w-full p-2.5 dark:placeholder-gray-400" placeholder="20-XXXXXXXX-X" required=""/>
                    </div>
                  </div>
                  <div>

                    <div className="flex justify-between items-center w-full">
                      <p className="p-1 text-sm  text-[#434750]">CONTRASEÑA</p>
                      <a href="/forgot-password" className="text-sm font-medium  hover:underline text-[#3269E6]">Olvido su contraseña?</a>
                    </div>


                    <div className="flex items-center gap-2">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-100 border border-gray-300 rounded-lg block w-full p-2.5 dark:placeholder-gray-400 text-gray-900" required=""/>
                    </div>
                  </div>

                  <button type="submit" className="hover:scale-105 w-full text-white bg-[#001B44] hover:bg-[#001B44] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer">Iniciar sesión</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>

    </main>
  )
}

export default page
