import React from 'react';
import { Users, DollarSign, Briefcase, TrendingUp } from 'lucide-react';

function Page() {

  const stats = [
    { title: 'Clientes Totales', value: '1,284', icon: Users, color: 'text-blue-600', backbroundColor: 'bg-blue-100' },
    { title: 'Ventas del Mes', value: '$12,450', icon: DollarSign, color: 'text-green-600', backbroundColor: 'bg-green-100' },
    { title: 'Proyectos Activos', value: '45', icon: Briefcase, color: 'text-purple-600', backbroundColor: 'bg-purple-100' },
    { title: 'Crecimiento', value: '+12.5%', icon: TrendingUp, color: 'text-orange-600', backbroundColor: 'bg-orange-100' },
  ]

  return (
    <div className="p-8 min-h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#001B44]">Panel de Control</h1>
        <p className="text-gray-500">Bienvenido de nuevo, esto es lo que está pasando hoy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase ">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
            </div>
            <div className={`${stat.backbroundColor} ${stat.color} p-3 rounded-lg`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;