import styled, { css, keyframes } from "styled-components";

const sizes = {
  sm: css`
    height: 34px;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.font.size.sm};
  `,
  md: css`
    height: 42px;
    padding: 0 16px;
    font-size: ${({ theme }) => theme.font.size.md};
  `,
  lg: css`
    height: 50px;
    padding: 0 22px;
    font-size: ${({ theme }) => theme.font.size.lg};
  `,
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
      border-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid transparent;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceStrong};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.error};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.error};
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.success};
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  min-width: 90px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease,
    transform 0.1s ease;
  ${({ $size }) => sizes[$size] || sizes.md}
  ${({ $variant }) => variants[$variant] || variants.primary}
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.info};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
  ${({ theme }) => theme.media.mobile} {
    min-width: auto;
  }
`;
const spin = keyframes`to{transform:rotate(360deg)}`;
export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;
