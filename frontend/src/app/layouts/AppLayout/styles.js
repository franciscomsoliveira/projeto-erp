import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const MainArea = styled.main`
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.layout.topbarHeight};

  padding-left: ${({ theme, $expanded }) =>
    $expanded ? theme.layout.sidebarWidth : theme.layout.sidebarCollapsed};

  transition: padding-left ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 0;
    transition: none;
  }
`;

export const Content = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.layout.topbarHeight});
  padding: ${({ theme }) => theme.layout.pagePaddingDesktop};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.layout.pagePaddingTablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.layout.pagePaddingMobile};
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.55);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
