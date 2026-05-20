import { useState } from "react";

import { Sidebar } from "@/shared/components/navigation/Sidebar";
import { TopBar } from "@/shared/components/navigation/TopBar";

import { LayoutContainer, MainArea, Content, MobileOverlay } from "./styles";

export function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((state) => !state);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function expandSidebar() {
    setIsSidebarExpanded(true);
  }

  function collapseSidebar() {
    setIsSidebarExpanded(false);
  }

  return (
    <LayoutContainer>
      <Sidebar
        isMobileOpen={isSidebarOpen}
        isExpanded={isSidebarExpanded}
        onNavigate={closeSidebar}
        onMouseEnter={expandSidebar}
        onMouseLeave={collapseSidebar}
      />

      {isSidebarOpen && <MobileOverlay onClick={closeSidebar} />}

      <MainArea $expanded={isSidebarExpanded}>
        <TopBar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Content>{children}</Content>
      </MainArea>
    </LayoutContainer>
  );
}
