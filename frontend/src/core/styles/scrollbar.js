import { css } from "styled-components";

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.round};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const hideScrollbar = css`
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
