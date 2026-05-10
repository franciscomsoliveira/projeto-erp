import styled, { css } from "styled-components";

const collapsedWidth = "72px";

export const Overlay = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    display: block;
    position: fixed;

    top: ${({ theme }) => theme.layout.topbarHeight};
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(6px);

    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

    transition: opacity
      ${({ $isOpen, theme }) =>
        $isOpen ? theme.animation.enter : theme.animation.leave};

    z-index: 90;
  }
`;

export const SidebarContainer = styled.aside`
  width: ${({ $isHovered, theme }) =>
    $isHovered ? theme.layout.sidebarWidth : collapsedWidth};

  position: fixed;
  top: ${({ theme }) => theme.layout.topbarHeight};
  left: 0;

  height: calc(100vh - ${({ theme }) => theme.layout.topbarHeight});

  display: flex;
  flex-direction: column;

  background: ${({ theme }) =>
    theme.colors.glassSidebar || theme.colors.surface};

  backdrop-filter: blur(18px) saturate(180%);

  border-right: 1px solid
    ${({ theme }) => theme.colors.glassBorder || theme.colors.border};

  box-shadow: ${({ theme }) => theme.colors.shadow};

  overflow-x: hidden;
  overflow-y: auto;

  z-index: 200;

  transition:
    width ${({ theme }) => theme.animation.sidebar},
    transform ${({ theme }) => theme.animation.sidebar};

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundSoft};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.tablet} {
    width: ${({ theme }) => theme.layout.sidebarMobileWidth};
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-105%")});

    &:hover {
      width: ${({ theme }) => theme.layout.sidebarMobileWidth};
    }
  }
`;

export const UserHeader = styled.div`
  min-height: 112px;
  padding: 16px 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const UserAvatar = styled.div`
  width: 42px;
  min-width: 42px;
  height: 42px;

  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  color: #fff;
  font-weight: 900;
  font-size: ${({ theme }) => theme.font.size.sm};

  box-shadow: 0 12px 28px
    color-mix(in srgb, ${({ theme }) => theme.colors.primary} 35%, transparent);
`;

export const UserDetails = styled.div`
  min-width: 0;

  opacity: 0;
  transform: translateX(-8px);

  transition:
    opacity ${({ theme }) => theme.animation.fade},
    transform ${({ theme }) => theme.animation.fade};

  ${SidebarContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  strong,
  span,
  small {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: 800;
  }

  span {
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 700;
  }

  small {
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  ${({ theme }) => theme.media.tablet} {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Nav = styled.nav`
  flex: 1;
  padding: 12px 10px;
`;

export const NavGroup = styled.div`
  margin-bottom: 4px;

  a {
    min-height: 42px;
    padding: 0 12px;

    display: flex;
    align-items: center;
    gap: 12px;

    border-radius: ${({ theme }) => theme.radius.md};

    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: 700;

    position: relative;

    transition:
      background ${({ theme }) => theme.animation.hover},
      color ${({ theme }) => theme.animation.hover},
      transform ${({ theme }) => theme.animation.hover};

    .icon {
      width: 24px;
      min-width: 24px;
      display: inline-flex;
      justify-content: center;
      font-size: 18px;
    }

    .label {
      opacity: 0;
      white-space: nowrap;
      transform: translateX(-8px);

      transition:
        opacity ${({ theme }) => theme.animation.fade},
        transform ${({ theme }) => theme.animation.fade};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surfaceStrong};
      transform: translateX(2px);
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      background: color-mix(
        in srgb,
        ${({ theme }) => theme.colors.primary} 16%,
        transparent
      );
    }

    &.active::before {
      content: "";
      width: 3px;
      height: 22px;
      border-radius: 99px;
      background: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 14px ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
    }
  }

  ${SidebarContainer}:hover & a .label {
    opacity: 1;
    transform: translateX(0);
  }

  ${({ theme }) => theme.media.tablet} {
    a .label {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const NavButton = styled.button`
  width: 100%;
  min-height: 42px;
  padding: 0 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: 700;

  position: relative;

  transition:
    background ${({ theme }) => theme.animation.hover},
    color ${({ theme }) => theme.animation.hover},
    box-shadow ${({ theme }) => theme.animation.hover};

  .icon {
    width: 24px;
    min-width: 24px;
    display: inline-flex;
    justify-content: center;
    font-size: 18px;
  }

  .label {
    opacity: 0;
    white-space: nowrap;
    transform: translateX(-8px);

    transition:
      opacity ${({ theme }) => theme.animation.fade},
      transform ${({ theme }) => theme.animation.fade};
  }

  .chevron {
    margin-left: auto;
    flex-shrink: 0;
    opacity: 0;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});

    transition:
      opacity ${({ theme }) => theme.animation.fade},
      transform ${({ theme }) => theme.animation.sidebar};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.primary};
      background: color-mix(in srgb, ${theme.colors.primary} 16%, transparent);
      box-shadow: inset 0 0 0 1px
        color-mix(in srgb, ${theme.colors.primary} 20%, transparent);

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 3px;
        height: 58%;
        transform: translateY(-50%);
        border-radius: 0 99px 99px 0;
        background: ${theme.colors.primary};
        box-shadow: 0 0 16px ${theme.colors.primary};
      }
    `}

  ${SidebarContainer}:hover & .label,
  ${SidebarContainer}:hover & .chevron {
    opacity: 1;
  }

  ${SidebarContainer}:hover & .label {
    transform: translateX(0);
  }

  ${({ theme }) => theme.media.tablet} {
    .label,
    .chevron {
      opacity: 1;
    }
    .label {
      transform: translateX(0);
    }
  }
`;

export const SubMenu = styled.div`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "340px" : "0")};

  transition: max-height ${({ theme }) => theme.animation.sidebar};

  padding-left: 8px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      margin-top: 4px;
      margin-bottom: 6px;
    `}
`;

export const SubMenuItem = styled.div`
  a {
    min-height: 36px;
    font-size: ${({ theme }) => theme.font.size.sm};
    padding-left: 18px;

    .icon {
      font-size: 15px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surfaceStrong};
    }
  }
`;

export const Bottom = styled.div`
  padding: 12px 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const BottomButton = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 0 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: 800;

  transition:
    background ${({ theme }) => theme.animation.hover},
    color ${({ theme }) => theme.animation.hover};

  svg {
    width: 20px;
    min-width: 20px;
  }

  span {
    opacity: 0;
    white-space: nowrap;
    transition: opacity ${({ theme }) => theme.animation.fade};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  }

  ${SidebarContainer}:hover & span {
    opacity: 1;
  }

  ${({ theme }) => theme.media.tablet} {
    span {
      opacity: 1;
    }
  }
`;
