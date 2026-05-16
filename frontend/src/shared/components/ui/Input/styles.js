import styled, { css } from "styled-components";

const sizes = {
  sm: css`
    height: 34px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,

  md: css`
    height: 40px;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};

    ${({ theme }) => theme.media.tablet} {
      height: 42px;
      font-size: ${({ theme }) => theme.typography.fontSize.md};
    }
  `,

  lg: css`
    height: 46px;
    padding: 0 14px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};

    ${({ theme }) => theme.media.tablet} {
      height: 50px;
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
  `,
};

export const Container = styled.div`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

export const InputWrapper = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: ${({ theme }) => theme.radius.sm};

  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.border};

  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  ${({ $size }) => sizes[$size] || sizes.md}

  &:focus-within {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.primary};

    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError ? theme.colors.dangerSoft : theme.colors.primarySoft};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.55;
      cursor: not-allowed;
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  min-width: 0;

  padding: 0;

  border: none;
  outline: none;

  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  font-size: inherit;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &[type="number"] {
    appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.textSoft};
  flex-shrink: 0;

  svg {
    font-size: 1.1em;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;
    color: inherit;

    cursor: pointer;
  }
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.danger};
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;
