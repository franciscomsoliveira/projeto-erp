import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(4px);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  transition: opacity ${({ theme }) => theme.transitions.normal};

  z-index: ${({ theme }) => theme.zIndex.overlay};

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  inset: 0 auto 0 0;

  width: ${({ theme }) => theme.layout.sidebarMobileWidth};

  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.backgroundSoft};

  border-right: 1px solid ${({ theme }) => theme.colors.border};

  z-index: ${({ theme }) => theme.zIndex.sidebar};

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});

  transition:
    transform ${({ theme }) => theme.transitions.normal},
    width ${({ theme }) => theme.transitions.normal};

  overflow: hidden;

  ${({ theme }) => theme.media.desktop} {
    transform: translateX(0);

    width: ${({ theme }) => theme.layout.sidebarCollapsed};

    &:hover {
      width: ${({ theme }) => theme.layout.sidebarWidth};
    }
  }
`;

export const Brand = styled.div`
  height: ${({ theme }) => theme.layout.topbarHeight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.typography.fontFamily.heading};

  white-space: nowrap;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    border: none;
    border-radius: ${({ theme }) => theme.radius.md};

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;
  }

  ${({ theme }) => theme.media.desktop} {
    button {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 12px 8px;

  gap: 6px;
`;

export const NavItem = styled.a`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 0 14px;

  border: none;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;

  color: ${({ theme }) => theme.colors.textSoft};

  cursor: pointer;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &.active,
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 22px;

  font-size: 18px;
`;

export const Label = styled.span`
  white-space: nowrap;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const Footer = styled.div`
  padding: 8px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
