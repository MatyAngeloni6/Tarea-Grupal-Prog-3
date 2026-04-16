import { Building2, IdCard, Mail, Phone, ChevronDown, ArrowLeft } from 'lucide-react';

export default function DetalleCliente() {
  return (
    <div className="max-w-2xl bg-white rounded-lg shadow-md border-t-4 border-[#001d3d] p-8">
      <h2 className="text-2xl font-bold text-[#001d3d] mb-8">Datos del Cliente</h2>
      
      <form className="space-y-6">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase">Razón Social</label>
          <div className="relative mt-1">
            <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
            <input 
              type="text" 
              defaultValue="Empresa Anonima 123" 
              className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4 text-gray-700 outline-none" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* CUIT */}
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">CUIT/CUIL</label>
            <div className="relative mt-1">
              <IdCard className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                defaultValue="00-00000000-0" 
                className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4 text-gray-700 outline-none" 
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Estado</label>
            <div className="relative mt-1">
              <input 
                type="text" 
                value="Activo" 
                readOnly 
                className="w-full bg-gray-100 border-none rounded-md py-3 pl-4 pr-10 font-medium text-gray-700" 
              />
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Correo Electrónico</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="email" 
                defaultValue="empresa@anonima.com" 
                className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4 text-gray-700 outline-none" 
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Teléfono</label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                defaultValue="+54 351 5453897" 
                className="w-full bg-gray-100 border-none rounded-md py-3 pl-10 pr-4 text-gray-700 outline-none" 
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="button" 
            className="flex items-center gap-2 bg-[#001d3d] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-900 transition-all active:scale-95"
          >
            <ArrowLeft size={18} />
            Volver
          </button>
        </div>
      </form>
    </div>
  );
}