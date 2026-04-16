import { Building2, IdCard, Mail, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function RegistrarCliente() {
  return (
    <div className="max-w-2xl bg-white rounded-lg shadow-md border-t-4 border-[#001d3d] p-8">
      <h2 className="text-2xl font-bold text-[#001d3d] mb-2">Datos del Cliente</h2>
      <p className="text-sm text-gray-500 mb-8">Complete la información legal y de contacto para dar de alta al nuevo integrante de la cartera.</p>
      
      <form className="space-y-6">
        <div className='text-black'>
          <label className="text-xs font-bold text-gray-400 uppercase">Razón Social</label>
          <div className="relative mt-1">
            <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
            <input type="text" placeholder="Nombre legal de la empresa" className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-black">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">CUIT/CUIL</label>
            <div className="relative mt-1">
              <IdCard className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="text" placeholder="XX-XXXXXXXX-X" className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Estado</label>
            <div className="relative mt-1">
              <input type="text" value="Activo" readOnly className="w-full bg-gray-100 border-none rounded-md py-3 pl-4 pr-10 font-medium" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-black">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Correo Electrónico</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="email" placeholder="ejemplo@correo.com" className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Teléfono</label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="text" placeholder="+54 11 ...." className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Link href="/crm/customer" className="text-gray-500 font-medium hover:underline cursor-pointer">Cancelar</Link>
          <button type="submit" className="bg-[#001d3d] text-white px-10 py-3 rounded-md font-bold hover:bg-blue-900 transition-colors cursor-pointer">Guardar Cliente</button>
        </div>
      </form>
    </div>
  );
}