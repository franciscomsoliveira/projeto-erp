import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

import { LayoutContainer, MainArea, Content } from "./styles";

export function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <LayoutContainer>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <MainArea>
        <TopBar />

        <Content>{children}</Content>
      </MainArea>
    </LayoutContainer>
  );
}
