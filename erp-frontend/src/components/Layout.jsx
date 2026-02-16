import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B0F1A] text-gray-200 overflow-hidden font-inter">
      {/* 1. Sidebar com largura fixa ou colapsada */}
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
      />

      {/* 2. Área de Conteúdo Principal */}
      <div className="flex flex-col flex-1 min-w-0 relative">
        {/* Glows de Fundo Dinâmicos (Sutis) */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

        {/* 3. Navbar com Glassmorphism */}
        <Navbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        {/* 4. Main com Scroll Interno Suave */}
        <main className=" flex-1 overflow-y-auto p-0">
          {" "}
          {/* Remova o p-6 daqui para controlar no filho */}
          <div className="flex justify-center w-full">
            {" "}
            {/* Container de auxílio para centralização */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
