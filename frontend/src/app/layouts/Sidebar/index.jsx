import { NavLink } from "react-router-dom";
import * as Fi from "react-icons/fi";

import { useAuth } from "@/core/auth";

import {
  Overlay,
  SidebarContainer,
  Brand,
  Nav,
  NavItem,
  Icon,
  Label,
  Footer,
} from "./styles";

const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <Fi.FiGrid />,
  },
  {
    label: "Usuários",
    path: "/usuarios",
    icon: <Fi.FiUsers />,
  },
];

export function Sidebar({ isOpen = false, onClose }) {
  const { logout } = useAuth();

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <SidebarContainer $isOpen={isOpen}>
        <Brand>
          <strong>ERP</strong>

          <button type="button" onClick={onClose}>
            <Fi.FiX />
          </button>
        </Brand>

        <Nav>
          {menu.map((item) => (
            <NavItem
              key={item.path}
              as={NavLink}
              to={item.path}
              onClick={onClose}
            >
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </Nav>

        <Footer>
          <NavItem as="button" type="button" onClick={logout}>
            <Icon>
              <Fi.FiLogOut />
            </Icon>

            <Label>Sair</Label>
          </NavItem>
        </Footer>
      </SidebarContainer>
    </>
  );
}
