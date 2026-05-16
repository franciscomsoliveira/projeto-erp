import { css } from "styled-components";

export const disabledState = css`
  opacity: 0.55;
  cursor: not-allowed;
  pointer-events: none;
`;

export const focusRing = css`
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

export const hoverLift = css`
  transition:
    transform ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const activePress = css`
  &:active {
    transform: scale(0.98);
  }
`;

export const loadingState = css`
  opacity: 0.8;
  cursor: progress;
  pointer-events: none;
`;
