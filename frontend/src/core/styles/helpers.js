import { css } from "styled-components";

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const lineClamp = (lines = 2) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const fullSize = css`
  width: 100%;
  height: 100%;
`;

export const absoluteFill = css`
  position: absolute;
  inset: 0;
`;

export const visuallyHidden = css`
  position: absolute;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;

  border: 0;
`;

export const noSelect = css`
  user-select: none;
`;

export const safeAreaPadding = css`
  padding-left: max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));
`;
