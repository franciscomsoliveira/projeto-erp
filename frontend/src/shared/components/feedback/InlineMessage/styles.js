import styled, { css } from "styled-components";

const variants = {
  info: css`
    background: ${({ theme }) => theme.colors.infoSoft};
    border-color: ${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.info};
  `,

  success: css`
    background: ${({ theme }) => theme.colors.successSoft};
    border-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.success};
  `,

  warning: css`
    background: ${({ theme }) => theme.colors.warningSoft};
    border-color: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.warning};
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.dangerSoft};
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
  `,
};

export const Message = styled.div`
  width: 100%;

  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  padding: ${({ theme }) => theme.spacing.md};

  border: 1px solid;
  border-radius: ${({ theme }) => theme.radius.md};

  ${({ $variant }) => variants[$variant] || variants.info}
`;

export const IconBox = styled.div`
  flex-shrink: 0;

  display: inline-flex;
  align-items: flex-start;

  padding-top: 2px;
`;

export const Content = styled.div`
  min-width: 0;
`;

export const Title = styled.strong`
  display: block;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const Text = styled.p`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.text};
`;
