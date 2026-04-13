import { User, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-white px-8 shadow-sm">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold text-[#001d3d] tracking-tight">CRM</span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-blue-600 transition-colors">
          <Bell size={20} />
        </button>
        
        <div className="flex items-center gap-3 border-l pl-6">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-slate-800">Facundo Rullo</span>
            <span className="text-[11px] font-bold text-blue-500 uppercase tracking-tighter">Administrador</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100">
            <User size={22} className="text-blue-600" />
          </div>
        </div>
      </div>
    </header>
  );
}