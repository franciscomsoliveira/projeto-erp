import * as Fi from "react-icons/fi";

import { useAuth } from "@/core/auth";
import { useAppTheme } from "@/core/theme/ThemeProvider";

import {
  TopBarContainer,
  LeftArea,
  Title,
  RightArea,
  IconButton,
  UserBox,
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

export function TopBar() {
  const { user } = useAuth();

  const { mode, toggleTheme } = useAppTheme();

  const isDark = mode === "dark";

  return (
    <TopBarContainer>
      <LeftArea>
        <Title>Dashboard</Title>
      </LeftArea>

      <RightArea>
        <IconButton type="button" onClick={toggleTheme}>
          {isDark ? <Fi.FiSun /> : <Fi.FiMoon />}
        </IconButton>

        <IconButton type="button">
          <Fi.FiBell />
        </IconButton>

        <UserBox>
          <UserAvatar>{getInitials(user?.nome)}</UserAvatar>

          <UserInfo>
            <strong>{user?.nome || "Usuário"}</strong>
            <span>{user?.perfil || user?.perfil_nome || "Perfil"}</span>
          </UserInfo>
        </UserBox>
      </RightArea>
    </TopBarContainer>
  );
}
