import { FiBell, FiMenu, FiUser, FiX, FiLogOut } from "react-icons/fi";

import { useAuth } from "@/core/auth";

import {
  Container,
  LeftArea,
  MenuButton,
  Brand,
  StoreInfo,
  Actions,
  IconButton,
  Avatar,
} from "./styles";

function getInitials(name) {
  if (!name) return "U";

  return name
    .split(" ")
    .slice(0, 2)
    .map((item) => item[0])
    .join("")
    .toUpperCase();
}

export function TopBar({ onToggleSidebar, isSidebarOpen }) {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <LeftArea>
        <MenuButton type="button" onClick={onToggleSidebar}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <Brand>FlowERP</Brand>

        {user?.loja_nome && <StoreInfo>{user.loja_nome}</StoreInfo>}
      </LeftArea>

      <Actions>
        <IconButton type="button">
          <FiBell />
        </IconButton>

        <Avatar>{user?.nome ? getInitials(user.nome) : <FiUser />}</Avatar>
        <IconButton onClick={handleLogout}>
          <FiLogOut size={18} />
        </IconButton>
      </Actions>
    </Container>
  );
}
