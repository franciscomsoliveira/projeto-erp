import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex h-screen w-full bg-gray-950 overflow-hidden">
      {/* Aside Modular */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Container Direto */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header Fixo */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main com Scroll Independente */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-950 custom-scrollbar">
          <div className="max-w-400 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
