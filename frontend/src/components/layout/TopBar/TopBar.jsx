import {
  FiBell,
  FiMail,
  FiMenu,
  FiX,
  FiSearch,
  FiSun,
  FiMoon,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiMapPin,
} from "react-icons/fi";

import { useAuth } from "../../../context/AuthContext";
import { useTheme } from "styled-components";
import { useState } from "react";

import {
  TopBarContainer,
  LeftArea,
  MobileMenuButton,
  Brand,
  StoreInfo,
  SearchBox,
  Actions,
  IconButton,
  NotificationDot,
  UserWrapper,
  UserTooltip,
  TooltipDivider,
  TooltipItem,
  UserButton,
  UserAvatar,
  UserInfo,
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

export function TopBar({ onOpenMobile, onCloseMobile, mobileOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isDark = theme.themeMode === "dark";

  return (
    <TopBarContainer>
      <LeftArea>
        <MobileMenuButton
          type="button"
          onClick={mobileOpen ? onCloseMobile : onOpenMobile}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>

        <Brand>
          <strong>FlowERP</strong>
        </Brand>
      </LeftArea>

      <SearchBox>
        <FiSearch />
        <input placeholder="Buscar módulos, relatórios..." />
      </SearchBox>

      <Actions>
        <IconButton type="button" aria-label="Alertas">
          <FiBell />
          <NotificationDot />
        </IconButton>

        <IconButton type="button" aria-label="Mensagens">
          <FiMail />
        </IconButton>

        <IconButton
          className="desktop-only"
          type="button"
          aria-label="Alterar tema"
          onClick={theme.toggleTheme}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </IconButton>
      </Actions>
      <UserWrapper>
        <UserButton
          type="button"
          aria-label="Menu do usuário"
          onClick={() => setProfileOpen((prev) => !prev)}
        >
          <UserAvatar>{getInitials(user?.nome)}</UserAvatar>

          <FiChevronDown />
        </UserButton>

        <UserTooltip $open={profileOpen}>
          <UserInfo>
            <strong>{user?.nome || "Usuário"}</strong>
            <span>{user?.login || "login"}</span>
            <small>{user?.email || ""}</small>
          </UserInfo>

          <TooltipDivider />

          <TooltipItem>
            <FiUser />
            <span>Minha conta</span>
          </TooltipItem>

          <TooltipItem>
            <FiSettings />
            <span>Configurações</span>
          </TooltipItem>

          <TooltipItem onClick={logout}>
            <FiLogOut />
            <span>Sair</span>
          </TooltipItem>
        </UserTooltip>
      </UserWrapper>
    </TopBarContainer>
  );
}
