import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.aside`
  position: fixed;
  top: ${({ theme }) => theme.layout.topbarHeight};
  left: 0;
  bottom: 0;
  z-index: 1000;

  width: ${({ theme, $isExpanded }) =>
    $isExpanded ? theme.layout.sidebarWidth : theme.layout.sidebarCollapsed};

  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  transition: width ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: ${({ theme }) => theme.layout.topbarHeight};
    width: ${({ theme }) => theme.layout.sidebarMobileWidth};
    transition: transform ${({ theme }) => theme.transitions.normal};

    transform: translateX(
      ${({ $isMobileOpen }) => ($isMobileOpen ? "0" : "-100%")}
    );
  }
`;

export const Nav = styled.nav`
  display: grid;
  gap: 4px;
  padding: 14px 10px;
`;

const labelVisible = css`
  opacity: 1;
  pointer-events: auto;
`;

const labelHidden = css`
  opacity: 0;
  pointer-events: none;
`;

export const ItemLink = styled(NavLink)`
  height: 44px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  gap: 14px;

  border-radius: ${({ theme }) => theme.radius.md};

  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  white-space: nowrap;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  svg {
    min-width: 20px;
    font-size: 20px;
    flex-shrink: 0;
  }

  span {
    transition: opacity ${({ theme }) => theme.transitions.normal};
    ${({ $isExpanded }) => ($isExpanded ? labelVisible : labelHidden)}
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:not(.active):hover {
    background: ${({ theme }) => theme.colors.backgroundSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SubmenuButton = styled.button`
  width: 100%;
  height: 44px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  gap: 14px;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  white-space: nowrap;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  svg {
    min-width: 20px;
    font-size: 20px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    text-align: left;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    ${({ $isExpanded }) => ($isExpanded ? labelVisible : labelHidden)}
  }

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Chevron = styled.div`
  display: flex;
  flex-shrink: 0;

  transition:
    opacity ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  opacity: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)};
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

export const SubmenuContent = styled.div`
  display: ${({ $open, $isExpanded }) =>
    $open && $isExpanded ? "grid" : "none"};
  gap: 4px;
  margin: 4px 0 8px 12px;

  ${ItemLink} {
    height: 40px;
    font-size: 14px;
  }
`;
