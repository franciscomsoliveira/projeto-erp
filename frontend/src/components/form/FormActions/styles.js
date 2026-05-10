import styled, { css } from "styled-components";

const alignments = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
};

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => alignments[$align] || alignments.end};
  gap: 10px;
  flex-wrap: wrap;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      bottom: 0;
      z-index: 5;
      padding: 14px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radius.md};
      background: ${({ theme }) => theme.colors.surface};
      box-shadow: 0 -8px 30px ${({ theme }) => theme.colors.shadow};
    `}

  ${({ theme }) => theme.media.mobile} {
    button {
      width: 100%;
    }
  }
`;
