import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Área principal */}
      <div className="flex flex-col flex-1 min-w-0 relative">
        {/* Glows suaves */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Navbar */}
        <Navbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        {/* Conteúdo */}
        <main className="flex-1 overflow-y-auto relative bg-slate-950/60 backdrop-blur-[2px]">
          <div className="flex justify-center w-full p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
