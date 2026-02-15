import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shadow-md">
      {/* Lado Esquerdo: Toggle e Localização */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 transition-colors"
          title="Alternar Menu"
        >
          <span className="text-xl font-bold">☰</span>
        </button>

        <div className="hidden sm:flex flex-col border-l border-gray-700 pl-4">
          <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
            Estabelecimento
          </span>
          <span className="text-sm text-indigo-400 font-semibold leading-tight">
            {user?.estabelecimento?.nome || "Unidade Matriz"}
          </span>
        </div>
      </div>

      {/* Lado Direito: Perfil e Logout */}
      <div className="flex items-center gap-6">
        {/* Informações do Usuário */}
        <div className="flex items-center gap-3 pr-4 border-r border-gray-800">
          <div className="text-right">
            <p className="text-sm font-bold text-white leading-none">
              {user?.nome || "Usuário"}
            </p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium italic">
              {user?.perfil?.nome || "Administrad"}
            </p>
          </div>

          {/* Avatar (Iniciais do Nome) */}
          <div className="bg-[linear-gradient(to_right,var(--color-indigo-600),var(--color-purple-700))]">
            {user?.nome ? user.nome.charAt(0).toUpperCase() : "U"}
          </div>
        </div>

        {/* Botão de Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium text-sm"
        >
          <span className="text-lg">🚪</span>
          <span className="hidden md:inline">Sair</span>
        </button>
      </div>
    </header>
  );
}
