import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

import {
  LayoutContainer,
  BodyArea,
  TopbarArea,
  MainArea,
  Content,
} from "./styles";

export function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <LayoutContainer>
      <TopbarArea>
        <TopBar
          mobileOpen={mobileOpen}
          onOpenMobile={() => setMobileOpen(true)}
          onCloseMobile={() => setMobileOpen(false)}
        />
      </TopbarArea>

      <BodyArea>
        <Sidebar
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <MainArea>
          <Content>{children}</Content>
        </MainArea>
      </BodyArea>
    </LayoutContainer>
  );
}
