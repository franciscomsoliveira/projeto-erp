import { useAuth } from "../core/auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shadow-md">
      {/* Lado Esquerdo */}
      <div className="flex items-center gap-4">
        {/* Botão Toggle (mobile) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-slate-400 hover:text-white transition"
        >
          ☰
        </button>

        {/* Estabelecimento */}
        <div className="hidden sm:flex flex-col border-l border-slate-700 pl-4">
          <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">
            Estabelecimento
          </span>
          <span className="text-sm text-indigo-400 font-semibold leading-tight">
            {user?.estabelecimento?.nome || "Unidade Matriz"}
          </span>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="flex items-center gap-6">
        {/* Usuário */}
        <div className="flex items-center gap-3 pr-4 border-r border-slate-800">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-100 leading-none">
              {user?.nome || "Usuário"}
            </p>
            <p className="text-[11px] text-slate-500 mt-1 italic">
              {user?.perfil?.nome || "Administrador"}
            </p>
          </div>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
            {user?.nome ? user.nome.charAt(0).toUpperCase() : "U"}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition font-medium text-sm active:scale-95"
        >
          <span className="text-base">🚪</span>
          <span className="hidden md:inline">Sair</span>
        </button>
      </div>
    </header>
  );
}
