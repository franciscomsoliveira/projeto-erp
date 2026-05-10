import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 22px;

  padding: 26px;

  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 14px 34px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.06),
      0 18px 42px rgba(0, 0, 0, 0.08);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;

    width: 100%;
    height: 4px;

    background: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const IconBox = styled.div`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border-radius: ${({ theme }) => theme.radius.lg};

  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error : theme.colors.primary};

  background: ${({ theme }) => theme.colors.surfaceStrong};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  margin: 0;

  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.4px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin: 0;

  max-width: 720px;

  font-size: 13px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;

  ${({ theme, $variant }) => {
    const variants = {
      default: css`
        color: ${theme.colors.textMuted};
        background: ${theme.colors.surfaceStrong};
      `,
      success: css`
        color: ${theme.colors.success};
        background: ${theme.colors.successSoft};
      `,
      warning: css`
        color: ${theme.colors.warning};
        background: ${theme.colors.warningSoft};
      `,
      error: css`
        color: ${theme.colors.error};
        background: ${theme.colors.errorSoft};
      `,
    };

    return variants[$variant] || variants.default;
  }}
`;

export const ErrorCounter = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.errorSoft};
`;

export const CollapseButton = styled.button`
  border: 0;
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border-radius: ${({ theme }) => theme.radius.md};

  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceStrong};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  animation: sectionFade 0.25s ease;

  @keyframes sectionFade {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TabButton = styled.button`
  border: 0;
  padding: 8px 14px;

  border-radius: 999px;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primarySoft : theme.colors.surfaceStrong};

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StickyActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${({ $sticky, theme }) =>
    $sticky &&
    css`
      position: sticky;
      bottom: 0;
      z-index: 5;

      padding: 16px;
      margin: 0 -26px -26px;

      background: ${theme.colors.surface};
      box-shadow: 0 -12px 24px rgba(0, 0, 0, 0.06);
    `}
`;

export const SkeletonBox = styled.div`
  height: ${({ $small }) => ($small ? "42px" : "64px")};
  width: 100%;

  border-radius: ${({ theme }) => theme.radius.lg};

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surfaceStrong} 25%,
    ${({ theme }) => theme.colors.surfaceSoft} 50%,
    ${({ theme }) => theme.colors.surfaceStrong} 75%
  );

  background-size: 200% 100%;
  animation: skeletonLoading 1.4s infinite;

  @keyframes skeletonLoading {
    from {
      background-position: 200% 0;
    }

    to {
      background-position: -200% 0;
    }
  }
`;
