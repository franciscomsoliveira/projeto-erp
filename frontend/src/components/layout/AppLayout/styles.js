import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;

  background:
    radial-gradient(
      circle at top left,
      rgba(91, 106, 240, 0.16),
      transparent 32%
    ),
    ${({ theme }) => theme.colors.background};
`;

export const BodyArea = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;

  height: 100vh;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const MainWrapper = styled.div`
  min-width: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TopbarArea = styled.header`
  position: sticky;
  top: 0;
  height: ${({ theme }) => theme.layout.topbarHeight};
  z-index: 80;

  background: ${({ theme }) =>
    theme.colors.glassSidebar || theme.colors.surface};
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);

  border-bottom: 1px solid
    ${({ theme }) => theme.colors.glassBorder || theme.colors.border};
`;

export const MainArea = styled.main`
  grid-column: 2;

  height: calc(100vh - ${({ theme }) => theme.layout.topbarHeight});

  overflow-x: hidden;
  overflow-y: auto;

  ${({ theme }) => theme.media.tablet} {
    grid-column: 1;
  }
`;

export const Content = styled.div`
  padding: 24px 28px 40px;
  min-width: 0;

  ${({ theme }) => theme.media.tablet} {
    padding: 16px;
  }
`;
