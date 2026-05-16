import styled, { css } from "styled-components";

const variants = {
  default: css`
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  `,

  success: css`
    background: ${({ theme }) => theme.colors.successSoft};
    color: ${({ theme }) => theme.colors.success};
  `,

  warning: css`
    background: ${({ theme }) => theme.colors.warningSoft};
    color: ${({ theme }) => theme.colors.warning};
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.dangerSoft};
    color: ${({ theme }) => theme.colors.danger};
  `,
};

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 28px;

  padding: 0 12px;

  border-radius: ${({ theme }) => theme.radius.round};

  font-size: ${({ theme }) => theme.typography.fontSize.xs};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  ${({ $status }) => variants[$status] || variants.default}
`;
