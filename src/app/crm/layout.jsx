import React from 'react'
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Home } from 'lucide-react';

function layout({ children }) {
  const menus = [
    {id: "1", title: "Inicio", href: "/crm", icon: Home},
    {id: "2", title: "Clientes", href: "/crm/customer", icon: User},
  ]

  return (
    <div className='flex min-h-screen'> 
        <aside className="w-72 py-8 h-screen sticky top-0 bg-[#001B44] flex flex-col items-center" >
          <div className="text-center mb-8">
            <p className="text-2xl font-extrabold text-white tracking-tight">CRM</p>
          </div>
          <div className="space-y-4 flex flex-col w-full">
            {menus.map((menu, index) => {
              const Icon = menu.icon
              return(
                <Link href={menu.href} className="group flex items-center gap-4 py-4 ml-6 pl-8 transition-colors hover:bg-white rounded-l-full cursor-pointe" key={index}>
                  <Icon size={25} className='text-white  group-hover:text-[#001B44]'/>
                  <p className="text-xl font-semibold text-white group-hover:text-[#001B44]">
                    {menu.title}
                  </p>
                </Link>
              )
            })}
          </div>
        </aside>
        <div className='flex flex-col flex-1'>
          <Header />
          <main className="flex-1 bg-white">
            {children}
          </main>
          <Footer />
        </div>
    </div>
  )
}

export default layout