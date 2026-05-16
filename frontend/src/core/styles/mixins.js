import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inlineCenter = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const glassEffect = css`
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.backgroundSoft} 82%,
    transparent
  );

  backdrop-filter: blur(18px) saturate(160%);

  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const cardSurface = css`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.lg};

  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const pageContainer = css`
  width: 100%;

  padding: ${({ theme }) => theme.layout.pagePaddingMobile};

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.layout.pagePaddingTablet};
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${({ theme }) => theme.layout.pagePaddingDesktop};
  }
`;

export const responsiveGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const formGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
