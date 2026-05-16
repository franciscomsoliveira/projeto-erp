import styled, { css } from "styled-components";

const cardVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
  `,

  soft: css`
    background: ${({ theme }) => theme.colors.surfaceSoft};
    border-color: ${({ theme }) => theme.colors.borderSoft};
  `,

  glass: css`
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.backgroundSoft} 82%,
      transparent
    );

    backdrop-filter: blur(18px) saturate(160%);
    border-color: ${({ theme }) => theme.colors.borderSoft};
  `,

  outlined: css`
    background: transparent;
    border-color: ${({ theme }) => theme.colors.border};
  `,

  success: css`
    background: ${({ theme }) => theme.colors.successSoft};
    border-color: ${({ theme }) => theme.colors.success};
  `,

  warning: css`
    background: ${({ theme }) => theme.colors.warningSoft};
    border-color: ${({ theme }) => theme.colors.warning};
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.dangerSoft};
    border-color: ${({ theme }) => theme.colors.danger};
  `,

  info: css`
    background: ${({ theme }) => theme.colors.infoSoft};
    border-color: ${({ theme }) => theme.colors.info};
  `,
};

const paddings = {
  none: "0",
  sm: "12px",
  md: "16px",
  lg: "24px",
};

export const CardContainer = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;

  border: 1px solid;
  border-radius: ${({ theme }) => theme.radius.lg};

  box-shadow: ${({ theme }) => theme.shadows.sm};

  overflow: hidden;

  padding: ${({ $padding }) => paddings[$padding] || paddings.md};

  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
    `}

  ${({ $variant }) => cardVariants[$variant] || cardVariants.default}

  transition:
    transform ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
    `}

  ${({ $hoverable, $clickable }) =>
    ($hoverable || $clickable) &&
    css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.md};
        border-color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.md};

  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

export const Content = styled.div`
  min-width: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StatContainer = styled(CardContainer)`
  flex-direction: row;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const StatIcon = styled.div`
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};

  flex-shrink: 0;
`;

export const StatContent = styled.div`
  min-width: 0;
`;

export const StatLabel = styled.span`
  display: block;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const StatValue = styled.strong`
  display: block;

  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const StatMeta = styled.span`
  display: block;

  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const InfoContainer = styled(CardContainer)``;

export const InfoTitle = styled.h4`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSoft};
`;
