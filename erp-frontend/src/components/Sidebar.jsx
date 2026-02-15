import { Link } from "react-router-dom";

export default function Sidebar({ isCollapsed }) {
  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/dashboard" },
    { name: "Calendário", icon: "📅", path: "/calendar" },
    { name: "Contatos", icon: "📞", path: "/contacts" },
    { name: "Faturas", icon: "📄", path: "/invoices" },
  ];

  return (
    <aside
      className={`bg-gray-900 border-r border-gray-800 transition-all duration-300 hidden md:flex flex-col 
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-800 overflow-hidden">
        <div className="bg-indigo-600 min-w-8 h-8 rounded flex items-center justify-center font-bold text-white">
          A
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-bold text-white text-xl tracking-tight">
            AdminPro
          </span>
        )}
      </div>

      <nav className="flex-1 mt-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="text-xl min-w-8">{item.icon}</span>
            {!isCollapsed && (
              <span className="ml-3 text-sm font-medium whitespace-nowrap opacity-100 transition-opacity">
                {item.name}
              </span>
            )}

            {/* Tooltip simples para quando estiver contraído */}
            {isCollapsed && (
              <div className="absolute left-16 bg-indigo-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {item.name}
              </div>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
