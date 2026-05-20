import { useAuth } from "@/core/auth";
import { getMenuRoutes } from "@/app/routes/routeHelpers";

import { SidebarItem } from "./SidebarItem";
import { SidebarSubmenu } from "./SidebarSubmenu";

import { Container, Nav } from "./styles";

export function Sidebar({
  isMobileOpen,
  isExpanded,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}) {
  const { user } = useAuth();

  const routes = getMenuRoutes(user);

  return (
    <Container
      $isMobileOpen={isMobileOpen}
      $isExpanded={isExpanded}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Nav>
        {routes.map((route) =>
          route.children ? (
            <SidebarSubmenu
              key={route.key}
              route={route}
              isExpanded={isExpanded || isMobileOpen}
              onNavigate={onNavigate}
            />
          ) : (
            <SidebarItem
              key={route.key}
              route={route}
              isExpanded={isExpanded || isMobileOpen}
              onClick={onNavigate}
            />
          ),
        )}
      </Nav>
    </Container>
  );
}
