import { css } from "styled-components";

export const mobileOnly = (styles) => css`
  @media (max-width: 767px) {
    ${styles}
  }
`;

export const tabletUp = (styles) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;

export const desktopUp = (styles) => css`
  @media (min-width: 1024px) {
    ${styles}
  }
`;

export const wideUp = (styles) => css`
  @media (min-width: 1280px) {
    ${styles}
  }
`;

export const hideOnMobile = css`
  @media (max-width: 767px) {
    display: none !important;
  }
`;

export const hideOnDesktop = css`
  @media (min-width: 1024px) {
    display: none !important;
  }
`;
