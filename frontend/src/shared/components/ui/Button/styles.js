import styled, { css } from "styled-components";

import { spin } from "@/core/styles";

const sizes = {
  sm: css`
    height: 34px;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,

  md: css`
    height: 42px;
    padding: 0 16px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  `,

  lg: css`
    height: 50px;
    padding: 0 20px;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      filter: brightness(1.08);
    }
  `,

  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primarySoft};
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSoft};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,

  success: css`
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      filter: brightness(1.08);
    }
  `,

  warning: css`
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.black};

    &:hover:not(:disabled) {
      filter: brightness(1.05);
    }
  `,
};

export const StyledButton = styled.button`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.sm};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.md};

  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  cursor: pointer;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  ${({ $size }) => sizes[$size] || sizes.md}

  ${({ $variant }) => variants[$variant] || variants.primary}

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const ButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    font-size: 1.1em;
  }
`;

export const Spinner = styled.span`
  width: 16px;
  height: 16px;

  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: ${({ theme }) => theme.radius.round};

  animation: ${spin} 0.75s linear infinite;
`;
