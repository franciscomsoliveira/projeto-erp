import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ isCollapsed, toggleSidebar }) {
  // const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // Estrutura do Menu
  const menuStructure = [
    {
      title: "Cadastros",
      emoji: "📁",
      items: [
        { name: "Produtos", path: "/produtos" },
        { name: "Operacional", path: "/operacional" },
        { name: "Administrativo", path: "/admin" },
      ],
    },
    {
      title: "Movimentações",
      emoji: "🔄",
      items: [
        { name: "Vendas", path: "/vendas" },
        { name: "Estoque", path: "/estoque/entrada" },
        { name: "Financeiro", path: "/financeiro" },
      ],
    },
    {
      title: "Relatórios",
      emoji: "📊",
      items: [
        { name: "Vendas", path: "/relatorios/vendas" },
        { name: "DRE", path: "/relatorios/dre" },
      ],
    },
    {
      title: "Configurações",
      emoji: "⚙️",
      items: [
        { name: "Empresa", path: "/config/empresa" },
        { name: "Backup", path: "/config/backup" },
      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const handleToggleSubmenu = (name) => {
    // Se estiver colapsado, expande a sidebar primeiro
    if (isCollapsed) {
      toggleSidebar();
      setOpenMenu(name); // Abre o menu clicado
      return;
    }

    // Lógica de Acordeão:
    // Se o menu clicado já estiver aberto, fecha ele (null).
    // Se for outro, define ele como o único aberto.
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <aside
      className={`bg-[#0B0F1A] border-r border-white/5 transition-all duration-500 flex flex-col h-screen shadow-2xl z-40
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo Area */}
      <div
        className={`h-20 flex items-center border-b border-white/5 shrink-0 transition-all duration-500 ${
          isCollapsed ? "justify-center" : "px-6"
        }`}
      >
        {/* Container da Logo - Agora com navegação */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => navigate("/dashboard")} // Navega para o dashboard
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-10 h-10 bg-[#161B2C] border border-white/10 rounded-lg flex items-center justify-center font-black text-transparent bg-clip-text bg-linear-to-br from-white to-gray-400 text-xl shadow-inner">
              E
            </div>
          </div>

          {!isCollapsed && (
            <span className="ml-3 font-bold text-gray-100 text-sm tracking-[0.2em] uppercase animate-in fade-in slide-in-from-left-2 duration-500">
              ERP<span className="text-indigo-500">_</span>PRO
            </span>
          )}
        </div>

        {/* Botão de Toggle Opcional (apenas quando não estiver colapsado) */}
        {!isCollapsed && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita navegar ao clicar apenas para colapsar
              toggleSidebar();
            }}
            className="ml-auto text-gray-500 hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 no-scrollbar space-y-2">
        {menuStructure.map((group) => {
          const isActiveGroup = group.items.some(
            (item) => location.pathname === item.path,
          );
          const isOpen = openMenu === group.title;

          return (
            <div key={group.title} className="w-full">
              {/* Main Button */}
              <button
                onClick={() => handleToggleSubmenu(group.title)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group relative outline-none
                ${isCollapsed ? "justify-center" : "justify-start"}
                ${isActiveGroup ? "bg-indigo-600/10 text-indigo-400" : "text-gray-400 hover:bg-white/5 hover:text-gray-100"}
                active:scale-95`}
              >
                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center transition-all duration-300 shrink-0
                  ${isCollapsed ? "w-12 h-12 bg-white/2 border border-white/5 rounded-xl group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]" : "w-8 h-8"} 
                  ${isActiveGroup ? "bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]" : ""}`}
                >
                  <span
                    className={`text-xl transition-transform duration-300 leading-none 
                    ${isCollapsed ? "group-hover:scale-125" : "group-hover:scale-110"}`}
                  >
                    {group.emoji}
                  </span>
                </div>

                {/* Text and Arrow (Hidden when collapsed) */}
                {!isCollapsed && (
                  <>
                    <span
                      className={`ml-3 text-[11px] font-bold tracking-widest uppercase flex-1 text-left transition-all duration-300 ${isActiveGroup ? "text-gray-100" : "text-gray-400"}`}
                    >
                      {group.title}
                    </span>
                    <span
                      className={`transition-transform duration-500 text-gray-600 ${isOpen ? "rotate-180 text-indigo-500" : ""}`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </>
                )}

                {/* Active Indicator Bar */}
                {isActiveGroup && !isCollapsed && (
                  <div className="absolute left-0 w-1 h-6 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
                )}
              </button>

              {/* Submenu Items */}
              {!isCollapsed && isOpen && (
                <div className="mt-2 ml-7 space-y-1 relative animate-in slide-in-from-top-2 duration-300">
                  <div className="absolute left-0 top-0 w-px h-full bg-linear-to-b from-indigo-500/50 to-transparent" />
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-5 py-2 text-[11px] font-medium transition-all duration-200 relative group/item
                      ${location.pathname === item.path ? "text-indigo-400" : "text-gray-500 hover:text-gray-200 hover:translate-x-1"}`}
                    >
                      {location.pathname === item.path && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)] -ml-0.75" />
                      )}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer / Version (Optional) */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/5 text-center">
          <span className="text-[10px] text-gray-600 uppercase tracking-tighter">
            v 1.0.0
          </span>
        </div>
      )}
    </aside>
  );
}
