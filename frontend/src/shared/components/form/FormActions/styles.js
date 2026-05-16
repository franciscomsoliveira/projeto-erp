import styled, { css } from "styled-components";

const alignments = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
};

export const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    justify-content: ${({ $align }) => alignments[$align] || alignments.end};
  }

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      bottom: 0;

      padding: ${({ theme }) => theme.spacing.md} 0;

      background: ${({ theme }) => theme.colors.background};

      border-top: 1px solid ${({ theme }) => theme.colors.border};
    `}
`;
