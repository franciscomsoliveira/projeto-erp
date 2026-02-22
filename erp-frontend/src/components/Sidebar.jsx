import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ isCollapsed, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  // Estrutura do Menu
  const menuStructure = [
    {
      title: "CADASTROS",
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

  const handleToggleSubmenu = (title) => {
    if (isCollapsed) {
      toggleSidebar();
      setOpenMenu(title);
      return;
    }

    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <aside
      className={`bg-slate-950 border-r  border-slate-900
      transition-all duration-200 flex flex-col h-screen shadow-xl
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
        <div className="cursor-pointer" onClick={() => navigate("/dashboard")}>
          {!isCollapsed ? (
            <span className="font-bold tracking-widest text-sm text-slate-200">
              ERP<span className="text-indigo-400">_PRO</span>
            </span>
          ) : (
            <span className="font-bold text-indigo-400">E</span>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-white transition"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4 px-2 space-y-2 overflow-y-auto">
        {menuStructure.map((group) => {
          const isActiveGroup = group.items.some(
            (item) => location.pathname === item.path,
          );

          const isOpen = openMenu === group.title;

          return (
            <div key={group.title}>
              {/* Botão do grupo */}
              <button
                onClick={() => handleToggleSubmenu(group.title)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                ${
                  isActiveGroup
                    ? "bg-indigo-500/10 text-indigo-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }
                ${isCollapsed ? "justify-center" : "justify-between"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{group.emoji}</span>
                  {!isCollapsed && <span>{group.title}</span>}
                </div>

                {!isCollapsed && (
                  <span
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                )}
              </button>

              {/* Submenu */}
              {!isCollapsed && isOpen && (
                <div className="mt-2 ml-6 space-y-1">
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-3 py-1.5 rounded-md text-xs transition
                        ${
                          isActive
                            ? "text-indigo-400"
                            : "text-slate-500 hover:text-slate-200 hover:translate-x-1"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-800 text-center">
          <span className="text-xs text-slate-500">v 1.0.0</span>
        </div>
      )}
    </aside>
  );
}
