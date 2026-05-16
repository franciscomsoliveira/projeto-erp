import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at top left,
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.primary} 14%,
        transparent
      ),
      transparent 34%
    ),
    ${({ theme }) => theme.colors.background};
`;

export const TopbarArea = styled.header`
  position: sticky;
  top: 0;
  height: ${({ theme }) => theme.layout.topbarHeight};

  z-index: ${({ theme }) => theme.zIndex.topbar};

  background: ${({ theme }) => theme.colors.backgroundSoft};

  backdrop-filter: blur(18px) saturate(180%);

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const BodyArea = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.layout.topbarHeight});

  ${({ theme }) => theme.media.desktop} {
    display: grid;
    grid-template-columns: ${({ theme }) => theme.layout.sidebarCollapsed} 1fr;
  }
`;

export const MainArea = styled.main`
  min-width: 0;
  min-height: calc(100vh - ${({ theme }) => theme.layout.topbarHeight});
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.layout.pagePaddingMobile};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.layout.pagePaddingTablet};
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${({ theme }) => theme.layout.pagePaddingDesktop};
  }
`;
